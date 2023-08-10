import Message from "@/components/messages/Message";
import Link from "next/link";

const MessagesPage = () => {

    const messages = [
        {
            name: 'Han Solo',
            username: 'hsolo',
            message: 'Tercer mensaje',
            repliesCount: 2
        }
        ,{
            name: 'Anakin Skywalker',
            username: 'anakin',
        message: 'Primer mensaje',
        repliesCount: 13
    }]

    return <>
        <main className="flex flex-col bg-gray-100 p-8">
        <section className="flex flex-col mb-8">
        {messages.map((message, index) => 
                <Message key={`${index}`} message={message}/>)
            }
        </section>
        </main>
    </>
}

export default MessagesPage;