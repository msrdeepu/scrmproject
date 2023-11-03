import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import Leadform from "./Leadform";

const Createlead = ({ auth, saveButton, record }) => {
    const { data, setData, post, processing, errors, patch } = useForm({
        title: record.title,
        lowner: record.lowner,
        lmanager: record.lmanager,
        lsource: record.lsource,
        lindustry: record.lindustry,
        lstatus: record.lstatus,
        lrating: record.lrating,
        contdate: record.contdate,
        arevenue: record.arevenue,
        remind: record.remind,
        otherdetails: record.otherdetails,
    });
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(data);
        post("/scrm-leads/store");
    };

    //update form submission
    const updateHandler = (e) => {
        e.preventDefault();
        // patch(route("contacts.update"));
        patch(`/scrm-leads/${record.id}`, data);
    };
    return (
        <AuthenticatedLayout user={auth.user}>
            <Leadform
                data={data}
                setData={setData}
                saveButton={record.title == undefined ? "Add" : "Save"}
                submitHandler={
                    record.title == undefined ? submitHandler : updateHandler
                }
            />
        </AuthenticatedLayout>
    );
};

export default Createlead;
