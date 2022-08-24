import React from 'react';

const Comment = ({comment}) => {
    console.log("comment:",comment)
    return (
        <div>
            <div>{comment.comment}</div>
            <div></div>
        </div>
    );
};

export default Comment;