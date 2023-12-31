import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Sidebar from "@/Components/Sidebar";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="py-2">
                <div className="w-[100%] mx-auto p-1">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div class="grid grid-cols-8 gap-4 p-6">
                            <div className="col-start-1 col-end-8">
                                Hello Admin
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
