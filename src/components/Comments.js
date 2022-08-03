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

  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await axios.get(
          `https://my-json-server.typicode.com/Codaisseur/articles-comments-data/articles/${articleId}/comments`
        );

        console.log(response.data);
        setComments(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getComments();
  }, [articleId]);
  return (
    <div id="commentsDiv">
      <div id="commentForm">form</div>
      <div id="commentsList">{renderComments}</div>
    </div>
  );
};

export default Comments;
