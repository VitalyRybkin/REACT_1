import {createContext, useState} from "react";
import AddCommentModalWindow from "./addCommentModalWindow.jsx";
import commentsArr from './comments.json'

export const CommentsContext = createContext(null);

function CommentsList() {

    let [comments, setComments] = useState(commentsArr);

    const commentsList = comments.map((comment) =>
        <div key={comment.id} className="comments-line">
            <p>{comment.text}</p>
            <button id={comment.id}  className="comments-delete" onClick={(e) => deleteComment(e)}>Delete</button>
        </div>);

    function deleteComment(e) {
        const commentId = e.target.getAttribute("id");
        comments = comments.filter(item => item.id !== parseInt(commentId));
        updateComments(comments);
    }

    function updateComments(updatedComments) {
        setComments(updatedComments);
    }

    return (
        <div className="comments-block">
            {commentsList}
            <CommentsContext.Provider value={comments}>
                <AddCommentModalWindow updateComments = {updateComments}/>
            </CommentsContext.Provider>
        </div>
    );
}

export default CommentsList;