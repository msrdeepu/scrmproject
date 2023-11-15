import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import EmployForm from "./EmployForm";

const CreateEmploy = ({ auth, saveButton, record }) => {
    const { data, setData, post, processing, errors, patch } = useForm({
        ccode: record.ccode,
        fullname: record.fullname,
        empcode: record.empcode,
        dob: record.dob,
        gender: record.gender,
        maritalstatus: record.maritalstatus,
        bloodgroup: record.bloodgroup,
        physicallychallenged: record.physicallychallenged,
        nationality: record.nationality,
        passport: record.passport,
        joinedon: record.joinedon,
        probationendson: record.probationendson,
        department: record.department,
        role: record.role,
        reportingto: record.reportingto,
        prevexp: record.prevexp,
        payfrequency: record.payfrequency,
        salary: record.salary,
        status: record.status,
        resignedon: record.resignedon,
        resignreason: record.resignreason,
        emrgencycp: record.emrgencycp,
        relation: record.relation,
        emrgencynum: record.emrgencynum,
        insurancepolicy: record.insurancepolicy,
    });
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(data);
        post("/scrm-employee/store");
    };

    //update form submission
    const updateHandler = (e) => {
        e.preventDefault();
        patch(`/scrm-employee/${record.id}`, data);
    };
    return (
        <AuthenticatedLayout user={auth.user}>
            <EmployForm
                data={data}
                setData={setData}
                saveButton={record.ccode == undefined ? "Add" : "Save"}
                submitHandler={
                    record.ccode == undefined ? submitHandler : updateHandler
                }
            />
        </AuthenticatedLayout>
    );
};

export default CreateEmploy;
