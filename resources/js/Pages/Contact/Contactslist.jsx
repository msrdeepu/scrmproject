import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

//custom components
import Contactcard from "@/Components/Customcomponents/Cards/Contactcard";
import Flexcontainer from "@/Components/Customcomponents/Flexcontainer";
import Addbutton from "@/Components/Customcomponents/Buttons/Addbutton";

const Contactslist = ({ auth }) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="py-2">
                <div className="w-[100%] mx-auto p-1 flex flex-col justify-center items-center">
                    <div className=" bg-white shadow-lg rounded-md sm:w-[100%] md:w-[35%] p-5">
                        <div className="flex flex-row justify-between">
                            <div>
                                {" "}
                                <p>ID</p>
                                <p>CODE</p>
                                <p>Full Name</p>
                                <p>Contact Type</p>
                                <p>Company</p>
                                <p>Mobile</p>
                                <p>Email</p>
                                <p>Website</p>
                            </div>
                            <div>
                                <p>66</p>
                                <p>1685440720</p>
                                <p>V Sarada Devi</p>
                                <p>BUSINESS</p>
                                <p>Sri Vasavi Chemical Corporation</p>
                                <p>9849803444</p>
                                <p>info@svccorp.in</p>
                                <p>https://www.svccorp.in/</p>
                            </div>
                        </div>
                        <div className="text-center mt-5 flex flex-row justify-evenly">
                            <Addbutton>Add</Addbutton>
                            <p>Buttons</p>
                            <p>Buttons</p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Contactslist;
