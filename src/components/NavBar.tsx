import { Session } from "next-auth";
import Image from "next/image";
import { FiMenu } from "react-icons/fi"

export default function NavBar({session}: {session: Session | null}) {
    console.log(session)
    return (
        <div
            className="flex flex-row justify-between items-center fixed top-0 left-0 right-0 text-white bg-black w-full py-2 px-4"
        >
            <Image
                src="/logo.svg"
                alt="RoBorregos Logo"
                width={50}
                height={50}
            />

            <p>SWE Training</p>
            <div className="flex space-x-5">
                <Image
                    src={session?.user?.image || "/logo.svg"}
                    alt="User Image"
                    width={50}
                    height={50}
                    className="rounded-full"
                />
                <button className="hover:bg-slate-400 hover:bg-opacity-10 p-1 rounded-md">
                    <FiMenu className="text-2xl" />
                </button>
            </div>
        </div>
    )
}