import React, { useState } from "react";
import { Head, Link } from "@inertiajs/react";
//form components
import Forminput from "@/Components/Customcomponents/FormItems/Forminut";

const ContactForm = ({ saveButton, data, setData, submitHandler }) => {
    const handleAvatar = (e) => {
        setData(e.target.files[0]);
        //console.log(e.target.files[0]);
    };

    return (
        <div className="pl-7">
            <form className="" onSubmit={submitHandler}>
                <div className="grid sm:grid-cols-1 md:grid-cols-6 gap-4">
                    <div className="sm:col-start-1 md:col-start-2 md:col-end-4">
                        {" "}
                        <label htmlFor="contype" className="m-3">
                            Select Contact Type
                        </label>{" "}
                        <br />
                        <select
                            id="contype"
                            value={data.contype}
                            onChange={(e) => setData("contype", e.target.value)}
                            className="w-[100%] rounded m-3"
                            placeholder="Select Contact Type"
                        >
                            <option>Select Contact Type</option>
                            <option>Business</option>
                            <option>Client</option>
                            <option>Business Lead</option>
                            <option>Student</option>
                            <option>Intern</option>
                        </select>
                    </div>
                    <div className="sm:col-start-1 md:col-start-4 md:col-end-6">
                        <label htmlFor="title" className="m-3">
                            Title
                        </label>{" "}
                        <br />
                        <select
                            className="w-[100%] rounded m-3"
                            id="title"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                        >
                            <option>Title</option>
                            <option>Ms.</option>
                            <option>Mr.</option>
                            <option>Mrs.</option>
                            <option>Miss.</option>
                            <option>Dr.</option>
                        </select>
                    </div>
                    <div className="sm:col-start-1 md:col-start-2 md:col-end-4">
                        {" "}
                        <label htmlFor="fullname" className="m-3">
                            Full Name
                        </label>{" "}
                        <br />
                        <Forminput
                            id="fullname"
                            type="text"
                            placeholder="Enter Full Name"
                            className="form-control m-3"
                            value={data.fullname}
                            onChange={(e) =>
                                setData("fullname", e.target.value)
                            }
                        ></Forminput>
                    </div>
                    <div className="sm:col-start-1 md:col-start-4 md:col-end-6">
                        {" "}
                        <label htmlFor="designation" className="m-3">
                            Role / Designation
                        </label>
                        <br />
                        <Forminput
                            id="designation"
                            value={data.designation}
                            onChange={(e) =>
                                setData("designation", e.target.value)
                            }
                            type="text"
                            placeholder="Enter Designation"
                            className="m-3"
                        ></Forminput>
                    </div>
                    <div className="sm:col-start-1 md:col-start-2 md:col-end-4">
                        {" "}
                        <label htmlFor="cname" className="m-3">
                            Firm / Company Name
                        </label>
                        <Forminput
                            id="cname"
                            value={data.cname}
                            onChange={(e) => setData("cname", e.target.value)}
                            type="text"
                            placeholder="Enter Company Name"
                            className="m-3"
                        ></Forminput>{" "}
                    </div>
                    <div className="sm:col-start-1 md:col-start-4 md:col-end-6">
                        {" "}
                        <label htmlFor="pan" className="m-3">
                            PAN Number
                        </label>
                        <Forminput
                            id="pan"
                            value={data.pan}
                            onChange={(e) => setData("pan", e.target.value)}
                            type="text"
                            placeholder="Enter PAN Number"
                            className="m-3"
                        ></Forminput>
                    </div>
                    <div className="sm:col-start-1 md:col-start-2 md:col-end-4">
                        <label htmlFor="gst" className="m-3">
                            GST Number
                        </label>
                        <Forminput
                            id="gst"
                            value={data.gst}
                            onChange={(e) => setData("gst", e.target.value)}
                            type="text"
                            placeholder="Enter GST Number"
                            className="m-3"
                        ></Forminput>
                    </div>
                    <div className="sm:col-start-1 md:col-start-4 md:col-end-6">
                        {" "}
                        <label htmlFor="phone" className="m-3">
                            Phone Number
                        </label>
                        <Forminput
                            id="phone"
                            value={data.phone}
                            onChange={(e) => setData("phone", e.target.value)}
                            type="number"
                            placeholder="Enter Phone Number"
                            className="m-3"
                        ></Forminput>
                    </div>
                    <div className="sm:col-start-1 md:col-start-2 md:col-end-4">
                        {" "}
                        <label htmlFor="mobile" className="m-3">
                            Mobile Number
                        </label>
                        <Forminput
                            id="mobile"
                            value={data.mobile}
                            onChange={(e) => setData("mobile", e.target.value)}
                            type="text"
                            placeholder="Enter Mobile Number"
                            className="m-3"
                        ></Forminput>
                    </div>
                    <div className="sm:col-start-1 md:col-start-4 md:col-end-6">
                        {" "}
                        <label htmlFor="altnum" className="m-3">
                            Alternate Contact Number
                        </label>
                        <Forminput
                            id="altnum"
                            value={data.altnum}
                            onChange={(e) => setData("altnum", e.target.value)}
                            type="text"
                            placeholder="Enter Alt.Contact Number"
                            className="m-3"
                        ></Forminput>
                    </div>

                    <div className="sm:col-start-1 md:col-start-2 md:col-end-4">
                        {" "}
                        <label htmlFor="whatsapp" className="m-3">
                            Whatsapp Number
                        </label>
                        <Forminput
                            id="whatsapp"
                            value={data.whatsapp}
                            onChange={(e) =>
                                setData("whatsapp", e.target.value)
                            }
                            type="text"
                            placeholder="Enter whatsapp Number"
                            className="m-3"
                        ></Forminput>
                    </div>
                    <div className="sm:col-start-1 md:col-start-4 md:col-end-6">
                        <label htmlFor="emailid" className="m-3">
                            Email ID
                        </label>
                        <Forminput
                            id="emailid"
                            value={data.emailid}
                            onChange={(e) => setData("emailid", e.target.value)}
                            type="email"
                            placeholder="Enter email id"
                            className="m-3"
                        ></Forminput>
                    </div>

                    <div className="sm:col-start-1 md:col-start-2 md:col-end-4">
                        <label htmlFor="altemail" className="m-3">
                            Alternate Email ID
                        </label>
                        <Forminput
                            id="altemail"
                            value={data.altemail}
                            onChange={(e) =>
                                setData("altemail", e.target.value)
                            }
                            type="email"
                            placeholder="Alternate email id"
                            className="m-3"
                        ></Forminput>
                    </div>
                    <div className="sm:col-start-1 md:col-start-4 md:col-end-6">
                        <label htmlFor="weburl" className="m-3">
                            Website URL
                        </label>
                        <Forminput
                            id="weburl"
                            value={data.weburl}
                            onChange={(e) => setData("weburl", e.target.value)}
                            type="text"
                            placeholder="Website URl"
                            className="m-3"
                        ></Forminput>
                    </div>
                    <div className="sm:col-start-1 md:col-start-2 md:col-end-4">
                        {" "}
                        <label htmlFor="town" className="m-3">
                            City / Town
                        </label>
                        <Forminput
                            id="town"
                            value={data.town}
                            onChange={(e) => setData("town", e.target.value)}
                            type="text"
                            placeholder="Enter City / Town"
                            className="m-3"
                        ></Forminput>
                    </div>
                    <div className="sm:col-start-1 md:col-start-4 md:col-end-6">
                        {" "}
                        <label htmlFor="country" className="m-3">
                            Select Country
                        </label>
                        <select
                            id="country"
                            value={data.country}
                            onChange={(e) => setData("country", e.target.value)}
                            className="m-3 w-[100%] rounded"
                        >
                            <option>India</option>
                            <option>Sri Lanka</option>
                            <option>US</option>
                            <option>UK</option>
                        </select>
                    </div>

                    <div className="sm:col-start-1 md:col-start-2 md:col-end-4">
                        {" "}
                        <label htmlFor="imgavatar" className="m-3">
                            Image / Avatar
                        </label>
                        <input
                            type="file"
                            onChange={(e) =>
                                setData("avatar", e.target.files[0])
                            }
                        />
                    </div>
                    <div className="sm:col-start-1 md:col-start-4 md:col-end-6">
                        <label className="m-3" htmlFor="status">
                            Select Status
                        </label>
                        <select
                            value={data.status}
                            onChange={(e) => setData("status", e.target.value)}
                            className="m-3 w-[100%] rounded"
                        >
                            <option>New</option>
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                    </div>

                    <div className="sm:col-start-1 md:col-start-2 md:col-end-4">
                        <label htmlFor="houseaddress" className="m-3">
                            House Address
                        </label>
                        <textarea
                            id="houseaddress"
                            value={data.houseaddress}
                            onChange={(e) =>
                                setData("houseaddress", e.target.value)
                            }
                            rows={3}
                            placeholder="Enter House Address"
                            className="m-3 w-[100%] rounded"
                        ></textarea>
                    </div>
                    <div className="sm:col-start-1 md:col-start-4 md:col-end-6">
                        <label htmlFor="officeaddress" className="m-3">
                            Office Address
                        </label>
                        <textarea
                            id="officeaddress"
                            value={data.officeaddress}
                            onChange={(e) =>
                                setData("officeaddress", e.target.value)
                            }
                            rows={3}
                            placeholder="Enter Office Address"
                            className="m-3 w-[100%] rounded"
                        ></textarea>
                    </div>
                    <div className="sm:col-start-1 md:col-start-2 md:col-end-4">
                        <label className="m-3" htmlFor="paddress">
                            Permanent Address
                        </label>
                        <textarea
                            id="paddress"
                            value={data.paddress}
                            onChange={(e) =>
                                setData("paddress", e.target.value)
                            }
                            rows={3}
                            placeholder="Enter Permanent Address"
                            className="m-3 w-[100%] rounded"
                        ></textarea>
                    </div>
                    <div className="sm:col-start-1 md:col-start-4 md:col-end-6">
                        <label className="m-3" htmlFor="bankdetails">
                            Bank Details
                        </label>
                        <textarea
                            id="bankdetails"
                            value={data.bankdetails}
                            onChange={(e) =>
                                setData("bankdetails", e.target.value)
                            }
                            rows={3}
                            placeholder="Enter Bank Details"
                            className="m-3 w-[100%] rounded"
                        ></textarea>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-green-500 rounded p-1 w-[80px] m-3 text-white"
                    >
                        {saveButton}
                    </button>
                    <Link href={window.route("contacts.index")} type="button">
                        <button className="bg-red-500 rounded p-1 w-[80px] m-3 text-white">
                            Cancel
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
