import React, { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
//form components
import Forminput from "@/Components/Customcomponents/FormItems/Forminut";

const Leadform = ({
    data,
    setData,
    saveButton,
    submitHandler,
    record,
    stype,
    sstatus,
}) => {
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
                        Settings Management
                    </h3>
                    <form onSubmit={submitHandler}>
                        <div className="flex sm:flex-col md:flex-row justify-center items-center">
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label htmlFor="type" className="">
                                    Type
                                </label>
                                <br />
                                <select
                                    id="type"
                                    onChange={(e) =>
                                        setData("type", e.target.value)
                                    }
                                    value={data.type}
                                    className="w-[100%] rounded border-[0.5px] border-[#D3D3D3]"
                                    placeholder="Select Setting Type"
                                >
                                    <option>Select Type</option>
                                    {stype.map(function (data) {
                                        return (
                                            <>
                                                <option key={data.value}>
                                                    {data.value}
                                                </option>
                                            </>
                                        );
                                    })}
                                </select>
                            </div>

                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label htmlFor="name">Name</label>
                                <Forminput
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    id="name"
                                    placeholder="Enter Name"
                                    value={data.name}
                                />
                            </div>
                        </div>

                        <div className="flex sm:flex-col md:flex-row justify-center items-center">
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label htmlFor="value">Value</label>
                                <Forminput
                                    onChange={(e) =>
                                        setData("value", e.target.value)
                                    }
                                    id="value"
                                    placeholder="Enter Value"
                                    value={data.value}
                                />
                            </div>
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label htmlFor="pcode">Parent Code</label>
                                <Forminput
                                    onChange={(e) =>
                                        setData("pcode", e.target.value)
                                    }
                                    id="pcode"
                                    placeholder="Enter Parent Code"
                                    value={data.pcode}
                                />
                            </div>
                        </div>
                        <div className="flex sm:flex-col md:flex-row justify-center items-center">
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label htmlFor="dorder">Display Order</label>
                                <Forminput
                                    type="number"
                                    onChange={(e) =>
                                        setData("dorder", e.target.value)
                                    }
                                    id="dorder"
                                    placeholder="Enter Display Order"
                                    value={data.dorder}
                                />
                            </div>
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label htmlFor="status" className="">
                                    Select Status
                                </label>
                                <br />
                                <select
                                    id="status"
                                    onChange={(e) =>
                                        setData("status", e.target.value)
                                    }
                                    value={data.status}
                                    className="w-[100%] rounded border-[0.5px] border-[#D3D3D3]"
                                    placeholder="Select Status"
                                >
                                    <option>Select Status</option>
                                    {sstatus.map(function (data) {
                                        return (
                                            <>
                                                <option key={data.value}>
                                                    {data.value}
                                                </option>
                                            </>
                                        );
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center items-center">
                            <button className="m-3 bg-green-600 w-[150px] h-[50px] text-white font-bold rounded-sm">
                                {saveButton}
                            </button>

                            <Link
                                className="pt-2 pb-2"
                                href={window.route("settings.index")}
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
