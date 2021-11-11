import * as React from "react";

const MessageSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      id="message-circle"
      d="M21,11.5a8.38,8.38,0,0,1-.9,3.8A8.5,8.5,0,0,1,12.5,20a8.38,8.38,0,0,1-3.8-.9L3,21l1.9-5.7A8.38,8.38,0,0,1,4,11.5,8.5,8.5,0,0,1,8.7,3.9,8.38,8.38,0,0,1,12.5,3H13a8.48,8.48,0,0,1,8,8Z"
      transform="translate(-2 -2)"
      fill="none"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default MessageSVG;
