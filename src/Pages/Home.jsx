import React, { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import "../Components Css/Home.css";
import { FaTrash } from "react-icons/fa";
import parse from "html-react-parser";

const Home = ({ isAuth }) => {
  const [postLists, setPostList] = useState([]);

  const postCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      // console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  return (
    <div className="homepage">
      <h1>Welcome to My Blog Website</h1>
      {postLists.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <h1>{post.title}</h1>
              <div className="deletepost">
                {isAuth && post?.author?.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    <FaTrash />
                  </button>
                )}
              </div>
            </div>
            <div className="postTextContainer">{parse(post?.postText)}</div>
            <div className="author">@{post?.author?.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
