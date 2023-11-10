import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";

import imgOne from "../../../../public/assets/bg-one.png";
import imgTwo from "../../../../public/assets/bg-two-crm.png";
import imgThree from "../../../../public/assets/img-three.png";
import imgFour from "../../../../public/assets/img-four.png";

let bgImgs = [imgOne, imgTwo, imgThree, imgFour];

const Tasklist = ({ auth, resource }) => {
    //Loading Edit View
    function editRecord(e) {
        router.get(route("tasks.edit", e.currentTarget.id));
    }
    //destroy record
    function destroyRecord(e) {
        if (confirm("Are you sure you want to delete this record ?")) {
            router.delete(route("tasks.destroy", e.currentTarget.id));
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
                        <h4 className="mt-2 mb-3">Search Tasks Here</h4>
                        <input
                            type="search"
                            className="rounded-md mt-3"
                            placeholder="Search Tasks"
                        />
                        <h4 className="mt-5">Add New Task</h4>
                        <Link
                            className="pt-2 pb-2"
                            href={window.route("tasks.create")}
                            type="button"
                        >
                            <button className="w-[100%] bg-purple-600 h-[150%] rounded-md text-white font-bold">
                                Add New
                            </button>
                        </Link>
                    </div>
                    <div className="w-[70%] flex flex-col p-4 bg-white m-2 ml-6 rounded-md shadow-md max-h-[90vh] overflow-y-scroll">
                        <h3 className="text-2xl text-orange-500 text-center font-serif font-bold">
                            Task Management
                        </h3>
                        {resource.map((task) => (
                            <div
                                key={task.id}
                                className="flex flex-col rounded-lg bg-white shadow-md dark:bg-neutral-700 md:max-w-[full] md:flex-row m-2"
                            >
                                <img
                                    className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                    src={
                                        bgImgs[
                                            Math.floor(
                                                Math.random() * bgImgs.length
                                            )
                                        ]
                                    }
                                    alt="avatar"
                                />

                                <div className="flex flex-col justify-start p-6 w-[100%]">
                                    <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                                        {task.tname}
                                    </h5>
                                    <div className="flex flex-row justify-between">
                                        <p className="text-neutral-600 dark:text-neutral-200">
                                            Name
                                        </p>
                                        <p className="text-neutral-600 dark:text-neutral-200">
                                            {task.tname}
                                        </p>
                                    </div>
                                    <hr />
                                    <div className="flex flex-row justify-between">
                                        <p className="text-neutral-600 dark:text-neutral-200">
                                            Category
                                        </p>
                                        <p className="text-neutral-600 dark:text-neutral-200">
                                            {task.tcategory}
                                        </p>
                                    </div>
                                    <hr />
                                    <div className="flex flex-row justify-between">
                                        <p className="text-neutral-600 dark:text-neutral-200">
                                            Status
                                        </p>
                                        <p className="text-neutral-600 dark:text-neutral-200">
                                            {task.tstatus}
                                        </p>
                                    </div>
                                    <hr />
                                    <div className="flex flex-row justify-between">
                                        <p className="text-neutral-600 dark:text-neutral-200">
                                            Priority
                                        </p>
                                        <p className="text-neutral-600 dark:text-neutral-200">
                                            {task.tpriority}
                                        </p>
                                    </div>
                                    <hr />
                                    <div className="flex flex-row justify-between">
                                        <p className="text-neutral-600 dark:text-neutral-200">
                                            Status
                                        </p>
                                        <p className="text-neutral-600 dark:text-neutral-200">
                                            {task.tstatus}
                                        </p>
                                    </div>
                                    <hr />
                                    <div className="flex flex-row justify-between">
                                        <p className="text-neutral-600 dark:text-neutral-200">
                                            Start Date
                                        </p>
                                        <p className="text-neutral-600 dark:text-neutral-200">
                                            {task.tsdate}
                                        </p>
                                    </div>
                                    <hr />
                                    <div className="flex flex-row justify-between">
                                        <p className="text-neutral-600 dark:text-neutral-200">
                                            End Date
                                        </p>
                                        <p className="text-neutral-600 dark:text-neutral-200">
                                            {task.tddate}
                                        </p>
                                    </div>
                                    <hr />
                                    <div className="flex flex-row justify-between">
                                        <p className="text-neutral-600 dark:text-neutral-200">
                                            ID
                                        </p>
                                        <p className="text-neutral-600 dark:text-neutral-200">
                                            {task.id}
                                        </p>
                                    </div>
                                    <hr />

                                    <div className="flex flex-row justify-start">
                                        <button
                                            id={task.id}
                                            onClick={editRecord}
                                            className="m-2 bg-orange-500 w-[100px] h-[30px] text-white font-bold shadow-md rounded"
                                        >
                                            Edit
                                        </button>
                                        <Link
                                            href={window.route(
                                                "activity.index"
                                            )}
                                            type="button"
                                        >
                                            <button
                                                id={task.id}
                                                className="m-2 bg-blue-500 w-[auto] pl-2 pr-2 h-[30px] text-white font-bold shadow-md rounded"
                                            >
                                                Manage Duration
                                            </button>
                                        </Link>
                                        <button
                                            id={task.id}
                                            onClick={destroyRecord}
                                            className="m-2 bg-red-500 w-[100px] h-[30px] text-white font-bold shadow-md rounded"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Tasklist;
