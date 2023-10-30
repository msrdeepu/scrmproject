import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import ContactForm from "./ContactForm";

const Createcontact = ({ auth, saveButton }) => {
    const { data, setData, post, processing, errors } = useForm({
        contype: "",
        title: "",
        fullname: "",
        designation: "",
        cname: "",
        pan: "",
        gst: "",
        phone: "",
        mobile: "",
        altnum: "",
        whatsapp: "",
        emailid: "",
        altemail: "",
        weburl: "",
        town: "",
        country: "",
        avatar: "",
        status: "",
        houseaddress: "",
        officeaddress: "",
        paddress: "",
        bankdetails: "",
    });

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(data);
        post("/scrm-contacts/store");
    };
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="create-contact" />
            <div className="py-2">
                <div className="w-[100%] mx-auto p-1">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="grid grid-cols-8 gap-4 p-6">
                            <div className="col-start-1 col-end-8">
                                <ContactForm
                                    data={data}
                                    setData={setData}
                                    saveButton={"Add"}
                                    submitHandler={submitHandler}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Createcontact;
