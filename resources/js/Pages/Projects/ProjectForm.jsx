import React, { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
//form components
import Forminput from "@/Components/Customcomponents/FormItems/Forminut";
import JoditEditor from "jodit-react";

const Leadform = ({ data, setData, saveButton, submitHandler }) => {
    const [detailsContent, setdetailsContent] = useState("");

    return (
        <div className="py-2">
            <div className="w-[100%] mx-auto p-4 flex flex-row flex-wrap justify-center">
                <div className="sm:w-[70%] m-2 ml-6 md:w-[20%] flex flex-col p-4 max-h-[50vh] bg-white md:mr-6 rounded-md shadow-md">
                    <img
                        className="sm:h-[80px] md:h-[auto]"
                        src="https://dgbits.in/images/logo-dgbits.svg"
                    />
                    <h4 className="mt-2 mb-3 text-center text-2xl text-red-600 font-bold">
                        Instructions
                    </h4>
                    <ul className="list-none list-outside m-2">
                        <li>Instruction 1</li>
                        <li>Instruction 2</li>
                        <li>Instruction 3</li>
                        <li>Instruction 4</li>
                        <li>Instruction 5</li>
                    </ul>
                    <p className="text-center font-serif">
                        {" "}
                        <span className="text-red-700 text-2xl">*</span>
                        Read all the instructions carefully
                    </p>
                </div>
                <div className="w-[70%] flex flex-col p-4 bg-white m-2 ml-6 rounded-md shadow-md sm:h-[auto]">
                    <h3 className="text-center font-bold text-2xl text-orange-600 font-serif">
                        Create New Project
                    </h3>
                    <form onSubmit={submitHandler}>
                        <div className="flex sm:flex-col md:flex-row justify-center items-center">
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label htmlFor="ptitle">Project Title</label>
                                <Forminput
                                    // onChange={(e) =>
                                    //     setData("title", e.target.value)
                                    // }
                                    id="ptitle"
                                    placeholder="Enter Project Title"
                                    //value={data.title}
                                />
                            </div>
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label htmlFor="leadOwner" className="">
                                    Select Status
                                </label>
                                <br />
                                <select
                                    id="leadOwner"
                                    // onChange={(e) =>
                                    //     setData("lowner", e.target.value)
                                    // }
                                    // value={data.lowner}
                                    className="w-[100%] rounded border-[0.5px] border-[#D3D3D3]"
                                    placeholder="Select Contact Type"
                                >
                                    <option>Select Project Status</option>
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
                                <label className="" htmlFor="leadManager">
                                    Project Priority
                                </label>
                                <br />
                                <select
                                    id="leadManager"
                                    // value={data.lmanager}
                                    // onChange={(e) =>
                                    //     setData("lmanager", e.target.value)
                                    // }
                                    className="w-[100%] rounded border-[0.5px] border-[#D3D3D3]"
                                    placeholder="Select Contact Type"
                                >
                                    <option>Select Project Priority</option>
                                    <option>Urgent</option>
                                    <option>Medium</option>
                                    <option>Business Lead</option>
                                    <option>Student</option>
                                    <option>Intern</option>
                                </select>
                            </div>
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label htmlFor="leadsource" className="">
                                    Customer
                                </label>
                                <br />
                                <select
                                    id="leadsource"
                                    // value={data.lsource}
                                    // onChange={(e) =>
                                    //     setData("lsource", e.target.value)
                                    // }
                                    className="w-[100%] rounded border-[0.5px] border-[#D3D3D3]"
                                    placeholder="Select Contact Type"
                                >
                                    <option>Select Customer</option>
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
                                <label className="" htmlFor="industrytype">
                                    Assign to Employee
                                </label>
                                <br />
                                <select
                                    id="industrytype"
                                    // value={data.lindustry}
                                    // onChange={(e) =>
                                    //     setData("lindustry", e.target.value)
                                    // }
                                    className="w-[100%] rounded border-[0.5px] border-[#D3D3D3]"
                                    placeholder="Select Contact Type"
                                >
                                    <option>Select Employee</option>
                                    <option>Business</option>
                                    <option>Client</option>
                                    <option>Business Lead</option>
                                    <option>Student</option>
                                    <option>Intern</option>
                                </select>
                            </div>
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label htmlFor="budget">Project Budget</label>
                                <Forminput
                                    // onChange={(e) =>
                                    //     setData("title", e.target.value)
                                    // }
                                    id="budget"
                                    placeholder="Enter Project Budget"
                                    type="number"
                                    //value={data.title}
                                />
                            </div>
                        </div>
                        <div className="flex sm:flex-col md:flex-row justify-center items-center">
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label htmlFor="budget">Project Phase</label>
                                <Forminput
                                    // onChange={(e) =>
                                    //     setData("title", e.target.value)
                                    // }
                                    id="budget"
                                    placeholder="Enter Project Phase"
                                    type="text"
                                    //value={data.title}
                                />
                            </div>
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label htmlFor="startDate">Start Date</label>
                                <Forminput
                                    id="startDate"
                                    type="date"
                                    // value={data.contdate}
                                    // onChange={(e) =>
                                    //     setData("contdate", e.target.value)
                                    // }
                                />
                            </div>
                        </div>
                        <div className="flex sm:flex-col md:flex-row justify-center items-center">
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label htmlFor="dueDate">Due Date</label>
                                <Forminput
                                    id="dueDate"
                                    type="date"
                                    // value={data.contdate}
                                    // onChange={(e) =>
                                    //     setData("contdate", e.target.value)
                                    // }
                                />
                            </div>
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label className="mr-3">Set Reminder</label>
                                <input
                                    // checked={data.remind == "1" ? true : false}
                                    type="checkbox"
                                    className="rounded-sm"
                                    // value={data.remind}
                                    placeholder="Enter Title"
                                    // onChange={(e) =>
                                    //     setData("remind", e.target.checked)
                                    // }
                                />
                            </div>
                        </div>

                        <div className="flex sm:flex-col md:flex-row justify-center items-center">
                            <div className="w-[100%] m-3">
                                <label htmlFor="others" className="mr-3">
                                    Details
                                </label>
                                <JoditEditor
                                    id="others"
                                    //value={data.otherdetails}
                                    // value={
                                    //     data.otherdetails == undefined
                                    //         ? detailsContent
                                    //         : data.otherdetails
                                    // }
                                    // onBlur={(newContent) =>
                                    //     setdetailsContent(newContent)
                                    // }
                                    // onChange={(newContent) =>
                                    //     setData("otherdetails", newContent)
                                    // }
                                />
                            </div>
                        </div>

                        <div className="flex flex-row justify-center items-center">
                            <button className="m-3 bg-green-600 w-[150px] h-[50px] text-white font-bold rounded-sm">
                                {saveButton}
                            </button>

                            <Link
                                className="pt-2 pb-2"
                                href={window.route("projects.index")}
                                type="button"
                            >
                                <button className="m-3 bg-red-500 w-[150px] h-[50px] text-white font-bold rounded-sm">
                                    Cancel
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Leadform;
