import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";
import Forminput from "@/Components/Customcomponents/FormItems/Forminut";
import JoditEditor from "jodit-react";

const Activityist = ({ auth, resource }) => {
    const { data, setData, post, processing, errors, patch } = useForm({
        ltitle: "",
        lstatus: "",
        lrating: "",
        reminder: "",
        condate: "",
        notedetails: "",
        details: "",
    });

    const [detailsContent, setdetailsContent] = useState("");

    const remindHandler = (e) => {
        if (e.target.checked) {
            setRemindComponents(true);
        } else {
            setRemindComponents(false);
        }
        setData("reminder", e.target.checked);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(data);
        post("/scrm-activity/store");
    };

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
                        <h4 className="mt-2 mb-3">Search Activity Here</h4>
                        <input
                            type="search"
                            className="rounded-md mt-3"
                            placeholder="Search Leads"
                        />
                    </div>
                    <div className="w-[70%] flex flex-col p-4 bg-white m-2 ml-6 rounded-md shadow-md max-h-[90vh] overflow-y-scroll">
                        <h3 className="text-2xl text-orange-500 text-center font-serif font-bold">
                            Activity Management
                        </h3>
                        <form onSubmit={submitHandler}>
                            <div className="flex sm:flex-col md:flex-row justify-center items-center">
                                <div className="sm:w-[100%] md:w-[50%] m-3">
                                    <label htmlFor="titleItem">Title</label>
                                    <Forminput
                                        name="title"
                                        readOnly
                                        // value="Hello"
                                        onChange={(e) =>
                                            setData("ltitle", e.target.value)
                                        }
                                        id="titleItem"
                                        placeholder="Enter Title"
                                        // value={data.title}
                                    />
                                </div>

                                <div className="sm:w-[100%] md:w-[50%] m-3">
                                    <label htmlFor="status" className="">
                                        Lead Status
                                    </label>
                                    <br />
                                    <select
                                        id="status"
                                        // value={data.lstatus}
                                        onChange={(e) =>
                                            setData("lstatus", e.target.value)
                                        }
                                        className="w-[100%] rounded border-[0.5px] border-[#D3D3D3]"
                                        placeholder="Select Contact Type"
                                    >
                                        <option>Select Lead Status</option>
                                        <option>Business</option>
                                        <option>Client</option>
                                        <option>Business Lead</option>
                                        <option>Student</option>
                                        <option>Intern</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex sm:flex-col md:flex-row justify-center items-center">
                                <div className="sm:w-[100%] md:w-[50%] m-3">
                                    <label className="" htmlFor="rating">
                                        Rating
                                    </label>
                                    <br />
                                    <select
                                        id="rating"
                                        // value={data.lmanager}
                                        onChange={(e) =>
                                            setData("lrating", e.target.value)
                                        }
                                        className="w-[100%] rounded border-[0.5px] border-[#D3D3D3]"
                                        placeholder="Select Contact Type"
                                    >
                                        <option>Select Rating</option>
                                        <option>Business</option>
                                        <option>Client</option>
                                        <option>Business Lead</option>
                                        <option>Student</option>
                                        <option>Intern</option>
                                    </select>
                                </div>
                                <div className="sm:w-[100%] md:w-[50%] m-3">
                                    <label className="mr-3">Set Reminder</label>
                                    <input
                                        id="reminderItem"
                                        // checked={data.remind == "1" ? true : false}
                                        type="checkbox"
                                        className="rounded-sm"
                                        // value={data.remind}
                                        placeholder="Enter Title"
                                        onChange={remindHandler}
                                    />
                                </div>
                            </div>
                            {remindComponents ? (
                                <div className="flex sm:flex-col md:flex-row justify-center items-center">
                                    <div className="sm:w-[100%] md:w-[50%] m-3">
                                        <label htmlFor="date">
                                            Contact Date
                                        </label>
                                        <Forminput
                                            id="date"
                                            type="date"
                                            // value={data.contdate}
                                            onChange={(e) =>
                                                setData(
                                                    "condate",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="sm:w-[100%] md:w-[50%] m-3">
                                        <label htmlFor="title">Note:</label>
                                        <Forminput
                                            onChange={(e) =>
                                                setData(
                                                    "notedetails",
                                                    e.target.value
                                                )
                                            }
                                            id="title"
                                            placeholder="Enter Note Details"
                                            // value={data.title}
                                        />
                                    </div>
                                </div>
                            ) : (
                                ""
                            )}

                            <div className="flex sm:flex-col md:flex-row justify-center items-center">
                                <div className="w-[100%] m-3">
                                    <label htmlFor="others" className="mr-3">
                                        Details
                                    </label>
                                    <JoditEditor
                                        id="others"
                                        // value={
                                        //     data.otherdetails == undefined
                                        //         ? detailsContent
                                        //         : data.otherdetails
                                        // }

                                        value={detailsContent}
                                        onBlur={(newContent) =>
                                            setdetailsContent(newContent)
                                        }
                                        onChange={(newContent) =>
                                            setData("details", newContent)
                                        }
                                    />
                                </div>
                            </div>

                            <div className="flex flex-row justify-center items-center">
                                <button className="m-3 bg-green-600 w-[150px] h-[50px] text-white font-bold rounded-sm">
                                    Add Activity Log
                                </button>

                                <Link
                                    className="pt-2 pb-2"
                                    href={window.route("leads.index")}
                                    type="button"
                                >
                                    <button className="m-3 bg-red-500 w-[150px] h-[50px] text-white font-bold rounded-sm">
                                        Cancel
                                    </button>
                                </Link>
                            </div>
                        </form>
                        {/* timeline */}
                        <>
                            <h3 className="mb-6 ml-3 text-2xl font-bold text-neutral-700 dark:text-neutral-300">
                                Latest News
                            </h3>

                            <ol className="border-l-2 border-info-100">
                                {/* map th following */}
                                {resource.map((activity) => (
                                    <li>
                                        <div className="flex-start md:flex">
                                            <div className="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-info-100 text-info-700">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="h-4 w-4"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                            </div>

                                            <div className="mb-10 ml-6 block w-[100%] rounded-lg bg-neutral-50 p-6 shadow-lg shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
                                                <div className="mb-4 flex justify-between">
                                                    <p className="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700">
                                                        {activity.condate !== ""
                                                            ? "Reminder On"
                                                            : ""}
                                                    </p>

                                                    <p className="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700">
                                                        {activity.condate}
                                                    </p>
                                                </div>
                                                <hr />
                                                <p className="mb-6 text-neutral-700 dark:text-neutral-200">
                                                    {activity.details}
                                                </p>
                                                <p className="mb-6 text-neutral-700 dark:text-neutral-200">
                                                    {activity.notedetails}
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                ))}

                                {/* <li>
                                    <div className="flex-start md:flex">
                                        <div className="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-info-100 text-info-700">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="h-4 w-4"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </div>

                                        <div className="mb-10 ml-6 block max-w-md rounded-lg bg-neutral-50 p-6 shadow-lg shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
                                            <div className="mb-4 flex justify-between">
                                                <a
                                                    href="#!"
                                                    className="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                                                >
                                                    New Web Design
                                                </a>
                                                <a
                                                    href="#!"
                                                    className="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                                                >
                                                    04 / 02 / 2022
                                                </a>
                                            </div>
                                            <p className="mb-6 text-neutral-700 dark:text-neutral-200">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                                Quisque scelerisque diam non
                                                nisi semper, et elementum lorem
                                                ornare. Maecenas placerat
                                                facilisis mollis. Duis sagittis
                                                ligula in sodales vehicula.
                                            </p>
                                        </div>
                                    </div>
                                </li> */}
                            </ol>
                        </>
                        {/* timeline */}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Activityist;
