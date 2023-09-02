import MessageFeed from "@/components/messages/MessageFeed";
import MessagePostForm from "@/components/messages/MessagePostForm";
import SearchBar from "@/components/search/SearchBar";
import messageApi from "@/services/messages/messages.service";

const IndexPage = async ({searchParams}: {searchParams?: {[key: string]: string | undefined}}) => {

    const messageResponse = await messageApi.getMessageFeed(0, 10);

    return <>
        <main className="flex flex-col bg-gray-100 p-8">
            <section className="flex flex-col mb-8 " >
                    <SearchBar initialQuery={searchParams?.query}/>
                    <MessagePostForm />
                    <MessageFeed initialMessages={messageResponse} />
            </section>
        </main>
    </>
}

export default IndexPage;