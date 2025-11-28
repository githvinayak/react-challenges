import React, { useState } from "react";

const Comment = ({ comment, addReply }) => {
  const [showReplyBox, setShowReplyBox] = useState(false);
  return (
    <>
      <div className='flex gap-2'>
      <li key={comment.id} className='comment-line'>
            {comment.display}
            {!showReplyBox && (<button
                onClick={handleReply}
                className='btn'>
                Reply
            </button>)
            }
            {
                showReplyBox ? (
                    <>
                        <br />
                        <input
                            value={replyText}
                            type='text'
                            ref={inputRef}
                            onKeyDown={(e) => handleKeyDown(e, comment.id)}
                            onChange={(e) => setReplyText(e.target.value)}
                        />
                        <br />
                        <button
                            onClick={() => handleReplySave(comment.id)}
                            className='btn'
                        >
                            save
                        </button>
                        <button
                            className='btn'
                            onClick={handleCancleComment}
                        >
                            cancle
                        </button>
                    </>
                ) : null
            }
            {
                comment.children.length ? (
                    <ul>
                        {
                            comment.children.map((item) => (
                                <Comment
                                    key={item.id}
                                    comment={item}
                                    addReply={addReply}
                                />
                            ))
                        }
                    </ul>
                ) : null
            }
        </li>

      </div>
    </>
  );
};

export default Comment;
