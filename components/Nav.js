import Link from 'next/link';
import Image from 'next/image';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';


export default function Nav() {
    const [user, loading, error] = useAuthState(auth);

    return (
        <nav className="flex justify-between items-center py-10">
            <Link href="/">
                <button className="text-lg font-medium">Creative Minds</button>
            </Link>
            <ul className="flex items-center gap-10">
                {!user && (
                    <Link href={"/auth/login"}>
                        <a className="py-2 px-4 text-sm bg-cyan-500 text-white rounded-lg font-medium ml-8">Join Now</a>
                    </Link>
                )}
                {user && (
                    <div className="flex items-center gap-6">
                        <Link href={"/post"}>
                            <button className="bg-cyan-500 text-white px-4 py-2 font-medium rounded-lg">Post</button>
                        </Link>
                        <Link href={"/dashboard"}>
                            <Image
                                className="rounded-full cursor-pointer"
                                src={user.photoURL} 
                                width={50} 
                                height={50} 
                                alt="profile"/>
                        </Link>
                    </div>
                )}
            </ul>
        </nav>
    );
}
