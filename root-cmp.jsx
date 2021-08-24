const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
import { AppHeader } from './cmps/AppHeader.jsx'
import { AppFooter } from './cmps/AppFooter.jsx'
import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { BookApp } from './pages/BookApp.jsx';
import { BookDetails } from './pages/BookDetails.jsx';
import { BookAdd } from './pages/BookAdd.jsx';
import { UserMsg } from './cmps/UserMsg.jsx';

export function App() {
    return (
        <Router>
            <header>
                <AppHeader />
            </header>

            <main>
                <Switch>
                    <Route path="/book/add" component={BookAdd} />
                    <Route path="/book/:bookId" component={BookDetails} />
                    <Route path="/book" component={BookApp} />
                    <Route path="/about" component={About} />
                    <Route path="/" component={Home} />
                </Switch>
            </main>

            <footer>
                <AppFooter />
            </footer>
            <UserMsg />
        </Router>
    );
}