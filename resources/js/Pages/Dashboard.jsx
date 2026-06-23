import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />

            <div className="rounded-lg bg-white p-6 shadow-sm">
                <p className="text-gray-600">
                    Welcome to the Parking Management System dashboard.
                </p>
            </div>
        </AuthenticatedLayout>
    );
}

