import React from "react";
import PropTypes from "prop-types";

const PostEntry = ({ title, body, children }) => {
  return (
    <article>
      <h1>{title}</h1>
      <p>{body}</p>
      <p>{children}</p>
    </article>
  );
};

// Without destructuring for props.title, props.body
// const PostEntry = (props) => {
//   const { title, body } = props;
//   return (
//     <article>
//       <h1>{title}</h1>
//       <p>{body}</p>
//     </article>
//   );
// };

export default PostEntry;

PostEntry.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  children: PropTypes.string,
};

PostEntry.defaultProps = {
  children: "by Dean Spooner",
};
