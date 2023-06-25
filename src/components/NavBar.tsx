import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"

export default function NavBar({session}: {session: Session | null}) {
    const [show, setShow] = useState(false);
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

            <p className="font-mono font-semibold text-2xl">SWE Training</p>
            <div className="flex space-x-5">
                <Image
                    src={session?.user?.image || "/logo.svg"}
                    alt="User Image"
                    width={50}
                    height={50}
                    className="rounded-full"
                />
                <button className="hover:bg-slate-400 hover:bg-opacity-10 p-1 rounded-md"
                    onClick={
                        () => setShow(!show)
                    }
                >
                    <FiMenu className="text-2xl" />
                </button>
                <div className="relative">
                        <dialog className="rounded-md p-2 absolute mr-10 top-9 min-w-max" open={show}>
                            <div className="flex flex-col gap-2 min-w-max">
                                <p className="text-lg font-semibold p-2">
                                    {session?.user?.name}
                                </p>
                                <button className="w-full hover:bg-slate-200 p-2">
                                    Settings
                                </button>
                                {
                                    session?.user ? (
                                        <button className="w-full hover:bg-slate-200 p-2" onClick={() => void signOut()}>
                                            Sign Out
                                        </button>
                                    ) : (
                                        <button className="w-full hover:bg-slate-200 p-2"
                                            onClick={() => void signIn()}
                                        >
                                            Sign In
                                        </button>
                                    )
                                }
                                <button className="flex w-full hover:bg-slate-200 p-2 justify-center items-center" onClick={() => setShow(false)}>
                                    <FiX className="text-2xl text-center self-center" />
                                </button>
                            </div>
                        </dialog>
                    </div>
            </div>
        </div>
    )
}