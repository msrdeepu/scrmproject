import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import "./authLayout.css";

export default function Authenticated({ user, header, children }) {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <>
            <div onClick={toggleDrawer} className="top-bar-item">
                Top
            </div>
            <div className="flex">
                {/* Your main content goes here */}
                <div className="flex-1">
                    {/* <button onClick={toggleDrawer}>Toggle Drawer</button> */}
                    {/* Your main content goes here */}
                </div>

                {/* Left Drawer */}
                <LeftDrawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
            </div>
        </>
    );
}

const LeftDrawer = ({ isOpen, onClose }) => {
    return (
        <div
            className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white p-4 transform ${
                isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform ease-in-out duration-300`}
        >
            <button className="text-white" onClick={onClose}>
                Close Drawer
            </button>
            {/* Add your drawer content here */}
        </div>
    );
};
