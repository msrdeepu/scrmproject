import Contactcard from "./Customcomponents/Cards/Contactcard";

export default function CardItem({
    type = "div",
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <>
            <Contactcard>
                <div className="flex justify-evenly">
                    <div className="p-3">
                        <ul>
                            <li>ID</li>
                            <li>CODE</li>
                            <li>Full Name</li>
                            <li>Contact Type</li>
                            <li>Company</li>
                            <li>Mobile</li>
                            <li>Email</li>
                            <li>Website</li>
                        </ul>
                    </div>
                    <div className="p-3">
                        <ul>
                            <li>66</li>
                            <li>1685440720</li>
                            <li>V Sarada Devi</li>
                            <li>BUSINESS</li>
                            <li>Sri Vasavi Chemical Corporation</li>
                            <li>9849803444</li>
                            <li>info@svccorp.in</li>
                            <li>https://www.svccorp.in/</li>
                        </ul>
                    </div>
                </div>

                <div class="px-6 pt-4 pb-2 text-center">
                    <span class="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                        <button>Add</button>
                    </span>
                    <span class="inline-block bg-yellow-500 text-white rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">
                        <button>Edit</button>
                    </span>
                    <span class="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        <button className=" text-white">Delete</button>
                    </span>
                </div>
            </Contactcard>
        </>
    );
}
