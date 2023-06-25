import Layout from "rbrgs/components/Layout";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getServerAuthSession } from "rbrgs/server/auth";
import { Session } from "next-auth";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getServerAuthSession(context);
    if (!session) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }
    return {
        props: {},
    };

}

export default function Dashboard() {
    const session = useSession();
    return (
        <Layout
            session={session.data}
        >
            <div className="text-white min-h-screen">
                Dashboard
            </div>
        </Layout>    
        )
}