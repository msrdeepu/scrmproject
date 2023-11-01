import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";

//custom components
import Addbutton from "@/Components/Customcomponents/Buttons/Addbutton";
import Editbutton from "@/Components/Customcomponents/Buttons/Editbutton";
import Deletebutton from "@/Components/Customcomponents/Buttons/Deletebutton";
import Searchinput from "@/Components/Customcomponents/Inputs/Searchinput";

const Contactslist = ({ auth, resource }) => {
    //Loading Edit View
    function editRecord(e) {
        router.get(route("contacts.edit", e.currentTarget.id));
    }

    function destroyRecord(e) {
        if (confirm("Are you sure you want to delete this record ?")) {
            router.delete(route("contacts.destroy", e.currentTarget.id));
        }
    }
    return (
        <AuthenticatedLayout user={auth.user}>
            {console.log(resource)}
            <Head title="Dashboard" />
            <div className="bg-white h-[55px] flex flex-row justify-evenly items-center">
                <Searchinput type="search" placeholder="Search"></Searchinput>
                <Link href={window.route("contacts.create")} type="button">
                    <Addbutton> Add New Contact</Addbutton>
                </Link>
            </div>

            <div className="py-2">
                <div className="w-[100%] mx-auto p-1 flex flex-row flex-wrap justify-center items-center min-h-full">
                    {resource.map((contact) => (
                        <div
                            key={contact.id}
                            className=" bg-white shadow-lg rounded-md sm:w-[100%] md:w-[30%] p-5 m-3"
                        >
                            <div className="flex flex-row justify-between">
                                <div>
                                    {" "}
                                    <p>ID</p>
                                    <p>CODE</p>
                                    <p>Full Name</p>
                                    <p>Contact Type</p>
                                    <p>Company</p>
                                    <p>Mobile</p>
                                    <p>Email</p>
                                    <p>Website</p>
                                </div>
                                <div>
                                    <p>{contact.id}</p>
                                    <p>{contact.id}</p>
                                    <p>{contact.fullname}</p>
                                    <p>{contact.contype}</p>
                                    <p>{contact.cname}</p>
                                    <p>{contact.mobile}</p>
                                    <p>{contact.emailid}</p>
                                    <p>{contact.weburl}</p>
                                </div>
                            </div>
                            <div className="text-center mt-5 flex flex-row justify-evenly">
                                <Editbutton
                                    id={contact.id}
                                    onClick={editRecord}
                                >
                                    Edit
                                </Editbutton>
                                <Deletebutton
                                    id={contact.id}
                                    onClick={destroyRecord}
                                >
                                    Delete
                                </Deletebutton>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Contactslist;
