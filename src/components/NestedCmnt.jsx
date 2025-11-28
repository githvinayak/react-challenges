import React, { useState } from "react";
import Comment from "./Comment";

const NestedCmnt = () => {
  const [input, setInput] = useState();
  const [comments, setComments] = useState([
    {
      id: 1,
      display: "hello",
      children: [
        {
          id: 2,
          display: "world",
          children: [
            {
              id: 3,
              display: " hello world",
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: 4,
      display: "test",
      children: [],
    },
  ]);
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleNewComment = (input) => {
    return {
      id: new Date.getTime(),
      display: input,
      children: [],
    };
  };
  const handleAddComment = (e) => {
    if (input) {
      setComments((prev) => [...prev, handleNewComment(input)]);
      setInput("");
    }
  };
  const addReply = () => {};
  return (
    <>
      <div>
        {/* input box */}
        <div>
          <input
            type='text'
            value={input}
            placeholder='enter your comment'
            onChange={handleInput}
            className='border-2 border-black'
          />
        </div>
        {/* handle button */}
        <div>
          <button
            className='px-5 py-2 bg-purple-600 rounded-lg text-white'
            onClick={handleAddComment}
            type='submit'
          >
            comment
          </button>
        </div>
        {/* comment list */}
        <div>
          {comments &&
            comments.map((item) => (
              <Comment key={item.id} comment={item} addReply={addReply} />
            ))}
        </div>
      </div>
    </>
  );
};

export default NestedCmnt;
