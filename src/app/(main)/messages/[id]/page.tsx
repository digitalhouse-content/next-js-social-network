import messageApi from "@/services/messages/messages.service";
import MessagePageContainer from "./page.container";

const MessagePage = async ({params} : {params: {id: string}}) => {

    const repliesPagePromise = messageApi.getMessageReplies(params.id, 0, 10);
    const messagePromise = messageApi.getMessage(params.id);

    const [repliesPage, message] = await Promise.all([repliesPagePromise, messagePromise])

    return <main className="flex flex-col bg-gray-100 p-8">
        <MessagePageContainer message={message}
            repliesPage={repliesPage}
            parentId={params.id} />
    </main>
}

export default MessagePage;