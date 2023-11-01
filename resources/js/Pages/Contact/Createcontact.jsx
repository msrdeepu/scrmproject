import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import ContactForm from "./ContactForm";

const Createcontact = ({ auth, saveButton, contactsList, record }) => {
    const { data, setData, post, processing, errors, patch } = useForm({
        contype: record.contype,
        title: record.title,
        fullname: record.fullname,
        designation: record.designation,
        cname: record.cname,
        pan: record.pan,
        gst: record.gst,
        phone: record.phone,
        mobile: record.mobile,
        altnum: record.altnum,
        whatsapp: record.whatsapp,
        emailid: record.emailid,
        altemail: record.altemail,
        weburl: record.weburl,
        town: record.town,
        country: record.country,
        avatar: record.avatar,
        status: record.status,
        houseaddress: record.houseaddress,
        officeaddress: record.officeaddress,
        paddress: record.paddress,
        bankdetails: record.bankdetails,
    });

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(data);
        post("/scrm-contacts/store");
    };

    //update form submission
    const updateHandler = (e) => {
        e.preventDefault();
        // patch(route("contacts.update"));
        patch(`/scrm-contacts/${record.id}`, data);
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
                                    record={record}
                                    data={data}
                                    setData={setData}
                                    saveButton={
                                        record.contype == undefined
                                            ? "Add"
                                            : "Save"
                                    }
                                    submitHandler={
                                        record.contype == undefined
                                            ? submitHandler
                                            : updateHandler
                                    }
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
