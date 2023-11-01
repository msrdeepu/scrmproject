import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";

//custom components
import Addbutton from "@/Components/Customcomponents/Buttons/Addbutton";
import Editbutton from "@/Components/Customcomponents/Buttons/Editbutton";
import Deletebutton from "@/Components/Customcomponents/Buttons/Deletebutton";
import Searchinput from "@/Components/Customcomponents/Inputs/Searchinput";

const Leadslist = ({ auth }) => {
    return <AuthenticatedLayout user={auth.user}>hello</AuthenticatedLayout>;
};

export default Leadslist;
