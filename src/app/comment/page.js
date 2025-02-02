"use client";
import React, { useState } from "react";

const Comment = ({ comment, handleReply, handleDelete, handleEdit }) => {
  const [showReplies, setShowReplies] = useState(false);
  const [isReplying, setIsReplying] = useState(false); // Track if user is replying
  const [replyText, setReplyText] = useState(""); // Store the reply text

  const toggleReplies = () => setShowReplies((prevState) => !prevState);

  const handleReplyChange = (event) => setReplyText(event.target.value);

  const submitReply = () => {
    if (replyText.trim() === "") {
      alert("Reply cannot be empty");
      return;
    }
    handleReply(comment.id, replyText);
    setReplyText(""); // Clear the input field
    setIsReplying(false); // Hide the input box after submission
  };

  return (
    <div style={{ marginLeft: comment.replies.length ? "20px" : "0" }}>
      <div className="p-6 flex justify-between items-center">
        <span>{comment.comment}</span>
        <div className="flex gap-4 ">
          <button  onClick={() => setIsReplying(true)}>Reply</button>
          <button onClick={() => handleEdit(comment.id)}>Edit</button>
          <button onClick={() => handleDelete(comment.id)}>Delete</button>
        </div>
      </div>

      {isReplying && (
        <div className="mb-6 flex gap-4">
          <input
            type="text"
            className="p-2"
            value={replyText}
            onChange={handleReplyChange}
            placeholder="Type your reply"
          />
          <button onClick={submitReply}>Submit</button>
          <button onClick={()=>setIsReplying(!isReplying)}>Cancel</button>
        </div>
      )}

      {comment.replies.length > 0 && (
        <div>
          <button onClick={toggleReplies} className="text-blue-600">
            {showReplies ? "Hide Comments" : "Show Comments"}
          </button>
          {showReplies && (
            <div style={{ marginLeft: "20px" }}>
              {comment.replies.map((reply) => (
                <Comment
                  key={reply.id}
                  comment={reply}
                  handleReply={handleReply}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const CommentSection = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      comment: "Awesome",
      replies: [
        {
          id: Date.now() * Math.random(),
          comment: "Thanks",
          replies: [
            {
              id: Date.now() * Math.random(),
              comment: "ahn",
              replies: [
                {
                  id: Date.now() * Math.random(),
                  comment: "😍",
                  replies: [],
                },
              ],
            },
          ],
        },
        {
          id: Date.now() * Math.random(),
          comment: "thanks2",
          replies: [
            {
              id: Date.now() * Math.random(),
              comment: "oho👌",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      comment: "Lit😁",
      replies: [
        {
          id: Date.now() * Math.random(),
          comment: "❤️",
          replies: [
            {
              id: Date.now() * Math.random(),
              comment: "ahn",
              replies: [],
            },
          ],
        },
      ],
    },
  ]);

  const handleReply = (commentId, replyText) => {
    const newReply = {
      id: Date.now() * Math.random(),
      comment: replyText,
      replies: [],
    };

    const addReplyToComment = (comments) => {
      return comments.map((comment) => {
        if (comment.id === commentId) {
          return { ...comment, replies: [...comment.replies, newReply] };
        } else if (comment.replies.length) {
          return { ...comment, replies: addReplyToComment(comment.replies) };
        }
        return comment;
      });
    };
    setComments(addReplyToComment(comments));
  };

  const handleDelete = (commentId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this comment?"
    );
    if (!confirmDelete) return;

    const deleteComment = (comments) => {
      return comments.filter((comment) => {
        if (comment.id === commentId) {
          return false;
        }
        if (comment.replies.length) {
          comment.replies = deleteComment(comment.replies);
        }
        return true;
      });
    };

    setComments(deleteComment(comments));
  };

  const handleEdit = (commentId) => {
    const editedComment = prompt("Edit your comment:");
    if (!editedComment) return;

    const editCommentText = (comments) => {
      return comments.map((comment) => {
        if (comment.id === commentId) {
          return { ...comment, comment: editedComment };
        } else if (comment.replies.length) {
          comment.replies = editCommentText(comment.replies);
        }
        return comment;
      });
    };

    setComments(editCommentText(comments));
  };

  return (
    <div>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          handleReply={handleReply}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
};

export default CommentSection;
