import React from "react";
import PostEntry from "./PostEntry";

const posts = [
  {
    userId: 1,
    id: 1,
    title: "My first blog post!",
    body: "This is a test post to see if I can make a basic blog page. Wish me luck!",
  },
  {
    userId: 1,
    id: 2,
    title: "My second blog post!",
    body: "Another post to check I wasn't just lucky with the first one.",
  },
];

const App = () => {
  return (
    <div>
      <h1>Dean&apos;s Blog</h1>
      {posts.map(({ id, title, body }) => (
        <PostEntry key={id} title={title} body={body}>
          Example for demo
        </PostEntry>
      ))}
      <PostEntry title="My bonus title!" body="My bonus body!" />
    </div>
  );
};

// Without object destructuring for post.id,  post.title, post.body
// const App = () => {
//   return (
//     <div>
//       <h1>Dean&apos;s Blog</h1>
//       {posts.map((post) => (
//         <PostEntry key={post.id} title={post.title} body={post.body} />
//       ))}
//     </div>
//   );
// };

export default App;
