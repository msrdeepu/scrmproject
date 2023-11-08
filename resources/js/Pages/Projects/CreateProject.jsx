import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import ProjectForm from "./ProjectForm";

const CreateProject = ({ auth, saveButton, record }) => {
    const { data, setData, post, processing, errors, patch } = useForm({
        title: "",
        lowner: "",
        lmanager: "",
        lsource: "",
        lindustry: "",
        lstatus: "",
        lrating: "",
        contdate: "",
        arevenue: "",
        remind: "",
        otherdetails: "",
    });
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(data);
        //post("/scrm-leads/store");
    };

    //update form submission
    const updateHandler = (e) => {
        e.preventDefault();
        //patch(`/scrm-leads/${record.id}`, data);
    };
    return (
        <AuthenticatedLayout user={auth.user}>
            <ProjectForm
                data={data}
                setData={setData}
                saveButton={"Save"}
                //saveButton={record.title == undefined ? "Add" : "Save"}
                // submitHandler={
                //     record.title == undefined ? submitHandler : updateHandler
                // }
                submitHandler={submitHandler}
            />
        </AuthenticatedLayout>
    );
};

export default CreateProject;
