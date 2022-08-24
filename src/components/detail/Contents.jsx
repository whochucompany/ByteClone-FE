import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookF, faLinkedin, faPinterest } from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons"
import {faLink}from"@fortawesome/free-solid-svg-icons"
import { useParams } from "react-router-dom";
import {useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { __getPost } from '../../redux/modules/post';


const Contents = () => {
    const { newsId } = useParams();
    const[newsData, setNewsData] = useState([]);
    const [create, setCreate] = useState(''); // 날짜
    const [viewmode, setViewMode] = useState(''); // 유료, 무료
    const viewState = localStorage.getItem('View')
    const loginUserNickname = localStorage.getItem('username')
    const {register, handleSubmit, formState:{errors}} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getPosts = async() =>{
        try{
            const response  = await axios.get(`http://15.164.170.89/api/news/detail/${newsId}`)
            setNewsData(response.data)
            setCreate(response.data.createdAt.substring(0, 10))
        } catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        dispatch(__getPost(newsId));
        getPosts();
    },[])

    const DeletePost = async() => {
        try{
            let answer = window.confirm("기사를 삭제합니까?");
            if(!answer) return;
            const Authorization = localStorage.getItem('Authorization');
            const headers = {
                'Content-Type': 'application/json',
                Authorization: `${Authorization}`,
              }
            await axios.delete(`http://15.164.170.89/api/news/${newsId}`,{headers: headers})
            navigate("/")
            
        }catch(error){
            console.log(error)
        }
    }

    const ModifyPost = ()=>{
        navigate(`/modify/${newsId}`)
    }
    
    const onSubmit =() =>{
        alert("이메일을 발송했습니다. (기능구현x)")
    }
    return (
        <>
        <NewImageDiv>
                <img src={newsData.image} alt="" />
                <div className='new_info'>
                <h1 className='title'>{newsData.title}</h1>
                <div>
                    <p>{newsData.username}</p>
                    <p>{create}</p>
                    <p>댓글 남기기</p>
                </div>
            </div>
        </NewImageDiv>
        <DetailDiv>
            <div className='content'>
                {newsData.content}
            </div>
            <div className='category'>
                <span>{newsData.category}</span>
            </div>
            <div className='sns'>
                {/* sns */}
                <ul>
                    <li><FontAwesomeIcon icon={faTwitter} /></li>
                    <li><FontAwesomeIcon icon={faFacebookF} /></li>
                    <li><FontAwesomeIcon icon={faLinkedin} /></li>
                    <li><FontAwesomeIcon icon={faPinterest} /></li>
                    <li><FontAwesomeIcon icon={faEnvelope} /></li>
                    <li><FontAwesomeIcon icon={faLink} /></li>
                </ul>
            </div>
                {/* 메일 회원가입을 안 했을 때 보이는 곳.*/}
                {viewState === "guest" ? 
                <div className='email'>
                    {/* 게스트 */}
                    <p><FontAwesomeIcon icon={faEnvelope} /></p>
                    <p>회원가입을 통해 다양한 콘텐츠들을 만나보세요!</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        name = "email"
                        placeholder='이메일 주소를 적어주세요.'
                        {...register("email",
                            {required: "Email is required", pattern:/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i}
                        )}
                        />
                        {errors.email && errors.email.type === "pattern" && <p> 이메일 형식이 아닙니다. </p>}
                        <button>무료 회원 가입</button>
                    </form>
                </div>
                :<div>
                    {/* 맴버 */}
                </div>
                }
                <div className='modify' >
                    <ModifyP loginUserNickname={loginUserNickname} postname ={newsData.username} onClick={ModifyPost}>수정하기</ModifyP>
                    <ModifyP loginUserNickname={loginUserNickname} postname ={newsData.username} onClick={DeletePost}>삭제하게</ModifyP>
                </div>
        </DetailDiv>
        </>
    );
};

export default Contents;

const DetailDiv = styled.div`
width: 650px;
margin: 0 auto;
   
    .content{
        font-size: 16px;
        line-height: 28px;
        color: #000C2D;
    }
    .email{
        background-image: ${(props) => props.theme.lightmode.color_gradient};
        text-align: center;
        border-radius: 8px;
        padding: 56px;
        box-sizing: border-box;
        margin-top: 32px;
        form{
            display: flex;
            justify-content: center;
            input{
                width: auto;
                padding-left: 24px;
                border-top-left-radius: 32px;
                border-bottom-left-radius: 32px;
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
                border: none;
            }
            button{
                border-top-right-radius: 32px;
                border-bottom-right-radius: 32px;
                cursor: pointer;
                background-color: #04a6d7;
                border: none;
                color: #fff;
                padding: 16px 32px;
                font-size: 12px;
                line-height: 16px;
                font-weight: 600;
            }
        }
        p:first-of-type{
            fill:#4F525F;
            svg{
                font-size: 32px;
            }
        }
        p{
            font-weight: 500;
            font-size: 14px;
            margin-bottom: 32px;
            color: #4F525F;
        }
    }
    .category{
        display: flex;
        margin: 30px 0;
        span{
            padding: 10px 36px;
            background-color: #EEF1F0;
            border-radius: 4px;
            transition: all .5s;
            line-height: 16px;
            font-size: 12px;
            font-weight: 600;
        }
    }
    .sns{
        ul{
            display: flex;
            justify-content: space-between;
            
            li{
                padding: 10px 36px;
                background-color: #EEF1F0;
                border-radius: 4px;
                transition: all .5s;
                line-height: 16px;
                cursor: pointer;
                svg{
                    width: 24px;
                }
            }
        }
    }
    .modify {
        display: flex;
        justify-content: flex-end;
        margin-top: 20px;
        
    }
    
`
const ModifyP = styled.div`
            display: ${props => `${props.postname}` === `${props.loginUserNickname}` ? `block` : `none`};
            transition: all .3s;
            margin-left: 15px;
            cursor: pointer;
            &:hover{
                color: #04a6d7;
            }
`

const NewImageDiv = styled.div`
   img{
    width: 100%;
    max-height: 700px;
    object-fit: cover;
    border-radius: 8px;
    box-sizing: border-box;
   }
   .new_info{
        width: 800px;
        margin: 0 auto;
        padding: 48px 0;
        h1 {
            font-size: 48px;
            text-align: center;
            font-weight: 800;
            line-height: 56px
        }
        div {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 12px;
            margin-top: 40px;
            color: #4F525F;
            p{  
                line-height: 1;
                padding-left: 16px;
                margin-left: 16px;
                box-sizing: border-box;
                box-shadow: inset 1px 0 0 0 #4F525F;
                font-weight: 500;

            
            }
            p:first-of-type{
                font-weight: 600;
                box-shadow: none
            }
            
        }
    }
    
`