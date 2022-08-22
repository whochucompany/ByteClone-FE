import React from 'react';
import db from '../../server/db.json'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import styled from 'styled-components';

const Contents = () => {
    const post = {...db.post[0]}
    const {id, title, imageUrl, content, createdAt, view, username, category} = post
    console.log(post)
    console.log(id)
    const viewState = localStorage.getItem('view')
    const {register, handleSubmit, formState:{errors}} = useForm();


    const onSubmit =() =>{
        alert("이메일을 발송했습니다. (기능구현x)")
    }
    return (
        <>
        <NewImageDiv>
                <img src={post.imageUrl} alt="" />
        </NewImageDiv>
        <DetailDiv>
            <div className='new_info'>
                <h1 className='title'>{title}</h1>
                <div>
                    <p>{username}</p>
                    <p>{createdAt}</p>
                    <p>댓글 남기기</p>
                </div>
            </div>
            <div className='content'>
                {content}
            </div>
            <div className='category'>
                {category}  
            </div>
            <div className='sns'>
                {/* sns */}
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
                {/* 메일 회원가입을 안 했을 때 보이는 곳.*/}
                {viewState === "guest" ? 
                <div className='sns'>
                    {/* 게스트 */}
                    <p>회원가입을 통해 다양한 콘텐츠들을 만나보세요!</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        name = "email"
                        placeholder='이메일을 적어주세요.'
                        {...register("email",
                            {required: "Email is required", pattern:/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i}
                        )}
                        />
                        {errors.email && errors.email.type === "pattern" && <p> 이메일 형식이 아닙니다. </p>}
                        <button>무료회원가입</button>
                    </form>
                </div>
                :<div>
                    {/* 맴버 */}
                </div>
                }
        </DetailDiv>
        </>
    );
};

export default Contents;

const DetailDiv = styled.div`
width: 800px;
margin: 0 auto;
    .new_info{
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
            p{  
                margin-top: 40px;
                padding-left: 16px;
                line-height: 1;
                box-sizing: border-box;
                &::after{
                    content: '|';
                    
                    margin-left: 16px;
                }
            
            }
            p:last-of-type{
                &::after{
                    content: '';
                }
            }
        }
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
    
`