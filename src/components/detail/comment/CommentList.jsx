import React from 'react';
import Comment from "./Comment";
import styled from 'styled-components';


const CommentList = ({ comment }) => {
    
    console.log(comment)

    return (
        <CommentListWrap>
            {comment && comment.map((comments)=> {
                return(            
       <Comment key={comments.id} comment={comments.comment} id = {comments.id} />
            )})
            };
        </CommentListWrap>
    );
};

export default CommentList;

const CommentListWrap = styled.div`
    background-color : blue; 
`