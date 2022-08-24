import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
import styled from 'styled-components';
const CreateButton = () => {
    const view = localStorage.getItem('View')

    return (
        <>
        {view === 'member' ? 
        <CreateButtonBtn>
            <Link to = "/create">
                <FontAwesomeIcon icon={faCirclePlus}/>
            </Link>
        </CreateButtonBtn>
        :
        <div></div>
        }
        </>
    );
};

export default CreateButton;

const CreateButtonBtn = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    font-size: 30px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    text-decoration: none;
    a{
        color:  ${(props) => props.theme.lightmode.color_brand};
        transition: all .3s;
        svg{
            transition: all .3s ease-in;
        }
        &:hover{
            color: #000;
            svg{
                transform: rotate(180deg);
            }
        }
    }
`