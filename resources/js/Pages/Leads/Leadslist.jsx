import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";

//custom components
import Addbutton from "@/Components/Customcomponents/Buttons/Addbutton";
import Editbutton from "@/Components/Customcomponents/Buttons/Editbutton";
import Deletebutton from "@/Components/Customcomponents/Buttons/Deletebutton";
import Searchinput from "@/Components/Customcomponents/Inputs/Searchinput";

const Leadslist = ({ auth }) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Manage -Leads" />

            <div className="py-2">
                <div className="w-[100%] mx-auto p-4 flex flex-row flex-wrap justify-center items-center min-h-full">
                    <div className="w-[20%] flex flex-col p-4 bg-white m-2 mr-6 rounded-md shadow-md">
                        <h4 className="mt-2 mb-3">Search Leads Here</h4>
                        <input
                            type="search"
                            className="rounded-md mt-3"
                            placeholder="Search Leads"
                        />
                        <h4 className="mt-5">Add New Lead</h4>
                        <Addbutton>Add New</Addbutton>
                    </div>
                    <div className="w-[70%] flex flex-col p-4 bg-white m-2 ml-6">
                        Leads List
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Leadslist;
