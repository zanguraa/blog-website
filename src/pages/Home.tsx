import React, { useEffect, useState } from "react";
import { DocumentData, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

const Home = () => {
  const [posts, setPosts] = useState<DocumentData[]>([]);

  const postCollectionRef = collection(db, "posts");

  useEffect(() => {
    // Fetch posts from the database
    const fetchPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPosts(data.docs.map((doc) => doc.data()));
    };
    fetchPosts();
  }, []);
  console.log(posts);

  return (
    <div className="homePage">
      <div className="postsContainer">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
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
