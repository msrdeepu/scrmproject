import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import TaskForm from "./TaskForm";

const createtask = ({ auth, saveButton, record }) => {
    const { data, setData, post, processing, errors, patch } = useForm({
        ttype: record.ttype,
        tname: record.tname,
        tstatus: record.tstatus,
        tpriority: record.tpriority,
        tcategory: record.tcategory,
        taemploye: record.taemploye,
        tdemploye: record.tdemploye,
        tsdate: record.tsdate,
        tddate: record.tddate,
        tdetails: record.tdetails,
    });
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(data);
        post("/scrm-tasks/store");
    };

    //update form submission
    const updateHandler = (e) => {
        e.preventDefault();
        patch(`/scrm-tasks/${record.id}`, data);
    };
    return (
        <AuthenticatedLayout user={auth.user}>
            <TaskForm
                formTitle={
                    record.tname == undefined
                        ? "Create New Task"
                        : "Update Task"
                }
                data={data}
                setData={setData}
                saveButton={record.tname == undefined ? "Add" : "Save"}
                submitHandler={
                    record.tname == undefined ? submitHandler : updateHandler
                }
            />
        </AuthenticatedLayout>
    );
};

export default createtask;
