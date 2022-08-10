import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CommentsForm from "./CommentsForm";

import "./Comments.css";

const Comments = () => {
  const initialValues = {
    name: "",
    comment: "",
  };

  const { articleId } = useParams();
  const [comments, setComments] = useState("");
  const [inputValues, setInputValues] = useState(initialValues);

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

  const inputHandler = (e) => {
    const { name, value } = e.target;
    const newValues = { ...inputValues, [name]: value };
    setInputValues(newValues);
  };

  const submitter = (e) => {
    e.preventDefault();

    const newComment = {
      name: e.target.commentInputName.value,
      comment: e.target.commentInputComment.value,
      id: 100 + comments.length,
    };
    // console.log(newComment);
    setInputValues(initialValues);
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

  // console.log(comments);

  return (
    <div id="commentsDiv">
      <CommentsForm
        submitter={submitter}
        inputValues={inputValues}
        inputHandler={inputHandler}
      />
      <div id="commentsList">{renderComments}</div>
    </div>
  );
};

export default Comments;
