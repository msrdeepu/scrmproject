import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

//react-ions
import { AiFillPlusCircle } from "react-icons/ai";

//contacts-list
import Contacts from "./Contacts";

//custom components
import Contactcard from "@/Components/Customcomponents/Cards/Contactcard";
import Flexcontainer from "@/Components/Customcomponents/Flexcontainer";
import Addbutton from "@/Components/Customcomponents/Buttons/Addbutton";
import Editbutton from "@/Components/Customcomponents/Buttons/Editbutton";
import Deletebutton from "@/Components/Customcomponents/Buttons/Deletebutton";
import Searchinput from "@/Components/Customcomponents/Inputs/Searchinput";
import CardItem from "@/Components/CardItem";

const Contactslist = ({ auth }) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            {/* {console.log(Contacts)} */}
            <Head title="Dashboard" />
            <div className="bg-white h-[55px] flex flex-row justify-evenly items-center">
                <Searchinput type="search" placeholder="Search"></Searchinput>
                <Link href={window.route("contacts.create")} type="button">
                    <Addbutton> Add New Contact</Addbutton>
                </Link>
            </div>

            <div className="py-2">
                <div className="w-[100%] mx-auto p-1 flex flex-row flex-wrap justify-center items-center min-h-full">
                    <div className=" bg-white shadow-lg rounded-md sm:w-[100%] md:w-[30%] p-5 m-3">
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
                                <p>66</p>
                                <p>1685440720</p>
                                <p>V Sarada Devi</p>
                                <p>BUSINESS</p>
                                <p>Sri Vasavi Chemical Corporation</p>
                                <p>9849803444</p>
                                <p>info@svccorp.in</p>
                                <p>https://www.svccorp.in/</p>
                            </div>
                        </div>
                        <div className="text-center mt-5 flex flex-row justify-evenly">
                            {/* <Addbutton>Add</Addbutton> */}
                            <Editbutton>Edit</Editbutton>
                            <Deletebutton>Delete</Deletebutton>
                        </div>
                    </div>

                    <div className=" bg-white shadow-lg rounded-md sm:w-[100%] md:w-[30%] p-5 m-3">
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
                                <p>66</p>
                                <p>1685440720</p>
                                <p>V Sarada Devi</p>
                                <p>BUSINESS</p>
                                <p>Sri Vasavi Chemical Corporation</p>
                                <p>9849803444</p>
                                <p>info@svccorp.in</p>
                                <p>https://www.svccorp.in/</p>
                            </div>
                        </div>
                        <div className="text-center mt-5 flex flex-row justify-evenly">
                            {/* <Addbutton>Add</Addbutton> */}
                            <Editbutton>Edit</Editbutton>
                            <Deletebutton>Delete</Deletebutton>
                        </div>
                    </div>

                    <div className=" bg-white shadow-lg rounded-md sm:w-[100%] md:w-[30%] p-5 m-3">
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
                                <p>66</p>
                                <p>1685440720</p>
                                <p>V Sarada Devi</p>
                                <p>BUSINESS</p>
                                <p>Sri Vasavi Chemical Corporation</p>
                                <p>9849803444</p>
                                <p>info@svccorp.in</p>
                                <p>https://www.svccorp.in/</p>
                            </div>
                        </div>
                        <div className="text-center mt-5 flex flex-row justify-evenly">
                            {/* <Addbutton>Add</Addbutton> */}
                            <Editbutton>Edit</Editbutton>
                            <Deletebutton>Delete</Deletebutton>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Contactslist;
