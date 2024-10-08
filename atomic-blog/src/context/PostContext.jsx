import { createContext, useState, useMemo } from "react";

import { createRandomPost } from "../utils/createRandomPost";
import { useContext } from "react";

const PostContext = createContext(null);

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  const handleAddPost = function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  };

  const value = useMemo(
    () => ({
      posts: searchedPosts,
      onAddPost: handleAddPost,
      onClearPosts: handleClearPosts,
      searchQuery,
      setSearchQuery,
    }),
    [searchQuery, searchedPosts]
  );

  function handleClearPosts() {
    setPosts([]);
  }
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};

export const usePostContext = () => {
  const context = useContext(PostContext);
  if (context === null)
    throw new Error("PostContext was used outside of the PostProvider");
  return context;
};
