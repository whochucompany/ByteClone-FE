import React from 'react';
import Comment from "./Comment";
import styled from 'styled-components';


const CommentList = ({ comment }) => {

    

    return (
        <CommentListWrap>
            <Comment key={comment.id} comment={comment.comment} id = {comment.id} day = {comment.commentList.createAt}></Comment>
        </CommentListWrap>
    );
};

export default CommentList;

const CommentListWrap = styled.div`
    background-color : blue; 
`