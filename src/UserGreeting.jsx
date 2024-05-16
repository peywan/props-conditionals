function userGreeting(props) {
    return (

        props.isLoggedIn ?
            <h2 className={'welcome-message'}>
                welcome {props.username}
            </h2>
            :
            <h2 className={'login-prompt'}>
                hey {props.username} please log in
            </h2>
    )
}

export default userGreeting
