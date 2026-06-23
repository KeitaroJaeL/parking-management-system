import { Link, router, usePage } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import {
    RiArrowDownSLine,
    RiBellLine,
    RiCalendarLine,
    RiLogoutBoxLine,
    RiMenuLine,
    RiTimeLine,
    RiUserSettingsLine,
} from 'react-icons/ri';
import type { PageProps } from '@/types';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface NavbarProps {
    /** Page title shown in the header */
    title: string;
    /** Optional subtitle shown below the title */
    subtitle?: string;
    /** Whether the desktop sidebar is collapsed */
    sidebarCollapsed: boolean;
    /** Callback to open the mobile sidebar drawer */
    onOpenMobileSidebar: () => void;
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

export default function Navbar({
    title,
    subtitle,
    sidebarCollapsed,
    onOpenMobileSidebar,
}: NavbarProps) {
    const { props } = usePage<PageProps>();
    const user = props.auth.user;

    const [now, setNow] = useState<Date>(new Date());
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Live clock — updates every second
    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const formattedDate = now.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });

    const formattedTime = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });

    const handleLogout = () => {
        router.post(route('logout'));
    };

    return (
        <header
            className={[
                'fixed right-0 top-0 z-30 flex h-16 items-center border-b border-gray-200 bg-white px-4 shadow-sm transition-[left] duration-300',
                'left-0',
                sidebarCollapsed ? 'lg:left-20' : 'lg:left-64',
            ].join(' ')}
        >
            {/* ── Left: hamburger + page title ── */}
            <div className="flex min-w-0 flex-1 items-center gap-3">
                {/* Mobile hamburger */}
                <button
                    type="button"
                    onClick={onOpenMobileSidebar}
                    className="rounded-md p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 lg:hidden"
                    aria-label="Open sidebar"
                >
                    <RiMenuLine size={22} />
                </button>

                <div className="min-w-0">
                    <h1 className="truncate text-lg font-semibold text-gray-800">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="truncate text-xs text-gray-500">
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>

            {/* ── Right: date · time · notifications · user ── */}
            <div className="ml-4 flex shrink-0 items-center gap-2 sm:gap-3">
                {/* Date */}
                <div className="hidden items-center gap-1.5 text-sm text-gray-600 sm:flex">
                    <RiCalendarLine size={16} className="text-gray-400" />
                    <span>{formattedDate}</span>
                </div>

                <div className="hidden h-4 w-px bg-gray-200 sm:block" />

                {/* Time */}
                <div className="hidden items-center gap-1.5 text-sm text-gray-600 sm:flex">
                    <RiTimeLine size={16} className="text-gray-400" />
                    <span className="tabular-nums">{formattedTime}</span>
                </div>

                {/* Notification bell */}
                <button
                    type="button"
                    className="relative rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
                    aria-label="Notifications"
                >
                    <RiBellLine size={20} />
                    {/* Notification badge */}
                    <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
                </button>

                {/* User dropdown */}
                <div className="relative" ref={dropdownRef}>
                    <button
                        type="button"
                        onClick={() => setDropdownOpen((v) => !v)}
                        className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-gray-700 transition-colors hover:bg-gray-100"
                        aria-expanded={dropdownOpen}
                        aria-haspopup="true"
                    >
                        {/* Avatar */}
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                            {user.name.charAt(0).toUpperCase()}
                        </div>
                        <span className="hidden font-medium sm:block">
                            {user.name}
                        </span>
                        <RiArrowDownSLine
                            size={18}
                            className={`shrink-0 text-gray-400 transition-transform duration-200 ${
                                dropdownOpen ? 'rotate-180' : ''
                            }`}
                        />
                    </button>

                    {/* Dropdown menu */}
                    {dropdownOpen && (
                        <div className="absolute right-0 top-full z-50 mt-1 w-52 rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
                            {/* User info header */}
                            <div className="border-b border-gray-100 px-4 py-2.5">
                                <p className="text-sm font-semibold text-gray-800">
                                    {user.name}
                                </p>
                                <p className="truncate text-xs text-gray-500">
                                    {user.email}
                                </p>
                            </div>

                            {/* Profile link */}
                            <Link
                                href={route('profile.edit')}
                                className="flex items-center gap-2.5 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50"
                                onClick={() => setDropdownOpen(false)}
                            >
                                <RiUserSettingsLine
                                    size={16}
                                    className="shrink-0 text-gray-400"
                                />
                                Profile
                            </Link>

                            {/* Logout */}
                            <button
                                type="button"
                                onClick={handleLogout}
                                className="flex w-full items-center gap-2.5 px-4 py-2 text-sm text-red-600 transition-colors hover:bg-red-50"
                            >
                                <RiLogoutBoxLine
                                    size={16}
                                    className="shrink-0"
                                />
                                Log Out
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
