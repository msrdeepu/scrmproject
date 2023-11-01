import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";

//custom components
import Addbutton from "@/Components/Customcomponents/Buttons/Addbutton";

const Uidummy = ({ auth }) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Manage -Leads" />

            <div className="py-2">
                <div className="w-[100%] mx-auto p-4 flex flex-row flex-wrap justify-center">
                    <div className="w-[20%] flex flex-col p-4 max-h-[50vh] bg-white m-2 mr-6 rounded-md shadow-md">
                        <h4 className="m-4">Search Leads Here</h4>
                        <input
                            type="search"
                            className="rounded-md mt-3"
                            placeholder="Search Leads"
                        />
                        <h4 className="m-4">Add New Lead</h4>
                        <Addbutton className="mt-3">Add New</Addbutton>
                    </div>
                    <div className="w-[70%] flex flex-col p-4 bg-white m-2 ml-6 rounded-md shadow-md max-h-[90vh] overflow-y-scroll">
                        ecimen book.What is Lorem Ipsum? Lorem Ipsum is simply
                        dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book.
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Uidummy;
