import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";

import SettingForm from "./SettingForm";

const Settingsview = ({ auth, resource }) => {
    //Loading Edit View
    function editRecord(e) {
        router.get(route("settings.edit", e.currentTarget.id));
    }
    //destroy record
    function destroyRecord(e) {
        if (confirm("Are you sure you want to delete this record ?")) {
            router.delete(route("settings.destroy", e.currentTarget.id));
        }
    }
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Manage -Leads" />
            {console.log(resource)}
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
                            placeholder="Search Settings"
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
                        {/* <div className="flex flex-col">
                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                    <div className="overflow-hidden">
                                        <table className="min-w-full text-left text-sm font-light">
                                            <thead className="border-b font-medium dark:border-neutral-500">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-4"
                                                    >
                                                        #
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-4"
                                                    >
                                                        First
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-4"
                                                    >
                                                        Last
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-4"
                                                    >
                                                        Handle
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-b dark:border-neutral-500">
                                                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                        1
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        Mark
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        Otto
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        @mdo
                                                    </td>
                                                </tr>
                                                <tr className="border-b dark:border-neutral-500">
                                                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                        2
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        Jacob
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        Thornton
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        @fat
                                                    </td>
                                                </tr>
                                                <tr className="border-b dark:border-neutral-500">
                                                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                        3
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        Larry
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        Wild
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        @twitter
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="container mx-auto mt-8">
                            <table className="text-center min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                                <thead className="bg-gray-800 text-white">
                                    <tr>
                                        <th className="px-4 py-2">ID</th>
                                        <th className="px-4 py-2">Type</th>
                                        <th className="px-4 py-2">Name</th>
                                        <th className="px-4 py-2">Value</th>
                                        <th className="px-4 py-2">
                                            Parent Code
                                        </th>
                                        <th className="px-4 py-2">
                                            Display Order
                                        </th>
                                        <th className="px-4 py-2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {resource.map((item, index) => (
                                        <tr
                                            key={item.id}
                                            className={
                                                index % 2 === 0
                                                    ? "bg-gray-100"
                                                    : "bg-white"
                                            }
                                        >
                                            <td className="px-4 py-2">
                                                {item.id}
                                            </td>
                                            <td className="px-4 py-2">
                                                {item.type}
                                            </td>
                                            <td className="px-4 py-2">
                                                {item.name}
                                            </td>
                                            <td className="px-4 py-2">
                                                {item.value}
                                            </td>
                                            <td className="px-4 py-2">
                                                {item.pcode}
                                            </td>
                                            <td className="px-4 py-2">
                                                {item.dorder}
                                            </td>
                                            <td className="px-4 py-2">
                                                <button
                                                    className="p-2 m-2 bg-green-400 text-white font-bold rounded-md"
                                                    id={item.id}
                                                    onClick={editRecord}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className="p-2 m-2 bg-red-400 text-white font-bold rounded-md"
                                                    id={item.id}
                                                    onClick={destroyRecord}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Settingsview;
