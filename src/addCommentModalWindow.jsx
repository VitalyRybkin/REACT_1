import {useContext} from "react";
import {CommentsContext} from "./CommentsList.jsx";

function AddCommentModalWindow(props) {
    const comments = useContext(CommentsContext);

    function AddComment() {
        let max = comments.reduce((acc, curr) => acc.id > curr.id ? acc : curr);
        comments.push({"id":parseInt(max.id) + 1, "text":`${document.getElementById("comment-text").value}`})
        closeModal();
        props.updateComments(comments);
    }

    const closeModal = () => document.getElementById("modal-window").style.display = "none";

    return(
        <div id="modal-window" className="modal-window">
            <div className="modal-window__prompt">
                <label htmlFor="name">Type your comment:</label>
                <textarea name="comment" id="comment-text" placeholder="Leave a comment ..."/>
            </div>
            <div className="modal-window__btn-block">
                <button className="add-comment-btn" onClick={AddComment}>Add</button>
                <button className="cancel-comment-btn" onClick={closeModal}>Cancel</button>
            </div>
        </div>
    )
}

export default AddCommentModalWindow;