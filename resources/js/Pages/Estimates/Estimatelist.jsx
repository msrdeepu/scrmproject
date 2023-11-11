import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";

//react icons
import { AiFillCopy, AiFillPrinter, AiFillDelete } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";

const Estimatelist = ({ auth, record }) => {
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
            {/* {console.log(resource)} */}
            <div className="py-2">
                <div className="w-[100%] mx-auto p-4 flex flex-row flex-wrap justify-center">
                    <div className="sm:w-[70%] m-2 ml-6 md:w-[20%] flex flex-col p-4 max-h-[50vh] bg-white md:mr-6 rounded-md shadow-md">
                        <img
                            className="sm:h-[80px] md:h-[auto]"
                            src="https://dgbits.in/images/logo-dgbits.svg"
                        />
                        <h4 className="mt-2 mb-3">Search Estiates Here</h4>
                        <input
                            type="search"
                            className="rounded-md mt-3"
                            placeholder="Search Estimates"
                        />
                        <h4 className="mt-5">Add New Estimate</h4>
                        <Link
                            className="pt-2 pb-2"
                            href={window.route("estimates.create")}
                            type="button"
                        >
                            <button className="w-[100%] bg-purple-600 h-[150%] rounded-md text-white font-bold">
                                Add New
                            </button>
                        </Link>
                    </div>
                    <div className="w-[70%] flex flex-col p-4 bg-white m-2 ml-6 rounded-md shadow-md max-h-[90vh] overflow-y-scroll">
                        <h3 className="text-2xl text-orange-500 text-center font-serif font-bold">
                            Estimates Management
                        </h3>

                        <div className="container mx-auto mt-8">
                            <table className="text-center min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                                <thead className="bg-gray-800 text-white">
                                    <tr>
                                        <th className="px-4 py-2">
                                            Estimate ID
                                        </th>
                                        <th className="px-4 py-2">Title</th>
                                        <th className="px-4 py-2">
                                            Total Amount
                                        </th>
                                        <th className="px-4 py-2">
                                            Amount Due
                                        </th>
                                        <th className="px-4 py-2">Due Date</th>

                                        <th className="px-4 py-2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {record.map((item, index) => (
                                        <tr
                                            key={item.id}
                                            className={
                                                index % 2 === 0
                                                    ? "bg-gray-100"
                                                    : "bg-white"
                                            }
                                        >
                                            <td className="px-4 py-2">
                                                {item.eid}
                                            </td>
                                            <td className="px-4 py-2">
                                                {item.eptitle}
                                            </td>
                                            <td className="px-4 py-2">
                                                {/* {item.name} */}
                                            </td>
                                            <td className="px-4 py-2">
                                                {/* {item.value} */}
                                            </td>
                                            <td className="px-4 py-2">
                                                {item.esdvalidity}
                                            </td>

                                            <td className="px-4 py-2">
                                                <button
                                                    className="p-2 m-2 bg-green-400 text-white font-bold rounded-md"
                                                    // id={item.id}
                                                    //onClick={editRecord}
                                                >
                                                    <AiFillCopy />
                                                </button>
                                                <button
                                                    className="p-2 m-2 bg-blue-400 text-white font-bold rounded-md"
                                                    // id={item.id}
                                                    //onClick={editRecord}
                                                >
                                                    <AiFillPrinter />
                                                </button>
                                                <button
                                                    className="p-2 m-2 bg-orange-400 text-white font-bold rounded-md"
                                                    //id={item.id}
                                                    //onClick={destroyRecord}
                                                >
                                                    <BiSolidEdit />
                                                </button>

                                                <button
                                                    className="p-2 m-2 bg-red-400 text-white font-bold rounded-md"
                                                    //id={item.id}
                                                    //onClick={destroyRecord}
                                                >
                                                    <AiFillDelete />
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

export default Estimatelist;
