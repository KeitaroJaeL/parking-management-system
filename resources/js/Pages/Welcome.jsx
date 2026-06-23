import { Head, Link } from '@inertiajs/react';

const features = [
    {
        icon: (
            <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 6h18M3 14h18M3 18h18" />
            </svg>
        ),
        title: 'Real-Time Slot Monitoring',
        desc: 'View live availability of every parking slot across all floors instantly from any device.',
    },
    {
        icon: (
            <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        ),
        title: 'Automated Entry & Exit',
        desc: 'Record vehicle check-ins and check-outs with timestamps automatically — no manual logging needed.',
    },
    {
        icon: (
            <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
        ),
        title: 'Vehicle & User Management',
        desc: 'Register vehicles, manage users, and keep a full history of every parking session.',
    },
    {
        icon: (
            <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75" />
            </svg>
        ),
        title: 'Billing & Fee Collection',
        desc: 'Automatically calculate parking fees based on duration and rate settings. Generate receipts on demand.',
    },
    {
        icon: (
            <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
            </svg>
        ),
        title: 'Reports & Analytics',
        desc: 'Track revenue, occupancy rates, and peak hours with detailed exportable reports.',
    },
    {
        icon: (
            <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
        ),
        title: 'Secure Role-Based Access',
        desc: 'Separate admin and staff roles with fine-grained permissions to keep your data safe.',
    },
];

const steps = [
    { step: '01', title: 'Log In', desc: 'Sign in with your credentials to access the management dashboard.' },
    { step: '02', title: 'Monitor Slots', desc: 'View the live parking map and see which slots are available or occupied.' },
    { step: '03', title: 'Record Transactions', desc: 'Check vehicles in and out — fees are calculated and recorded automatically.' },
    { step: '04', title: 'Review Reports', desc: 'Pull daily, weekly, or monthly reports to track performance and revenue.' },
];

export default function Welcome({ auth }) {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
            <Head title="Parking Management System" />

            {/* ── Navbar ───────────────────────────────────────────── */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-blue-600">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                            </svg>
                        </div>
                        <span className="text-lg font-bold text-slate-900 tracking-tight">ParkMS</span>
                    </div>

                    <nav className="flex items-center gap-2">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
                            >
                                Go to Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="px-4 py-2 rounded-lg text-slate-700 text-sm font-medium hover:bg-slate-100 transition"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
                                >
                                    Get Started
                                </Link>
                            </>
                        )}
                    </nav>
                </div>
            </header>

            {/* ── Hero ─────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white">
                <div
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                        backgroundImage:
                            'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                    }}
                />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col items-center text-center gap-6">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-sm font-medium backdrop-blur">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        Smart Parking Solution
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-3xl leading-tight">
                        Manage Your Parking{' '}
                        <span className="text-yellow-300">Smarter</span>, Not Harder
                    </h1>
                    <p className="text-lg sm:text-xl text-blue-100 max-w-2xl">
                        A complete parking management system for monitoring slots, recording transactions,
                        collecting fees, and generating reports — all in one place.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 mt-2">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="px-6 py-3 rounded-xl bg-white text-blue-700 font-semibold text-base hover:bg-blue-50 transition shadow"
                            >
                                Open Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('register')}
                                    className="px-6 py-3 rounded-xl bg-white text-blue-700 font-semibold text-base hover:bg-blue-50 transition shadow"
                                >
                                    Get Started Free
                                </Link>
                                <Link
                                    href={route('login')}
                                    className="px-6 py-3 rounded-xl border border-white/40 text-white font-semibold text-base hover:bg-white/10 transition"
                                >
                                    Log in
                                </Link>
                            </>
                        )}
                    </div>
                </div>

                {/* Bottom wave */}
                <div className="w-full overflow-hidden leading-none">
                    <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full h-12 fill-slate-50">
                        <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
                    </svg>
                </div>
            </section>

            {/* ── Stats ────────────────────────────────────────────── */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { value: '500+', label: 'Parking Slots' },
                        { value: '24/7', label: 'Monitoring' },
                        { value: '100%', label: 'Automated Billing' },
                        { value: 'Real-Time', label: 'Availability Updates' },
                    ].map((stat) => (
                        <div key={stat.label} className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 text-center">
                            <div className="text-2xl font-extrabold text-blue-600">{stat.value}</div>
                            <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Features ─────────────────────────────────────────── */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Everything You Need</h2>
                    <p className="mt-3 text-slate-500 text-lg max-w-xl mx-auto">
                        Powerful tools built for parking facility operators of all sizes.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((f) => (
                        <div
                            key={f.title}
                            className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col gap-4 hover:shadow-md transition"
                        >
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                                {f.icon}
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900 text-lg">{f.title}</h3>
                                <p className="mt-1 text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── How It Works ─────────────────────────────────────── */}
            <section className="bg-white border-y border-slate-200 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">How It Works</h2>
                        <p className="mt-3 text-slate-500 text-lg max-w-xl mx-auto">
                            Up and running in minutes, not days.
                        </p>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {steps.map((s) => (
                            <div key={s.step} className="flex flex-col items-center text-center gap-3">
                                <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold shadow-lg">
                                    {s.step}
                                </div>
                                <h3 className="font-semibold text-slate-900 text-base">{s.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ──────────────────────────────────────────────── */}
            <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
                    <h2 className="text-3xl sm:text-4xl font-bold">
                        Ready to streamline your parking operations?
                    </h2>
                    <p className="text-blue-100 text-lg">
                        Join facilities already using ParkMS to save time and maximize revenue.
                    </p>
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="px-8 py-3 rounded-xl bg-white text-blue-700 font-semibold text-base hover:bg-blue-50 transition shadow"
                        >
                            Open Dashboard
                        </Link>
                    ) : (
                        <Link
                            href={route('register')}
                            className="px-8 py-3 rounded-xl bg-white text-blue-700 font-semibold text-base hover:bg-blue-50 transition shadow"
                        >
                            Get Started Free
                        </Link>
                    )}
                </div>
            </section>

            {/* ── Footer ───────────────────────────────────────────── */}
            <footer className="bg-slate-900 text-slate-400 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-7 h-7 rounded-md bg-blue-600">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                            </svg>
                        </div>
                        <span className="font-semibold text-white">ParkMS</span>
                    </div>
                    <span>&copy; {new Date().getFullYear()} Parking Management System. All rights reserved.</span>
                </div>
            </footer>
        </div>
    );
}

