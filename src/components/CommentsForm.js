const CommentsForm = ({ submitter, inputValues, inputHandler }) => {
  return (
    <div id="commentForm">
      <form onSubmit={submitter}>
        <label htmlFor="commentInputName">
          Name:
          <br />
          <input
            type="text"
            value={inputValues.name}
            onChange={inputHandler}
            name="name"
            id="commentInputName"
          />
        </label>
        <br />
        <br />
        <label htmlFor="commentInputComment">
          Your Comment: <br />
          <input
            type="text"
            value={inputValues.comment}
            onChange={inputHandler}
            name="comment"
            id="commentInputComment"
          />
        </label>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CommentsForm;
