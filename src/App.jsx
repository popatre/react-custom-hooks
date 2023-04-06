import "./App.css";
import BooksGrid from "./components/BooksGrid";
import Header from "./components/Header";
import QueryBar from "./components/QueryBar";
import { useState } from "react";

function App() {
    const [query, setQuery] = useState("/volumes?q=quilting");
    return (
        <div className="App">
            <Header title="Book Store" />
            <QueryBar setQuery={setQuery} />
            <BooksGrid query={query} />
        </div>
    );
}

export default App;
