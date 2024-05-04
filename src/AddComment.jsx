
function AddCommentBtn() {
    const showModal = () => {
        document.getElementById("modal-window").style.display = "block";
    }
    return (
        <button onClick={() => showModal()} className="create-comment-btn">Comment</button>
    );
}

export default AddCommentBtn;