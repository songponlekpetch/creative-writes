import { auth } from "../utils/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Dashboard() {
    const router = useRouter();
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        if (loading) return;
        if (!user) return router.push("/auth/login");
    }, [user, loading, router])

    return (
        <div>
        <h1>Your posts</h1>
        <div>
            posts
        </div>
        <button onClick={() => auth.signOut()}>Sign out</button>
        </div>
    );
}