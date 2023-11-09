import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import ProjectForm from "./ProjectForm";

const CreateProject = ({ auth, saveButton, record, projectsList }) => {
    const { data, setData, post, processing, errors, patch } = useForm({
        ptitle: record.ptitle,
        pstatus: record.pstatus,
        priority: record.priority,
        pcustomer: record.pcustomer,
        paemploye: record.paemploye,
        pbudget: record.pbudget,
        pphase: record.pphase,
        startdate: record.startdate,
        duedate: record.duedate,
        details: record.details,
    });
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(data);
        post("/scrm-projects/store");
    };

    //update form submission
    const updateHandler = (e) => {
        e.preventDefault();
        patch(`/scrm-projects/${record.id}`, data);
    };
    return (
        <AuthenticatedLayout user={auth.user}>
            <ProjectForm
                data={data}
                setData={setData}
                saveButton={record.ptitle == undefined ? "Add" : "Save"}
                submitHandler={
                    record.ptitle == undefined ? submitHandler : updateHandler
                }
            />
        </AuthenticatedLayout>
    );
};

export default CreateProject;
