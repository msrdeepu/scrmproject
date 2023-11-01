import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

const Createlead = ({ auth }) => {
    return <AuthenticatedLayout user={auth.user}>hello</AuthenticatedLayout>;
};

export default Createlead;
