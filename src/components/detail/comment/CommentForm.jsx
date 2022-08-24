import React, {useState} from 'react';
import styled from 'styled-components';

const CommentForm = ({ comment }) => {

    const [inputs, setInputs] = useState("") 
    const onChangeHandler = (e) => {
        setInputs(e.target.value);
    }
    const onCreateComment = (e) => {
        e.preventDefault();
        console.log(comment)
        // console.log(comment[0].id)
    }
    
    return (
        <CommentFormWrap>
            <input
                className="comment_input"
                type="text"
                value={inputs} 
                onChange={onChangeHandler}
                placeholder="댓글을 입력해주세요!"
                />  
            <button
                onClick={onCreateComment}
                type="submit"
                >add</button>
        </CommentFormWrap>
    );
};

export default CommentForm;

const CommentFormWrap = styled.div`
    display : flex;
    flex-direction : row;

`