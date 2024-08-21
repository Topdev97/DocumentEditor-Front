import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { createUser } from "@/services/api";
// Define your NextAuth configuration
const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
            httpOptions: {
                timeout: 100000, // Increase timeout to 10 seconds
            },
        }),
    ],

    callbacks: {
        async signIn({ user, account, profile }) {
            if (!user) {
                console.error("User is not defined during sign-in");
                return false; // Prevent sign-in
            }
            try {
                await createUser(user.name, user.email, process.env.NEXT_PUBLIC_NEXT_AUTH_SECRET, 'google'); // Use account.provider for flexibility
            } catch (error) {
                console.error("Error creating user:", error);
                return false; // Prevent sign-in on error
            }
            return true; // User is allowed to sign in
        },
        async redirect({ url, baseUrl }) {
            return baseUrl + '/'; // Optional: You can add logic here to handle different URLs
        },
        async error({ error }) {
            console.error("OAuth Error:", error);
            // Log the error or take appropriate action
            return `/error?message=${encodeURIComponent(error)}`;
        },
    },
    debug: true, // Enable debug mode for detailed logs

    secret: process.env.NEXT_PUBLIC_NEXT_AUTH_SECRET,
};

export const GET = (req, res) => NextAuth(req, res, authOptions);
export const POST = (req, res) => NextAuth(req, res, authOptions);