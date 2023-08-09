const MessagePage = ({params} : {params: {id: string}}) => {
    return <div>Message: {params.id}</div>
}

export default MessagePage;