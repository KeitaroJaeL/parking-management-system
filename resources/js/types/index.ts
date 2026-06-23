export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
}

export interface PageProps extends Record<string, unknown> {
    auth: {
        user: User;
    };
}
