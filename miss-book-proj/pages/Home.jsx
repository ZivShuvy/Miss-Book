const { Link } = ReactRouterDOM;
export function Home() {
    return (
        <section className="home">
            <div className="home-container">
                <h1>Welcome to <span>miss</span> book library!</h1>
                <Link to="/book">
                    <button className="get-started-btn">Get Started</button>
                </Link>
            </div>
        </section>
    )
}