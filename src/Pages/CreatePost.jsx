import React, { useEffect, useState } from "react";
import "../Components Css/createPost.css";
import { addDoc, collection } from "firebase/firestore";
import { Await, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase-config";
import { AiFillGoogleCircle } from "react-icons/ai";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postCollectionRef = collection(db, "posts");

  let navigate = useNavigate();
  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
      timestamp: new Date().toString(),
    });
    navigate("/home");
  };

  //prevents unsigned user from accessing the createPost page
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="createPost">
      <div className="createPostContainer">
        <h2>Create Post</h2>
        <div className="inputPost">
          <label htmlFor="#">Title: </label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Title..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputPost">
          <label htmtextarealFor="#">Post: </label>
          {/* <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Write your post...."
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          ></textarea> */}
          <ReactQuill
            theme="snow"
            style={{ width: "inherit" }}
            className=""
            value={postText}
            onChange={(value) => setPostText(value)}
          />
        </div>
        <button type="submit" className="submitPostButton" onClick={createPost}>
          <AiFillGoogleCircle />
          Submit Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
