import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./Comments.css";

const Comments = () => {
  const { articleId } = useParams();
  const [comments, setComments] = useState("");

  const renderComments = !comments
    ? "no comments yet!"
    : comments.map((com) => {
        return (
          <div key={com.id} className="singleComment">
            <p className="commentName">{com.name}</p>
            <p>{com.comment}</p>
          </div>
        );
      });

  const submitter = (e) => {
    e.preventDefault();

    const newComment = {
      name: e.target.commentInputName.value,
      comment: e.target.commentInputComment.value,
      id: 100 + comments.length,
    };
    console.log(newComment);
    setComments([newComment, ...comments]);
  };

  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await axios.get(
          `https://my-json-server.typicode.com/Codaisseur/articles-comments-data/articles/${articleId}/comments`
        );

        setComments(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getComments();
  }, [articleId]);

  console.log(comments);
  return (
    <div id="commentsDiv">
      <div id="commentForm">
        <form onSubmit={submitter}>
          <label htmlFor="commentInputName">
            Name:
            <br />
            <input type="text" id="commentInputName" />
          </label>
          <br />
          <br />
          <label htmlFor="commentInputComment">
            Your Comment: <br /> <input type="text" id="commentInputComment" />
          </label>
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div id="commentsList">{renderComments}</div>
    </div>
  );
};

export default Comments;
