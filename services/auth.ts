// services/auth.ts
const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface RegisterPayload {
    name: string;
    email: string;
    password: string;
}

export const registerUser = async (payload: RegisterPayload) => {
    try {
        const res = await fetch(`${API_URL}/public/auth/user/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        const data = await res.text();

        if (!res.ok) {
            throw new Error(data || "Registration failed");
        }

        return data;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

// You can add login later like this
interface LoginPayload {
    email: string;
    password: string;
}
export const loginUser = async (payload: LoginPayload) => {
    try {
        const res = await fetch(`${API_URL}/public/auth/user/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
        console.log("Login response status:", res);

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data?.message || "Login failed");
        }

        return data;
    } catch (error: any) {
        throw new Error(error.message);
    }
};
export interface GoogleLoginPayload {
    // optional, if your backend requires any data
    redirectUri?: string;
}

export const loginWithGoogle = async (data?: GoogleLoginPayload) => {
    const res = await fetch(`${API_URL}/public/auth/google/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data || {}),
    });

    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Google login failed");
    }

    // backend returns the Google OAuth URL as plain text or { url: string }
    const text = await res.text();

    return text;
};