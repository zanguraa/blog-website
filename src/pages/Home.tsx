import React, { useEffect, useState } from "react";
import {
  DocumentData,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface LoginProps {
  isAuth: boolean;
}

const Home = ({ isAuth }: LoginProps) => {
  const [posts, setPosts] = useState<DocumentData[]>([]);

  const postCollectionRef = collection(db, "posts");

  useEffect(() => {
    // Fetch posts from the database
    const fetchPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deletePost = async (id: string) => {
    if (!id) {
      console.error("Invalid post ID");
      return;
    }

    const postDoc = doc(db, "posts", id);

    try {
      await deleteDoc(postDoc);
      console.log("Post deleted successfully!");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="homePage">
      <div className="postsContainer">
        {posts.map((post, index) => (
          <div className="post" key={index}>
            <div className="title">
              <h2>{post.title}</h2>
              <div className="deletePost">
                {isAuth && post.author.id === auth.currentUser?.uid ? (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                    className="deleteButton"
                  >
                    <FontAwesomeIcon icon={faTrash as IconProp} size="xl" />
                  </button>
                ) : null}
              </div>
            </div>

            <hr />
            <p className="postContent">{post.content}</p>
            <hr />

            <p className="author">@{post.author.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
