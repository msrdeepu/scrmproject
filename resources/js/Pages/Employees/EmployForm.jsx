import React, { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
//form components
import Forminput from "@/Components/Customcomponents/FormItems/Forminut";

const EmployForm = ({ data, setData, saveButton, submitHandler }) => {
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
                        <span className="text-red-700 text-2xl">*</span>
                        Read all the instructions carefully
                    </p>
                </div>
                <div className="w-[70%] flex flex-col p-4 bg-white m-2 ml-6 rounded-md shadow-md sm:h-[auto]">
                    <h3 className="text-center font-bold text-2xl text-orange-600 font-serif">
                        Employee Management
                    </h3>
                    {console.log(data)}
                    <form onSubmit={submitHandler}>
                        <div className="flex sm:flex-col md:flex-row justify-center items-center">
                            <div className="sm:w-[100%] md:w-[100%] m-3">
                                <label htmlFor="fullname">Full Name</label>
                                <Forminput
                                    type="text"
                                    placeholder="Enter Full Name"
                                    onChange={(e) =>
                                        setData("fullname", e.target.value)
                                    }
                                    id="fullname"
                                    value={data.fullname}
                                />
                            </div>
                        </div>
                        <div className="flex sm:flex-col md:flex-row justify-center items-center">
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label htmlFor="ccode">Company Code</label>
                                <Forminput
                                    required
                                    type="text"
                                    placeholder="Enter Company Code"
                                    onChange={(e) =>
                                        setData("ccode", e.target.value)
                                    }
                                    id="ccode"
                                    value={data.ccode}
                                />
                            </div>
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label htmlFor="empcode">Employee Code</label>
                                <Forminput
                                    type="text"
                                    placeholder="Enter Employe Code"
                                    onChange={(e) =>
                                        setData("empcode", e.target.value)
                                    }
                                    id="empcode"
                                    value={data.dob}
                                />
                            </div>
                        </div>
                        <div className="flex sm:flex-col md:flex-row justify-center items-center">
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label htmlFor="title">Date Of Birth</label>
                                <Forminput
                                    type="date"
                                    onChange={(e) =>
                                        setData("dob", e.target.value)
                                    }
                                    id="dob"
                                    value={data.dob}
                                />
                            </div>
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label htmlFor="gender" className="">
                                    Gender
                                </label>
                                <br />
                                <select
                                    id="gender"
                                    onChange={(e) =>
                                        setData("gender", e.target.value)
                                    }
                                    value={data.gender}
                                    className="w-[100%] rounded border-[0.5px] border-[#D3D3D3]"
                                    placeholder="Select Contact Type"
                                >
                                    <option>Select Gender</option>
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
                                <label className="" htmlFor="maritalstatuss">
                                    Martial Status
                                </label>
                                <br />
                                <select
                                    id="maritalstatus"
                                    value={data.maritalstatus}
                                    onChange={(e) =>
                                        setData(
                                            "maritalstatuss",
                                            e.target.value
                                        )
                                    }
                                    className="w-[100%] rounded border-[0.5px] border-[#D3D3D3]"
                                    placeholder="Select Contact Type"
                                >
                                    <option>Select Martial Status</option>
                                    <option>Business</option>
                                    <option>Client</option>
                                    <option>Business Lead</option>
                                    <option>Student</option>
                                    <option>Intern</option>
                                </select>
                            </div>
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label htmlFor="leadsource" className="">
                                    Blood Group
                                </label>
                                <br />
                                <select
                                    id="bloodgroup"
                                    value={data.bloodgroup}
                                    onChange={(e) =>
                                        setData("bloodgroup", e.target.value)
                                    }
                                    className="w-[100%] rounded border-[0.5px] border-[#D3D3D3]"
                                    placeholder="Select Contact Type"
                                >
                                    <option>Select Blood Group</option>
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
                                <label
                                    className=""
                                    htmlFor="physicallychallenged"
                                >
                                    Physically Challenged
                                </label>
                                <br />
                                <select
                                    id="physicallychallenged"
                                    value={data.physicallychallenged}
                                    onChange={(e) =>
                                        setData(
                                            "physicallychallenged",
                                            e.target.value
                                        )
                                    }
                                    className="w-[100%] rounded border-[0.5px] border-[#D3D3D3]"
                                    placeholder="Select Contact Type"
                                >
                                    <option>
                                        Select Physically Challenged
                                    </option>
                                    <option>YES</option>
                                    <option>NO</option>
                                </select>
                            </div>
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label htmlFor="nationality" className="">
                                    Nationality
                                </label>
                                <br />
                                <select
                                    id="nationality"
                                    value={data.nationality}
                                    onChange={(e) =>
                                        setData("nationality", e.target.value)
                                    }
                                    className="w-[100%] rounded border-[0.5px] border-[#D3D3D3]"
                                    placeholder="Select Contact Type"
                                >
                                    <option>Select Nationality</option>
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
                                <label htmlFor="passport">
                                    Passport Number
                                </label>
                                <Forminput
                                    type="text"
                                    placeholder="Enter Passport Number"
                                    onChange={(e) =>
                                        setData("passport", e.target.value)
                                    }
                                    id="passport"
                                    value={data.dob}
                                />
                            </div>
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label htmlFor="joinedon">Joined Date</label>
                                <Forminput
                                    id="joinedon"
                                    type="date"
                                    placeholder="Enter Title"
                                    value={data.joinedon}
                                    onChange={(e) =>
                                        setData("joinedon", e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div className="flex sm:flex-col md:flex-row justify-center items-center">
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label htmlFor="probationendson">
                                    Probation End Date
                                </label>
                                <Forminput
                                    id="probationendson"
                                    type="date"
                                    value={data.contdate}
                                    onChange={(e) =>
                                        setData(
                                            "probationendson",
                                            e.target.value
                                        )
                                    }
                                />
                            </div>
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label htmlFor="department">Department</label>
                                <Forminput
                                    placeholder="Enter Department"
                                    id="department"
                                    type="text"
                                    value={data.department}
                                    onChange={(e) =>
                                        setData("department", e.target.value)
                                    }
                                />
                            </div>
                        </div>

                        <div className="flex sm:flex-col md:flex-row justify-center items-center">
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label htmlFor="role">Role</label>
                                <Forminput
                                    id="role"
                                    placeholder="Enter Employee Role"
                                    type="text"
                                    value={data.role}
                                    onChange={(e) =>
                                        setData("role", e.target.value)
                                    }
                                />
                            </div>
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label htmlFor="reportingto" className="">
                                    Reporting To
                                </label>
                                <br />
                                <select
                                    id="reportingto"
                                    value={data.reportingto}
                                    onChange={(e) =>
                                        setData("reportingto", e.target.value)
                                    }
                                    className="w-[100%] rounded border-[0.5px] border-[#D3D3D3]"
                                    placeholder="Select Contact Type"
                                >
                                    <option>Reportimg To</option>
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
                                <label htmlFor="prevexp" className="">
                                    Previous Work Experience
                                </label>
                                <br />
                                <select
                                    id="prevexp"
                                    value={data.prevexp}
                                    onChange={(e) =>
                                        setData("prevexp", e.target.value)
                                    }
                                    className="w-[100%] rounded border-[0.5px] border-[#D3D3D3]"
                                    placeholder="Select Contact Type"
                                >
                                    <option>
                                        Select Previous Work Experience
                                    </option>
                                    <option>Business</option>
                                    <option>Client</option>
                                    <option>Business Lead</option>
                                    <option>Student</option>
                                    <option>Intern</option>
                                </select>
                            </div>
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label htmlFor="payfrequency" className="">
                                    Salary Mode
                                </label>
                                <br />
                                <select
                                    id="payfrequency"
                                    value={data.payfrequency}
                                    onChange={(e) =>
                                        setData("payfrequency", e.target.value)
                                    }
                                    className="w-[100%] rounded border-[0.5px] border-[#D3D3D3]"
                                    placeholder="Select Contact Type"
                                >
                                    <option>Select Salary Mode</option>
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
                                <label htmlFor="salary">Salary</label>
                                <Forminput
                                    placeholder="Enter Salary"
                                    id="salary"
                                    type="text"
                                    value={data.salary}
                                    onChange={(e) =>
                                        setData("salary", e.target.value)
                                    }
                                />
                            </div>
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label htmlFor="status" className="">
                                    Current Status
                                </label>
                                <br />
                                <select
                                    id="status"
                                    value={data.status}
                                    onChange={(e) =>
                                        setData("status", e.target.value)
                                    }
                                    className="w-[100%] rounded border-[0.5px] border-[#D3D3D3]"
                                    placeholder="Select Contact Type"
                                >
                                    <option>Select Current Status</option>
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
                                <label htmlFor="resignedon">
                                    resignedon on
                                </label>
                                <Forminput
                                    id="resignedon"
                                    type="date"
                                    value={data.resignedon}
                                    onChange={(e) =>
                                        setData("resignedon", e.target.value)
                                    }
                                />
                            </div>
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label htmlFor="resignreason" className="">
                                    Resignation Reason
                                </label>
                                <br />
                                <textarea
                                    id="resignreason"
                                    value={data.resignreason}
                                    onChange={(e) =>
                                        setData("resignreason", e.target.value)
                                    }
                                    className="w-[100%] rounded border-[0.5px] border-[#D3D3D3]"
                                    placeholder="Enter Resignation Reason"
                                ></textarea>
                            </div>
                        </div>
                        <div className="flex sm:flex-col md:flex-row justify-center items-center">
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label htmlFor="emrgencycp">
                                    Emergency Contact Person
                                </label>
                                <Forminput
                                    placeholder="Enter Emergency Contact Person"
                                    id="emrgencycp"
                                    type="text"
                                    value={data.emrgencycp}
                                    onChange={(e) =>
                                        setData("emrgencycp", e.target.value)
                                    }
                                />
                            </div>
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label htmlFor="relation" className="">
                                    Enter Relation
                                </label>
                                <br />
                                <Forminput
                                    placeholder="Enter Relation"
                                    id="date"
                                    type="relation"
                                    value={data.relation}
                                    onChange={(e) =>
                                        setData("relation", e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div className="flex sm:flex-col md:flex-row justify-center items-center">
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label htmlFor="emrgencynum">
                                    Emergency Contact Number
                                </label>
                                <Forminput
                                    placeholder="Enter Emergency Contact Number"
                                    id="emrgencynum"
                                    type="number"
                                    value={data.emrgencynum}
                                    onChange={(e) =>
                                        setData("emrgencynum", e.target.value)
                                    }
                                />
                            </div>
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label htmlFor="insurancepolicy" className="">
                                    Insurance Policy Number
                                </label>
                                <br />
                                <Forminput
                                    placeholder="Enter Insurance Policy Number"
                                    id="insurancepolicy"
                                    type="text"
                                    value={data.insurancepolicy}
                                    onChange={(e) =>
                                        setData(
                                            "insurancepolicy",
                                            e.target.value
                                        )
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
                                href={window.route("employee.index")}
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

export default EmployForm;
