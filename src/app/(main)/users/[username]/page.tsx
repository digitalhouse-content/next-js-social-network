const UserPage = ({params}: {params: {username: string}}) => {
    return <div>Nombre de usuario: {params.username}</div>
}

export default UserPage;