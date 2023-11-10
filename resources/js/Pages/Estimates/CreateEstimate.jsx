import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import Leadform from "./Leadform";

const CreateEstimate = ({ auth, saveButton, record }) => {
    const { data, setData, post, processing, errors, patch } = useForm({
        ebclient: "",
        ebfirm: "",
        lmanager: "",
        eid: "",
        erid: "",
        esdate: "",
        esdvalidity: "",
        eptype: "",
        eptitle: "",
        epphase: "",
        epdetails: "",
        // ebclient: "",
        // ebfirm: "",
        // lmanager: "",
        // eid: "",
        // erid: "",
        // esdate: "",
        // esdvalidity: "",
        // eptype: "",
        // eptitle: "",
        // epphase: "",
        // epdetails: "",
    });
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(data);
        //post("/scrm-leads/store");
    };

    //update form submission
    const updateHandler = (e) => {
        e.preventDefault();
        // patch(route("contacts.update"));
        //patch(`/scrm-leads/${record.id}`, data);
    };
    return (
        <AuthenticatedLayout user={auth.user}>
            <Leadform
                data={data}
                setData={setData}
                saveButton={"Save"}
                //saveButton={record.title == undefined ? "Add" : "Save"}
                submitHandler={submitHandler}
                // submitHandler={
                //     record.title == undefined ? submitHandler : updateHandler
                // }
            />
        </AuthenticatedLayout>
    );
};

export default CreateEstimate;
