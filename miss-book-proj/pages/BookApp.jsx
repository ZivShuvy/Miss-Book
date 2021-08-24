const { Link } = ReactRouterDOM
import { bookService } from '../services/book.service.js'
import { BookList } from '../cmps/BookList.jsx'
import { BookFilter } from '../cmps/BookFilter.jsx'

export class BookApp extends React.Component {
    state = {
        books: [],
        filterBy: null,
    }
    componentDidMount() {
        this.loadBooks();
    }
    loadBooks = () => {
        bookService.query(this.state.filterBy)
            .then(books => {
                this.setState({ books })
            })
    }
    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadBooks)
    }

    render() {
        const { books } = this.state;
        return (
            <section className="book-app">
                <section className="main-layout">
                    <BookFilter onSetFilter={this.onSetFilter} />
                    <Link className="to-add-book" to="/book/add">Add book</Link>
                    <BookList books={books} />
                </section>
            </section>
        )
    }
}