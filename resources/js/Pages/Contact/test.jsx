<div className="flex flex-row justify-center w-[100%]">
    <form className="">
        <div className="">
            <label className="">Contact Type</label> <br />
            <select className="" placeholder="Select Contact Type">
                <option>Select Contact Type</option>
                <option>Business</option>
                <option>Client</option>
                <option>Business Lead</option>
                <option>Student</option>
                <option>Intern</option>
            </select>{" "}
        </div>
        <div>
            <label>Title</label> <br />
            <select>
                <option>Title</option>
                <option>Ms.</option>
                <option>Mr.</option>
                <option>Mrs.</option>
                <option>Miss.</option>
                <option>Dr.</option>
            </select>{" "}
        </div>{" "}
        <div className="flex flex-row justify-end items-center">
            {" "}
            <div className="w-[50%]">
                {" "}
                <label>Full Name</label> <br />
                <Forminput
                    type="text"
                    placeholder="Enter Full Name"
                    className="form-control"
                ></Forminput>
            </div>
            <div className="w-[50%]">
                {" "}
                <label>Role / Designation</label>
                <br />
                <Forminput
                    type="text"
                    placeholder="Enter Designation"
                ></Forminput>
            </div>
        </div>
        <label>Firm / Company Name</label>
        <Forminput
            type="text"
            placeholder="Enter Company Name"
        ></Forminput>{" "}
        <br />
        <label>PAN Number</label>
        <Forminput type="text" placeholder="Enter PAN Number"></Forminput>{" "}
        <br />
        <label>GST Number</label>
        <Forminput type="text" placeholder="Enter GST Number"></Forminput>{" "}
        <br />
        <label>Phone Number</label>
        <Forminput
            type="text"
            placeholder="Enter Phone Number"
        ></Forminput>{" "}
        <br />
        <label>Mobile Number</label>
        <Forminput
            type="text"
            placeholder="Enter Mobile Number"
        ></Forminput>{" "}
        <br />
        <label>Alternate Contact Number</label>
        <Forminput
            type="text"
            placeholder="Enter Alt.Contact Number"
        ></Forminput>{" "}
        <br />
        <label>Whatsapp Number</label>
        <Forminput
            type="text"
            placeholder="Enter whatsapp Number"
        ></Forminput>{" "}
        <br />
        <label>Email ID</label>
        <Forminput type="email" placeholder="Enter email id"></Forminput> <br />
        <label>Alternate Email ID</label>
        <Forminput
            type="email"
            placeholder="Alternate email id"
        ></Forminput>{" "}
        <br />
        <label>Website URL</label>
        <Forminput type="text" placeholder="Website URl"></Forminput> <br />
        <label>City / Town</label>
        <Forminput type="text" placeholder="Enter City / Town"></Forminput>{" "}
        <br />
        <label>Select Country</label>
        <select>
            <option>India</option>
            <option>Sri Lanka</option>
            <option>US</option>
            <option>UK</option>
        </select>{" "}
        <br />
        <label>House Address</label>
        <textarea rows={3} placeholder="Enter House Address"></textarea>
        <br />
        <label>Office Address</label>
        <textarea rows={3} placeholder="Enter Office Address"></textarea>
        <br />
        <label>Permanent Address</label>
        <textarea rows={3} placeholder="Enter Permanent Address"></textarea>
        <br />
        <label>Image / Avatar</label>
        <Forminput
            type="file"
            accept="jpg/jpeg/png"
            placeholder="Enter City / Town"
        ></Forminput>
        <br />
        <label>Select Status</label>
        <select>
            <option>New</option>
            <option>Active</option>
            <option>Inactive</option>
        </select>{" "}
        <br />
        <label>Bank Account Details</label>
        <textarea rows={3} placeholder="Enter Bank Details"></textarea>
        <br />
    </form>
</div>;
