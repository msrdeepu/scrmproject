import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import SettingForm from "./SettingForm";

const Createlead = ({ auth, saveButton, record, settingsList }) => {
    const { data, setData, post, processing, errors, patch } = useForm({
        type: record.type,
        name: record.name,
        value: record.value,
        pcode: record.pcode,
        dorder: record.dorder,
        status: record.status,
    });
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(data);
        post("/scrm-settings/store");
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
                record={record}
                saveButton={record.type == undefined ? "Add" : "Save"}
                submitHandler={
                    record.type == undefined ? submitHandler : updateHandler
                }
            />
        </AuthenticatedLayout>
    );
};

export default Createlead;
