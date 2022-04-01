import "./MainHeader.css"

const MainHeader = () => {

    // NAVBAR WILL HAVE LOGO/TEXT FAR LEFT, FAR RIGHT WILL BE BUTTON TO NEW FORM LINK AND LOGOUT/LOGIN

    // NEEDS:
    // TO HAVE CONTEXT FOR IF A USER IS LOGGED IN
    // ROUTING TO REDIRECT TO FORM

    return (
        <header className="nav-header">

            <h1>
                To-Do
            </h1>

            <nav>

                <ul>

                    <li>
                        New To Do
                    </li>

                    <li>
                        LOGOUT
                    </li>

                </ul>

            </nav>

        </header>
    )
}

export default MainHeader