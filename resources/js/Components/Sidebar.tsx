import { Link, usePage } from '@inertiajs/react';
import {
    RiBarChartLine,
    RiCarLine,
    RiCloseLine,
    RiDashboardLine,
    RiLoginBoxLine,
    RiLogoutBoxLine,
    RiMapPin2Line,
    RiMenuFoldLine,
    RiMenuUnfoldLine,
    RiParkingLine,
    RiSettings3Line,
} from 'react-icons/ri';
import type { PageProps } from '@/types';

// ─── Types ────────────────────────────────────────────────────────────────────

interface NavItem {
    label: string;
    href: string;
    icon: React.ReactElement;
    routeName: string;
}

export interface SidebarProps {
    collapsed: boolean;
    onToggleCollapse: () => void;
    mobileOpen: boolean;
    onCloseMobile: () => void;
}

interface SidebarInnerProps {
    collapsed: boolean;
    onToggleCollapse: () => void;
    onItemClick: () => void;
    currentUrl: string;
    userName: string;
}

// ─── Nav items ────────────────────────────────────────────────────────────────

const NAV_ITEMS: NavItem[] = [
    {
        label: 'Dashboard',
        href: '/dashboard',
        icon: <RiDashboardLine />,
        routeName: 'dashboard',
    },
    {
        label: 'Parking Slots',
        href: '/parking-slots',
        icon: <RiParkingLine />,
        routeName: 'parking-slots',
    },
    {
        label: 'Vehicle Entry',
        href: '/vehicle-entry',
        icon: <RiLoginBoxLine />,
        routeName: 'vehicle-entry',
    },
    {
        label: 'Vehicle Exit',
        href: '/vehicle-exit',
        icon: <RiLogoutBoxLine />,
        routeName: 'vehicle-exit',
    },
    {
        label: 'Parked Vehicles',
        href: '/parked-vehicles',
        icon: <RiCarLine />,
        routeName: 'parked-vehicles',
    },
    {
        label: 'Slot Map',
        href: '/slot-map',
        icon: <RiMapPin2Line />,
        routeName: 'slot-map',
    },
    {
        label: 'Reports',
        href: '/reports',
        icon: <RiBarChartLine />,
        routeName: 'reports',
    },
    {
        label: 'Settings',
        href: '/settings',
        icon: <RiSettings3Line />,
        routeName: 'settings',
    },
];

// ─── Inner content (shared between desktop & mobile) ─────────────────────────

function SidebarInner({
    collapsed,
    onToggleCollapse,
    onItemClick,
    currentUrl,
    userName,
}: SidebarInnerProps) {
    const isActive = (href: string): boolean => {
        if (href === '/dashboard') {
            return currentUrl === '/dashboard' || currentUrl === '/';
        }
        return currentUrl.startsWith(href);
    };

    return (
        <div className="flex h-full flex-col bg-slate-900">
            {/* Brand */}
            <div
                className={`flex shrink-0 items-center gap-3 px-4 py-5 ${
                    collapsed ? 'justify-center' : ''
                }`}
            >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-lg font-bold text-white">
                    P
                </div>
                {!collapsed && (
                    <span className="text-xs font-bold uppercase leading-snug tracking-widest text-white">
                        Parking
                        <br />
                        Management
                        <br />
                        System
                    </span>
                )}
            </div>

            <div className="mx-3 shrink-0 border-t border-slate-700" />

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto px-2 py-3">
                <ul className="space-y-0.5">
                    {NAV_ITEMS.map((item) => {
                        const active = isActive(item.href);
                        return (
                            <li key={item.routeName}>
                                <Link
                                    href={item.href}
                                    onClick={onItemClick}
                                    title={collapsed ? item.label : undefined}
                                    className={[
                                        'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-150',
                                        collapsed ? 'justify-center' : '',
                                        active
                                            ? 'bg-blue-600 text-white shadow-sm'
                                            : 'text-slate-400 hover:bg-slate-800 hover:text-white',
                                    ]
                                        .filter(Boolean)
                                        .join(' ')}
                                >
                                    <span className="shrink-0 text-xl leading-none">
                                        {item.icon}
                                    </span>
                                    {!collapsed && (
                                        <span className="truncate">
                                            {item.label}
                                        </span>
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* Collapse toggle — desktop only */}
            <div className="mx-3 shrink-0 border-t border-slate-700" />
            <div
                className={`hidden shrink-0 p-2 lg:flex ${
                    collapsed ? 'justify-center' : 'justify-end'
                }`}
            >
                <button
                    type="button"
                    onClick={onToggleCollapse}
                    title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                    className="rounded-md p-1.5 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
                >
                    {collapsed ? (
                        <RiMenuUnfoldLine size={18} />
                    ) : (
                        <RiMenuFoldLine size={18} />
                    )}
                </button>
            </div>

            {/* User info */}
            <div
                className={`shrink-0 border-t border-slate-700 p-3 ${
                    collapsed ? 'flex justify-center' : ''
                }`}
            >
                <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                        {userName.charAt(0).toUpperCase()}
                    </div>
                    {!collapsed && (
                        <div className="min-w-0">
                            <p className="truncate text-sm font-medium text-white">
                                {userName}
                            </p>
                            <p className="truncate text-xs text-slate-400">
                                Administrator
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────

export default function Sidebar({
    collapsed,
    onToggleCollapse,
    mobileOpen,
    onCloseMobile,
}: SidebarProps) {
    const { url, props } = usePage<PageProps>();
    const userName = props.auth?.user?.name ?? 'Admin';

    const innerProps: SidebarInnerProps = {
        collapsed,
        onToggleCollapse,
        onItemClick: onCloseMobile,
        currentUrl: url,
        userName,
    };

    return (
        <>
            {/* Desktop: fixed sidebar */}
            <aside
                className={[
                    'fixed inset-y-0 left-0 z-40 hidden flex-col transition-[width] duration-300 ease-in-out lg:flex',
                    collapsed ? 'w-20' : 'w-64',
                ].join(' ')}
            >
                <SidebarInner {...innerProps} />
            </aside>

            {/* Mobile: backdrop + slide-in drawer */}
            {mobileOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={onCloseMobile}
                        aria-hidden="true"
                    />

                    {/* Drawer */}
                    <aside className="absolute inset-y-0 left-0 flex w-64 flex-col shadow-2xl">
                        <button
                            type="button"
                            onClick={onCloseMobile}
                            className="absolute right-2 top-2 z-10 rounded-full bg-slate-800 p-1 text-slate-400 transition-colors hover:text-white"
                            aria-label="Close sidebar"
                        >
                            <RiCloseLine size={18} />
                        </button>
                        <SidebarInner
                            {...innerProps}
                            collapsed={false}
                        />
                    </aside>
                </div>
            )}
        </>
    );
}
