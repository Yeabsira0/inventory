import React, { useState} from "react";
import "./css/inventory.css";
import Head from "./components/head"
import Nav from "./components/nav"
import Main from "./components/main"
import { TasksContext } from "./components/tasksContext";

function App() {
    const [items, setItems] = useState([{id : 1, item : "Item 1", quantity : 1, price: 1.0} , {id : 2, item : "Item 2", quantity : 2, price: 2.0}])
    return (
        <>
            <Head />
            <Nav />
            <TasksContext.Provider value={{items : items, setItems : setItems}}>
                <Main/>
            </TasksContext.Provider>
            <footer></footer>
        </>
    );
}

export default App;
