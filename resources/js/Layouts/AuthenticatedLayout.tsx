import { usePage } from '@inertiajs/react';
import { useState } from 'react';
import Navbar from '@/Components/Navbar';
import Sidebar from '@/Components/Sidebar';

// ─── Types ────────────────────────────────────────────────────────────────────

interface AuthenticatedLayoutProps {
    children: React.ReactNode;
    /**
     * Override the page title shown in the Navbar.
     * When omitted the layout derives the title from the current URL.
     */
    title?: string;
    /**
     * Optional subtitle shown below the title in the Navbar.
     */
    subtitle?: string;
}

// Maps URL prefixes → { title, subtitle }
const PAGE_META: Record<string, { title: string; subtitle: string }> = {
    '/dashboard': {
        title: 'Dashboard',
        subtitle: 'Overview of parking management',
    },
    '/parking-slots': {
        title: 'Parking Slots',
        subtitle: 'Manage all parking slots',
    },
    '/vehicle-entry': {
        title: 'Vehicle Entry',
        subtitle: 'Record incoming vehicles',
    },
    '/vehicle-exit': {
        title: 'Vehicle Exit',
        subtitle: 'Record outgoing vehicles',
    },
    '/parked-vehicles': {
        title: 'Parked Vehicles',
        subtitle: 'View all currently parked vehicles',
    },
    '/slot-map': {
        title: 'Slot Map',
        subtitle: 'Visual map of all parking slots',
    },
    '/reports': {
        title: 'Reports',
        subtitle: 'Analytics and reports',
    },
    '/settings': {
        title: 'Settings',
        subtitle: 'System configuration',
    },
    '/profile': {
        title: 'Profile',
        subtitle: 'Manage your account',
    },
};

function resolvePageMeta(
    url: string,
): { title: string; subtitle: string } {
    const match = Object.keys(PAGE_META).find((prefix) =>
        url === prefix || url.startsWith(prefix + '/') || url.startsWith(prefix + '?'),
    );
    return match ? PAGE_META[match] : { title: 'Dashboard', subtitle: '' };
}

// ─── Layout ───────────────────────────────────────────────────────────────────

export default function AuthenticatedLayout({
    children,
    title,
    subtitle,
}: AuthenticatedLayoutProps) {
    const { url } = usePage();

    // Desktop: sidebar collapsed/expanded
    const [collapsed, setCollapsed] = useState<boolean>(false);

    // Mobile: sidebar open/closed
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);

    const meta = resolvePageMeta(url);
    const resolvedTitle = title ?? meta.title;
    const resolvedSubtitle = subtitle ?? meta.subtitle;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* ── Sidebar ── */}
            <Sidebar
                collapsed={collapsed}
                onToggleCollapse={() => setCollapsed((v) => !v)}
                mobileOpen={mobileOpen}
                onCloseMobile={() => setMobileOpen(false)}
            />

            {/* ── Navbar + main content — shifted right of the sidebar ── */}
            <div
                className={[
                    'flex flex-col transition-[padding-left] duration-300',
                    collapsed ? 'lg:pl-20' : 'lg:pl-64',
                ].join(' ')}
            >
                {/* Navbar */}
                <Navbar
                    title={resolvedTitle}
                    subtitle={resolvedSubtitle}
                    sidebarCollapsed={collapsed}
                    onOpenMobileSidebar={() => setMobileOpen(true)}
                />

                {/* Main content — offset by navbar height (h-16 = 4rem) */}
                <main className="mt-16 min-h-[calc(100vh-4rem)] p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
