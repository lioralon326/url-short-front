import React from 'react';
import AppHeader from './components/AppHeader';
import UrlsStore from "./stores/urlsStore";
import UrlsPage from "./components/UrlsPage";

const store = new UrlsStore()

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <AppHeader store={store}/>
            </header>
            <UrlsPage store={store}/>
        </div>
    );
}

export default App;
