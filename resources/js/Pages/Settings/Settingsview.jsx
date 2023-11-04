import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";

import SettingForm from "./SettingForm";

const Settingsview = ({ auth }) => {
    //Loading Edit View
    function editRecord(e) {
        router.get(route("leads.edit", e.currentTarget.id));
    }
    //destroy record
    function destroyRecord(e) {
        if (confirm("Are you sure you want to delete this record ?")) {
            router.delete(route("leads.destroy", e.currentTarget.id));
        }
    }
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Manage -Leads" />

            <div className="py-2">
                <div className="w-[100%] mx-auto p-4 flex flex-row flex-wrap justify-center">
                    <div className="sm:w-[70%] m-2 ml-6 md:w-[20%] flex flex-col p-4 max-h-[50vh] bg-white md:mr-6 rounded-md shadow-md">
                        <img
                            className="sm:h-[80px] md:h-[auto]"
                            src="https://dgbits.in/images/logo-dgbits.svg"
                        />
                        <h4 className="mt-2 mb-3">Search Settings Here</h4>
                        <input
                            type="search"
                            className="rounded-md mt-3"
                            placeholder="Search Leads"
                        />
                        <h4 className="mt-5">Add New Setting</h4>
                        <Link
                            className="pt-2 pb-2"
                            href={window.route("settings.create")}
                            type="button"
                        >
                            <button className="w-[100%] bg-purple-600 h-[150%] rounded-md text-white font-bold">
                                Add New
                            </button>
                        </Link>
                    </div>
                    <div className="w-[70%] flex flex-col p-4 bg-white m-2 ml-6 rounded-md shadow-md max-h-[90vh] overflow-y-scroll">
                        <h3 className="text-2xl text-orange-500 text-center font-serif font-bold">
                            Settings Management
                        </h3>
                        Settings List
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Settingsview;