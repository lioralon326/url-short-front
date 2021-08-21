import React from 'react';
import AppHeader from './components/AppHeader';
import UrlsStore from "./stores/urlsStore";
import UrlsPage from "./components/UrlsPage";
import CreateUrlStore from "./stores/createUrlStore";
import CreateUrlDialog from "./components/CreateUrlDialog";

const urlsStore = new UrlsStore()
const createUrlStore = new CreateUrlStore(urlsStore);

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <AppHeader urlsStore={urlsStore} createUrlStore={createUrlStore}/>
            </header>
            <UrlsPage store={urlsStore}/>
            <CreateUrlDialog store={createUrlStore}/>
        </div>
    );
}

export default App;
