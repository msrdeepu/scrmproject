import React, { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
//form components
import Forminput from "@/Components/Customcomponents/FormItems/Forminut";
import JoditEditor from "jodit-react";

const TaskForm = ({
    data,
    setData,
    saveButton,
    submitHandler,
    record,
    formTitle,
}) => {
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
                        {formTitle}
                    </h3>
                    <form onSubmit={submitHandler}>
                        <div className="flex sm:flex-col md:flex-row justify-center items-center">
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label htmlFor="ttype" className="">
                                    Task Related To
                                </label>
                                <br />
                                <select
                                    id="ttype"
                                    onChange={(e) =>
                                        setData("ttype", e.target.value)
                                    }
                                    value={data.ttype}
                                    className="w-[100%] rounded border-[0.5px] border-[#D3D3D3]"
                                    placeholder="Select Task Type"
                                >
                                    <option>Select Lead Owner</option>
                                    <option>Business</option>
                                    <option>Client</option>
                                    <option>Business Lead</option>
                                    <option>Student</option>
                                    <option>Intern</option>
                                </select>
                            </div>
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label htmlFor="tname">Task Name</label>
                                <Forminput
                                    id="tname"
                                    value={data.tname}
                                    onChange={(e) =>
                                        setData("tname", e.target.value)
                                    }
                                    placeholder="Enter Task Name"
                                />
                            </div>
                        </div>
                        <div className="flex sm:flex-col md:flex-row justify-center items-center">
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label className="" htmlFor="leadManager">
                                    Task Status
                                </label>
                                <br />
                                <select
                                    id="tstatus"
                                    value={data.tstatus}
                                    onChange={(e) =>
                                        setData("tstatus", e.target.value)
                                    }
                                    className="w-[100%] rounded border-[0.5px] border-[#D3D3D3]"
                                    placeholder="Select Task Status"
                                >
                                    <option>Select Lead Manager</option>
                                    <option>Business</option>
                                    <option>Client</option>
                                    <option>Business Lead</option>
                                    <option>Student</option>
                                    <option>Intern</option>
                                </select>
                            </div>
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label htmlFor="tpriority" className="">
                                    Task Priority
                                </label>
                                <br />
                                <select
                                    id="tpriority"
                                    value={data.tpriority}
                                    onChange={(e) =>
                                        setData("tpriority", e.target.value)
                                    }
                                    className="w-[100%] rounded border-[0.5px] border-[#D3D3D3]"
                                    placeholder="Select Contact Type"
                                >
                                    <option>Select Lead Source</option>
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
                                <label className="" htmlFor="tcategory">
                                    Task Category
                                </label>
                                <br />
                                <select
                                    id="tcategory"
                                    value={data.tcategory}
                                    onChange={(e) =>
                                        setData("tcategory", e.target.value)
                                    }
                                    className="w-[100%] rounded border-[0.5px] border-[#D3D3D3]"
                                    placeholder="Select Contact Type"
                                >
                                    <option>Select Lead Industry</option>
                                    <option>Business</option>
                                    <option>Client</option>
                                    <option>Business Lead</option>
                                    <option>Student</option>
                                    <option>Intern</option>
                                </select>
                            </div>
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label htmlFor="taemploye" className="">
                                    Assigned Employee
                                </label>
                                <br />
                                <select
                                    id="taemploye"
                                    value={data.taemploye}
                                    onChange={(e) =>
                                        setData("taemploye", e.target.value)
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
                                <label className="" htmlFor="tdemploye">
                                    Deligated Employee
                                </label>
                                <br />
                                <select
                                    id="tdemploye"
                                    value={data.lrating}
                                    onChange={(e) =>
                                        setData("tdemploye", e.target.value)
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
                                <label htmlFor="tsdate">Start Date</label>
                                <Forminput
                                    id="tsdate"
                                    type="date"
                                    value={data.tsdate}
                                    onChange={(e) =>
                                        setData("tsdate", e.target.value)
                                    }
                                />
                            </div>
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label htmlFor="tddate">Due Date</label>
                                <Forminput
                                    id="tddate"
                                    type="date"
                                    value={data.tddate}
                                    onChange={(e) =>
                                        setData("tddate", e.target.value)
                                    }
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
                                    value={
                                        data.tdetails == undefined
                                            ? detailsContent
                                            : data.tdetails
                                    }
                                    onBlur={(newContent) =>
                                        setdetailsContent(newContent)
                                    }
                                    onChange={(newContent) =>
                                        setData("tdetails", newContent)
                                    }
                                />
                            </div>
                        </div>

                        <div className="flex flex-row justify-center items-center">
                            <button className="m-3 bg-green-600 w-[150px] h-[50px] text-white font-bold rounded-sm">
                                {saveButton}
                            </button>

                            <Link
                                className="pt-2 pb-2"
                                href={window.route("tasks.index")}
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

export default TaskForm;
