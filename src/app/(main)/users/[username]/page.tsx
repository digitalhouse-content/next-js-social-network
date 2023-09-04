import UserPageContainerAsync from "@/components/users/UserPageContainerAsync";


const UserPage = async ({params}: {params: {username: string}}) => {
    return <UserPageContainerAsync username={params.username} />
}

export default UserPage;