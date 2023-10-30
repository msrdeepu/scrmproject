import Editbutton from "@/Components/Customcomponents/Buttons/Editbutton";
import Deletebutton from "@/Components/Customcomponents/Buttons/Deletebutton";

export default function CardItem({
    type = "div",
    className = "",
    disabled,
    children,
    contact,
    props,
}) {
    return (
        <>
            <div className=" bg-white shadow-lg rounded-md sm:w-[100%] md:w-[30%] p-5 m-3">
                <div className="flex flex-row justify-between" key={props.id}>
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
                        <p>{props.id}</p>
                        <p>{props.code}</p>
                        <p>{props.fullname}</p>
                        <p>{props.contactype}</p>
                        <p>{props.company}</p>
                        <p>{props.mobile}</p>
                        <p>{props.email}</p>
                        <p>{props.website}</p>
                    </div>
                </div>
                <div className="text-center mt-5 flex flex-row justify-evenly">
                    {/* <Addbutton>Add</Addbutton> */}
                    <Editbutton>Edit</Editbutton>
                    <Deletebutton>Delete</Deletebutton>
                </div>
            </div>
        </>
    );
}
