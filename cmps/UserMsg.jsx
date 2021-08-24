const { Link } = ReactRouterDOM;
import { eventBusService } from '../services/event-bus-service.js'

export class UserMsg extends React.Component {
    state = {
        msg: null,
    }
    removeEventBus;
    timeoutId;
    componentDidMount() {
        this.removeEventBus = eventBusService.on('user-msg', msg => {
            this.setState({ msg }, () => {
                if (this.timeoutId) clearTimeout(this.timeoutId)
                this.timeoutId = setTimeout(this.onCloseMsg, 5000)
            })
        })
    }

    componentWillUnmount() {
        this.removeEventBus()
    }

    onCloseMsg = () => {
        this.setState({ msg: null })
        clearTimeout(this.timeoutId)
    }

    render() {
        const { msg } = this.state;
        if (!msg) return <React.Fragment></React.Fragment>
        return (
            <section className={`user-msg ${msg.type || ''}`}>
                <img src={`./assets/img/${msg.type === 'success' ? 'success' : 'error'}.png`} />
                <div className="txt-container">
                    <h1>{msg.type === 'success' ? 'Success!' : 'Error!'}</h1>
                    <p>{msg.txt}</p>
                    {msg.bookId && <Link to={`/book/${msg.bookId}`} onClick={this.onCloseMsg}>Check it out!</Link>}
                    <button onClick={this.onCloseMsg}>X</button>
                </div>
            </section>

        )

    }
}