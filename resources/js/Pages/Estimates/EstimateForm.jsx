import React, { useState } from "react";
import { Head, Link, router, useForm } from "@inertiajs/react";
//form components
import Forminput from "@/Components/Customcomponents/FormItems/Forminut";
import JoditEditor from "jodit-react";

const EstimateForm = ({ data, setData, saveButton, submitHandler, esmtax }) => {
    const [detailsContent, setdetailsContent] = useState("");

    const [discount, setDiscount] = useState(0);

    const [shipCharges, setShipCharges] = useState(0);

    const [paidAmount, setPaidAmount] = useState(0);

    const [formData, setFormData] = useState([
        { product: "", quantity: "", price: "", amount: "" },
    ]);
    const [totalAmount, setTotalAmount] = useState(0);

    //detailed estimate form useForm

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const newFormData = [...formData];
        newFormData[index][name] = value;

        //Calculate the amount based on quantity and price
        if (name === "quantity" || name === "price") {
            const quantity = parseFloat(newFormData[index].quantity) || 0;
            const price = parseFloat(newFormData[index].price) || 0;
            newFormData[index].amount = (quantity * price).toFixed(2);
        }

        setFormData(newFormData);
        updateTotalAmount();
    };
    const handleShipCharges = (e) => {
        setShipCharges(e.target.value);
        setData("shipcharges", e.target.value);
    };

    const handleAddRow = () => {
        setFormData([
            ...formData,
            { product: "", quantity: "", price: "", amount: "" },
        ]);
    };

    const handleDiscount = (e) => {
        setData("discount", e.target.value);
        setDiscount(e.target.value);
    };

    const handleRemoveRow = (index) => {
        const newFormData = [...formData];
        newFormData.splice(index, 1);
        setFormData(newFormData);
        updateTotalAmount();
    };

    const updateTotalAmount = () => {
        const sum = formData.reduce(
            (acc, row) => acc + parseFloat(row.amount) || 0,
            0
        );
        setTotalAmount(sum.toFixed(2));
    };

    // const handleSubmit = () => {
    //   console.log(formData);
    //   // You can send the formData to your server or perform other actions here
    // };

    const paidAmountHandler = (e) => {
        setPaidAmount(e.target.value);
    };

    const handleSubmit = () => {
        console.log(formData);
        submitHandler();
    };

    let subTotal = totalAmount;
    let total = subTotal - discount;
    let grandTotal = parseFloat(total) + parseFloat(shipCharges);
    let dueAmount = parseFloat(grandTotal) - parseFloat(paidAmount);

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
                        Estimate Management
                    </h3>
                    <form onSubmit={submitHandler}>
                        <div className="flex sm:flex-col md:flex-row justify-center items-center">
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label htmlFor="ebclient" className="">
                                    Task Related To
                                </label>
                                <br />
                                <select
                                    id="ebclient"
                                    onChange={(e) =>
                                        setData("ebclient", e.target.value)
                                    }
                                    value={data.ebclient}
                                    className="w-[100%] rounded border-[0.5px] border-[#D3D3D3]"
                                    placeholder="Select Client"
                                >
                                    <option>Select Client</option>
                                    <option>Business</option>
                                    <option>Client</option>
                                    <option>Business Lead</option>
                                    <option>Student</option>
                                    <option>Intern</option>
                                </select>
                            </div>
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label htmlFor="ebfirm" className="">
                                    Task Related To
                                </label>
                                <br />
                                <select
                                    id="ebfirm"
                                    onChange={(e) =>
                                        setData("ebfirm", e.target.value)
                                    }
                                    value={data.ebfirm}
                                    className="w-[100%] rounded border-[0.5px] border-[#D3D3D3]"
                                    placeholder="Select Firm"
                                >
                                    <option>Select Billing Firm</option>
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
                                <label htmlFor="eid">Title</label>
                                <Forminput
                                    onChange={(e) =>
                                        setData("eid", e.target.value)
                                    }
                                    id="eid"
                                    placeholder="Estimate ID"
                                    value={data.eid}
                                />
                            </div>
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label htmlFor="erid">Reference ID</label>
                                <Forminput
                                    onChange={(e) =>
                                        setData("erid", e.target.value)
                                    }
                                    id="erid"
                                    placeholder="Reference ID"
                                    value={data.erid}
                                />
                            </div>
                        </div>
                        <div className="flex sm:flex-col md:flex-row justify-center items-center">
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label htmlFor="esdate">Estimate Date</label>
                                <Forminput
                                    onChange={(e) =>
                                        setData("esdate", e.target.value)
                                    }
                                    id="esdate"
                                    type="date"
                                    placeholder="Reference ID"
                                    value={data.esdate}
                                />
                            </div>
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label htmlFor="esdvalidity">
                                    Estimate Validity
                                </label>
                                <Forminput
                                    onChange={(e) =>
                                        setData("esdvalidity", e.target.value)
                                    }
                                    id="esdvalidity"
                                    type="date"
                                    placeholder="Reference ID"
                                    value={data.esdvalidity}
                                />
                            </div>
                        </div>
                        <div className="flex sm:flex-col md:flex-row justify-center items-center">
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label className="" htmlFor="eptype">
                                    Select Project Type
                                </label>
                                <br />
                                <select
                                    id="eptype"
                                    //value={data.lrating}
                                    onChange={(e) =>
                                        setData("eptype", e.target.value)
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
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label htmlFor="eptitle">Proposal Title</label>
                                <Forminput
                                    onChange={(e) =>
                                        setData("eptitle", e.target.value)
                                    }
                                    id="eptitle"
                                    placeholder="Proposal Title"
                                    value={data.eptitle}
                                />
                            </div>
                            <div className="sm:w-[100%] md:w-[50%] m-3">
                                <label htmlFor="epphase">Proposal Phase</label>
                                <Forminput
                                    onChange={(e) =>
                                        setData("epphase", e.target.value)
                                    }
                                    id="epphase"
                                    placeholder="Phase I, Phase II, Phase III"
                                    value={data.epphase}
                                />
                            </div>
                        </div>
                        <div className="flex sm:flex-col md:flex-row justify-center items-center">
                            <div className="w-[100%] m-3">
                                <label htmlFor="others" className="mr-3">
                                    Proposal Details
                                </label>
                                <JoditEditor
                                    id="others"
                                    value={
                                        data.epdetails == undefined
                                            ? detailsContent
                                            : data.epdetails
                                    }
                                    onBlur={(newContent) =>
                                        setdetailsContent(newContent)
                                    }
                                    onChange={(newContent) =>
                                        setData("epdetails", newContent)
                                    }
                                />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-center text-3xl mt-4 mb-3 bg-[#034EA2] p-4 text-white rounded-md">
                                Detailed Estimate
                            </h1>
                            {/* detailed form starts */}
                            {/* {...formData.map((item) => console.log(item.price))} */}

                            {/* detailed form ends */}
                        </div>
                        <div className="flex flex-row justify-center">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Amount</th>

                                        {formData.length > 1 && <th>Action</th>}
                                    </tr>
                                </thead>
                                <tbody>
                                    {formData.map((row, index) => (
                                        <tr key={index}>
                                            <td>
                                                <Forminput
                                                    type="text"
                                                    name="product"
                                                    value={row.product}
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            index,
                                                            e
                                                        )
                                                    }
                                                />
                                            </td>
                                            <td>
                                                <Forminput
                                                    type="text"
                                                    name="quantity"
                                                    value={row.quantity}
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            index,
                                                            e
                                                        )
                                                    }
                                                />
                                            </td>
                                            <td>
                                                <Forminput
                                                    type="text"
                                                    name="price"
                                                    value={row.price}
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            index,
                                                            e
                                                        )
                                                    }
                                                />
                                            </td>
                                            <td>
                                                <Forminput
                                                    type="text"
                                                    name="amount"
                                                    value={row.amount}
                                                    readOnly
                                                />
                                            </td>
                                            <td>
                                                {formData.length > 1 && (
                                                    <button
                                                        className="bg-red-500 rounded-md text-white p-2"
                                                        type="button"
                                                        onClick={() =>
                                                            handleRemoveRow(
                                                                index
                                                            )
                                                        }
                                                    >
                                                        Remove
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex flex-row justify-center">
                            <button
                                className="bg-purple-500 p-3 rounded-md text-white mt-4"
                                type="button"
                                onClick={handleAddRow}
                            >
                                Add New Row
                            </button>
                        </div>

                        {/* <button type="button" onClick={handleSubmit}>
                                Submit
                            </button> */}

                        {/* <h1>Total Amount: {totalAmount}</h1> */}
                        <div className="flex flex-row justify-evenly flex-wrap">
                            <div className="m-3 sm:w-[100%] md:w-[45%]">
                                <label className="" htmlFor="disformate">
                                    Discount Format
                                </label>
                                <br />
                                <select
                                    id="disformate"
                                    value={data.tstatus}
                                    onChange={(e) =>
                                        setData("disformate", e.target.value)
                                    }
                                    className="w-[100%] rounded border-[0.5px] border-[#D3D3D3]"
                                >
                                    <option>Select Discount Format</option>
                                    <option>5%</option>
                                    <option>10%</option>
                                    <option>15%</option>
                                </select>
                            </div>
                            <div className="m-3 sm:w-[100%] md:w-[45%]">
                                <label className="" htmlFor="leadManager">
                                    Tax Mode
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
                                    <option>Select Tax Mode</option>
                                    {esmtax.map(function (data) {
                                        return (
                                            <option key={data.value}>
                                                {data.value}
                                            </option>
                                        );
                                    })}
                                </select>
                                {console.log(esmtax)}
                            </div>
                            <div className="m-3 sm:w-[100%] md:w-[45%]">
                                <label className="" htmlFor="leadManager">
                                    Select Payment Status
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
                                    <option>Select Payment Status</option>
                                    <option>Business</option>
                                    <option>Client</option>
                                    <option>Business Lead</option>
                                    <option>Student</option>
                                    <option>Intern</option>
                                </select>
                            </div>
                            <div className="sm:w-[100%] md:w-[45%] m-3">
                                <label htmlFor="totalItems">Total Items</label>
                                <Forminput
                                    readOnly
                                    type="number"
                                    id="totalItems"
                                    onChange={(e) =>
                                        setData("totalitems", formData.length)
                                    }
                                    value={formData.length}
                                    placeholder="Total Items"
                                />
                            </div>
                            <div className="sm:w-[100%] md:w-[45%] m-3">
                                <label htmlFor="tname">Subtotal</label>
                                <Forminput
                                    readOnly
                                    id="tname"
                                    value={subTotal}
                                    placeholder="Subtotal"
                                />
                            </div>
                            <div className="sm:w-[100%] md:w-[45%] m-3">
                                <label htmlFor="tname">Discount</label>
                                <Forminput
                                    type="number"
                                    id="tname"
                                    onChange={handleDiscount}
                                    placeholder="Discount"
                                />
                            </div>
                            <div className="sm:w-[100%] md:w-[45%] m-3">
                                <label htmlFor="tname">TOTAL</label>
                                <Forminput
                                    readOnly
                                    id="tname"
                                    value={total}
                                    // onChange={(e) =>
                                    //     setData("tname", e.target.value)
                                    // }
                                    placeholder="Total"
                                />
                            </div>
                            <div className="sm:w-[100%] md:w-[45%] m-3">
                                <label htmlFor="tname">
                                    Shipping / Packing Handling Charges
                                </label>
                                <Forminput
                                    id="tname"
                                    type="number"
                                    // value={data.tname}
                                    onChange={handleShipCharges}
                                    placeholder=" Shipping / Packing Handling Charges"
                                />
                            </div>
                            <div className="sm:w-[100%] md:w-[45%] m-3">
                                <label htmlFor="tname">GRAND TOTAL</label>
                                <Forminput
                                    readOnly
                                    id="tname"
                                    value={grandTotal}
                                    // onChange={(e) =>
                                    //     setData("tname", e.target.value)
                                    // }
                                    placeholder="Total Items"
                                />
                            </div>
                            <div className="sm:w-[100%] md:w-[45%] m-3">
                                <label htmlFor="tname">Amount Paid</label>
                                <Forminput
                                    type="number"
                                    id="tname"
                                    // value={data.tname}
                                    onChange={paidAmountHandler}
                                    placeholder="Amount Paid"
                                />
                            </div>
                            <div className="sm:w-[100%] md:w-[95%] m-3">
                                <label htmlFor="tname">Amount Due</label>
                                <Forminput
                                    readOnly
                                    id="tname"
                                    value={dueAmount}
                                    // onChange={(e) =>
                                    //     setData("tname", e.target.value)
                                    // }
                                    placeholder="Due Amount"
                                />
                            </div>
                        </div>
                        <div className="flex sm:flex-col md:flex-row justify-center items-center">
                            {/* <button
                                    className="m-3 bg-purple-600 w-[150px] h-[50px] text-white font-bold rounded-sm"
                                    type="button"
                                    onClick={handleAddRow}
                                >
                                    Add New Row
                                </button> */}
                            <button
                                className="m-3 bg-green-600 w-[150px] h-[50px] text-white font-bold rounded-sm"
                                type="button"
                                onClick={handleSubmit}
                            >
                                {saveButton}
                            </button>
                            <Link
                                className="pt-2 pb-2"
                                href={window.route("estimates.index")}
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

export default EstimateForm;
