import MessageFeed from "@/components/messages/MessageFeed";
import messageApi from "@/services/messages/messages.service";

const IndexPage = async () => {

    const messageResponse = await messageApi.getMessageFeed(0, 10);

    return <>
        <main className="flex flex-col bg-gray-100 p-8">
            <section className="flex flex-col mb-8">
                <MessageFeed initialMessages={messageResponse} />
            </section>
        </main>
    </>
}

export default IndexPage;