
import messageApi from "@/services/messages/messages.service";
import IndexPageContainer from "./page.container";
import { headers } from "next/headers";
import userApi from "@/services/users/users.service";

const IndexPage = async ({searchParams}: {searchParams?: {[key: string]: string | undefined}}) => {
    
    const accessToken = headers().get('x-social-access-token') ?? null;
    const currentUser = accessToken ? await userApi.getMeInternal(accessToken) : undefined;

    const messageResponse = 
        searchParams?.query ?
        await messageApi.getMessagesByHash(searchParams?.query, 0, 10)
        : await messageApi.getMessageFeed(0, 10);

    return <>
        <main className="flex flex-col bg-gray-100 p-8">
            <section className="flex flex-col mb-8 " >
                <IndexPageContainer initialQuery={searchParams?.query}
                    messageResponse={messageResponse} 
                    currentUser={currentUser}/>
            </section>
        </main>
    </>
}

export default IndexPage;