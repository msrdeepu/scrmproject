import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import EstimateForm from "./EstimateForm";
const CreateEstimate = ({ auth, saveButton, record, esmtax }) => {
    const { data, setData, post, processing, errors, patch } = useForm({
        ebclient: record.ebclient,
        ebfirm: record.ebfirm,
        eid: record.eid,
        erid: record.erid,
        esdate: record.esdate,
        esdvalidity: record.esdvalidity,
        eptype: record.eptype,
        eptitle: record.eptitle,
        epphase: record.epphase,
        epdetails: record.epdetails,
    });

    const createHandler = (e) => {
        //e.preventDefault();
        //console.log(data);
        post("/scrm-estimates/store");
    };

    //update form submission
    const updateHandler = (e) => {
        patch(`/scrm-estimates/${record.id}`, data);
    };
    return (
        <AuthenticatedLayout user={auth.user}>
            <EstimateForm
                esmtax={esmtax}
                data={data}
                setData={setData}
                saveButton={record.ebclient == undefined ? "Add" : "Save"}
                submitHandler={
                    record.ebclient == undefined ? createHandler : updateHandler
                }
            />
        </AuthenticatedLayout>
    );
};

export default CreateEstimate;
