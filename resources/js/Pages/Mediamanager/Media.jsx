import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const Media = ({ auth, mustVerifyEmail, status }) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            // header={
            //     <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            //         SCRM / Overview
            //     </h2>
            // }
        >
            <div className="py-2">
                <div className="w-[100%] mx-auto p-1">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div class="grid grid-cols-8 gap-4 p-6">
                            <div className="col-start-1 col-end-8">Media</div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Media;
