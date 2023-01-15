import React, { Component } from "react";

// class Like extends Component {
//   state = {};
//   render() {
//     let classes = "fa fa-heart";
//     if (!this.props.liked) classes += "-o";
//     return (
//       <i
//         onClick={this.props.onLike}
//         style={{ cursor: "pointer" }}
//         className={classes}
//         aria-hidden="true"
//       ></i>
//     );
//   }
// }

// export default Like;

const Like = (props) => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <i
      onClick={props.onLike}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
