import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';


const Content = ({id, title, username, view, image, createdAt, category}) => {
    const navigate = useNavigate();
    const onClickHandler = () => {
        console.log("clicked");
        navigate(`/detail/${id}`);
    }
    const [viewmode, setViewMode] = useState('');
    const [create, setCreate] = useState('');
    useEffect(()=>{
        if(view === 'guest'){
            setViewMode("전체 공개")
        }else{
            setViewMode("유료 구독자 전용")
        }
        setCreate(createdAt.substring(0, 10))
    },[])
    console.log(create)
    const imgUrl = image;
    return (
        <Carddiv onClick={onClickHandler}>
            <div>
                <div className='card_img'>
                    <img src={image} alt="" />
                </div>
                <div className="card_content">
                    <p>{viewmode}</p>
                    <div>
                        <span>{username}</span> <span>{category}</span> <span>{create}</span>
                    </div>
                    <h2>{title}</h2>
                </div>
            </div>
        </Carddiv>
    );
};

export default Content;

const Carddiv =styled.div`
    width: 33.33333333%;
    padding: 0 24px;
    box-sizing: border-box;
    margin-bottom: 48px;
    cursor: pointer;
    >div{
        border-radius: 8px;
        overflow: hidden;
        height: 100%;
        box-shadow: 4px 12px 40px 6px rgb(0 0 0 / 9%);
        display: flex;
        flex-direction: column;
        &:hover{
            img{
                transform: scale(101%);
            }
            h2{
                border-color:#04a6d7 ;
            }
        }
    }
    .card_img{
        position: relative;
        overflow: hidden;
        padding-top: 56.25%;
        
        
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            top: 0;
            left: 0;
            transition: all .3s;
        }
    }
    .card_content{
        position: relative;
        padding: 32px;
        padding-top: 40px;
        >P {
            color:#09815C;
            font-size: 12px;
            line-height: 16px;
            font-weight: 500;
            position: absolute;
            top: 16px;
        }
        div{
            margin-bottom: 10px;
            font-size: 12px;
            font-weight: 500;
            line-height: 1;
            span:first-of-type{
                margin: 0;
                padding: 0;
            }
            span:nth-of-type(2){
                height: 12px;
                box-shadow: inset 1px 0 0 0 #4F525F;
                line-height: 1;
                box-sizing: border-box;
            }
            span{
                color:#4F525F;
                margin-left: 16px;
                padding-left: 16px;
            }
            
        }
        h2{
            display: inline-block;
            font-weight: 800;
            font-size: 20px;
            line-height: 28px;
            transition: all .3s;
            border-bottom: 1px solid transparent;
            transition: all 250ms ease-in-out;
        }
    }
`