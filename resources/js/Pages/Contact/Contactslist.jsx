import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

//components
import CardItem from "@/Components/CardItem";
import ListCardContact from "@/Components/ListCardContact";

import { BsFillGridFill, BsCardList } from "react-icons/bs";

const Contactslist = ({ auth, mustVerifyEmail, status }) => {
    const [grid, setGrid] = useState(true);

    const gridListHandler = () => {
        setGrid(!grid);
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Manage Contacts
                </h2>
            }
        >
            <div className="py-2">
                <div className="w-[100%] mx-auto p-1">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-4">
                        <div className="flex justify-end">
                            <input
                                type="search"
                                className="enabled:hover:border-gray-400 disabled:opacity-75 rounded m-3"
                                placeholder="Search"
                            />{" "}
                            {grid ? (
                                <BsFillGridFill
                                    onClick={gridListHandler}
                                    className="text-4xl text-orange-500 m-3"
                                />
                            ) : (
                                <BsCardList
                                    onClick={gridListHandler}
                                    className="text-4xl text-orange-500 m-3"
                                />
                            )}
                        </div>
                        {grid ? (
                            <div>
                                <ListCardContact />
                                <ListCardContact />
                                <ListCardContact />
                                <ListCardContact />
                                <ListCardContact />
                            </div>
                        ) : (
                            <div className="flex flex-wrap justify-around">
                                <CardItem />
                                <CardItem />
                                <CardItem />
                                <CardItem />
                                <CardItem />
                                <CardItem />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Contactslist;
