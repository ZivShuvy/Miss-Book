const { NavLink, withRouter } = ReactRouterDOM
function _AppHeader(props) {
    const toHomePage = () => {
        props.history.push('/')
    }
    return (
        <section className="app-header">
            <div className="logo" onClick={toHomePage}><span>Miss</span><span>Book</span></div>
            <nav>
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/book">Our Books</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
        </section>
    )
}

export const AppHeader = withRouter(_AppHeader);