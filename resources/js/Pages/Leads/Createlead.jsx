import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import Leadform from "./Leadform";

// $table->string("title")->nullable();
// $table->string("lowner")->nullable();
// $table->string("lmanager")->nullable();
// $table->string("lsource")->nullable();
// $table->string("lindustry")->nullable();
// $table->string("lstatus")->nullable();
// $table->string("lrating")->nullable();
// $table->string("contdate")->nullable();
// $table->string("arevenue")->nullable();
// $table->string("remind")->nullable();
// $table->string("otherdetails")->nullable();

const Createlead = ({ auth, saveButton }) => {
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
        post("/scrm-leads/store");
    };
    return (
        <AuthenticatedLayout user={auth.user}>
            <Leadform
                data={data}
                setData={setData}
                saveButton={"Add"}
                submitHandler={submitHandler}
            />
        </AuthenticatedLayout>
    );
};

export default Createlead;
