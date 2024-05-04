import Message from "./Message.jsx";
import CommentsList from "./CommentsList.jsx";
import AddComment from "./AddComment.jsx";
import AddCommentModalWindow from "./addCommentModalWindow.jsx";
import {useState} from "react";
import commentsArr from "./comments.json";

function App() {

    return (
    <>
        <header className="App-header">
            <Message prompt="Kurt is alive, he just went out to smoke a cigarette!"/>
        </header>
        <main className="App-body">
            <h2>Comments:</h2>
            <CommentsList />
            <AddComment />
        </main>
    </>
    )
}

export default App
