import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import SettingForm from "./SettingForm";

const Createlead = ({ auth, saveButton, record }) => {
    const { data, setData, post, processing, errors, patch } = useForm({
        type: "",
        name: "",
        value: "",
        pcode: "",
        dorder: "",
        status: "",
    });
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(data);
        //post("/scrm-settings/store");
    };

    //update form submission
    const updateHandler = (e) => {
        e.preventDefault();
        patch(`/scrm-settings/${record.id}`, data);
    };
    return (
        <AuthenticatedLayout user={auth.user}>
            <SettingForm
                data={data}
                setData={setData}
                saveButton="Save"
                //saveButton={record.title == undefined ? "Add" : "Save"}
                submitHandler={submitHandler}
                // submitHandler={
                //     record.title == undefined ? submitHandler : updateHandler
                // }
            />
        </AuthenticatedLayout>
    );
};

export default Createlead;
