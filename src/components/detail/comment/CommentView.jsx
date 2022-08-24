import React, {useEffect, useState} from 'react';
import { useNavigate ,useParams} from "react-router-dom";
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import axios from "axios";
import styled from 'styled-components';

const CommentView = () => {

    const [commentData, setCommentData] = useState("");
    const navigate = useNavigate();
    const { newsId } = useParams();
    
    
    // 나중에 토큰이름 확인 
    const getData = async () => {
       

    try {
        // const response  = await axios.get(`http://15.164.170.89/api/news/detail/${newsId}`)
        const response  = await axios.get(`http://15.164.170.89/api/news/detail/${2}`)
        setCommentData(response.data.commentList)
        
    } catch(error){
        console.log("CommentViewGetData :", error)
    }
    
    }

    useEffect(()=>{
        if(true){
            //auth !== null
            
            console.log("댓글작성 토큰있음")
            getData()
        }else{
            // 댓글 건드리자마자 로그인 하라고 말하기
        }
    },[])
    
    return (
        <CommentViewWrap>
            <CommentForm comment={commentData}/>
            <CommentList comment={commentData}/>
        </CommentViewWrap>
        // 회원 비회원 구분했는지 확인하고 로직 다시짜기
    );
};

export default CommentView;

const CommentViewWrap = styled.div`
    background-color : red;
`
