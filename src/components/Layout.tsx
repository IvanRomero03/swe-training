import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { api } from "rbrgs/utils/api";
import { GetServerSideProps } from "next";
import { getServerAuthSession } from "rbrgs/server/auth";
import { Session } from "next-auth";
import NavBar from "./NavBar";

const Layout: React.FC<{children: React.ReactNode, session: Session | null}> = ({children, session}) => {
    return(
    <div>
        <Head>
            <title>SWE Training</title>
            <meta name="description" content="RoBorregos SWE Training platform" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <nav>
                <NavBar session={session} />
            </nav>
            <div className="bg-zinc-900">
                <div className="h-12"></div>
                {children}
            </div>
        </main>
    </div>
    )
}

export default Layout;
