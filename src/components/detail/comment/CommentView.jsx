import React from 'react';
import CommentList from './CommentBox';
import CommentForm from './CommentForm';

const CommentView = () => {
    return (
        <CommentViewWrap>
            <CommentForm/>
            <CommentList/>
        </CommentViewWrap>
    );
};

export default CommentView;

const CommentViewWrap = styled.div`
    background-color : red;
`
