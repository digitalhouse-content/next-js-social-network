type PostCounterProps = {
    count: number;
}

const PostCounter = ({count} : PostCounterProps) => {
    if (count < 1) return <></>
    const label = count > 1 ? "posteos" : "posteo";
    return <div>
        {count} {label}
    </div>
}
export default PostCounter;