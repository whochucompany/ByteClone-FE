import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useForm } from "react-hook-form";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Create = () => {
    const [files, setFiles] = useState(''); // 파일 프리뷰 state 작성 
    const [category, setcategory] = useState('') // 카테고리
    const [view, setview] = useState('') // 공개 범위
    const [img, setImg] = useState('') // 사진
    const { register, handleSubmit, formState: { errors }, watch, getValues } = useForm();

    const content = useRef()
    const handleClickCtateGory = (e) =>{
       setcategory(e.target.value)
    }
    const handleClickView = (e) =>{
        setview(e.target.value)
     }
    const categoryMap = [
        {name: "news", label: "DAILY BYTE"},
        {name: "deepbyte", label: "DEEP BYTE"},
        {name: "marketinside", label: "마켓인사이드"},
        {name: "concept", label: "상식한입"},
        {name: "company", label: "기업한입"},
        {name: "brand", label: "브랜드한입"}
    ]

    const viewMap = [
        {name: "guest", label: "게스트 회원"},
        {name: "member", label: "맴버 회원"}
    ]

    useEffect(() => {
        preview();
        return () => preview();
    });

    const onLoadFile = (e) => {
        setFiles(e.target.files[0]);
        setImg(e.target.files[0])
    }

    const preview = () => {
        if (!files) return false;
        const imgEl = document.querySelector('#imgPreview')
        const reader = new FileReader();

        reader.onload = () =>
        (imgEl.style.backgroundImage = `url(${reader.result})`,
            imgEl.style.backgroundSize = "cover",
            imgEl.style.backgroundPosition = "center");
        reader.readAsDataURL(files)
    }

    const onSubmit = () =>{
        const values = getValues ();
        values.content = content.current;
        values.category = `${category}`
        values.view = `${view}`
        values.img = img
        console.log(values)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit, watch)} id="form">
            <div>
                <h2>기사 타이틀</h2>
                <input type="text" id='title' name='title' placeholder='기사 제목을 입력해주시요.'
                {...register("title", {required:true, maxLength: 30, })}
                />
                {errors.title && errors.title.type === "maxLength" && <p>제목이 깁니다.</p>}
                
            </div>
            <div>
                <h2>카테고리</h2>
                {categoryMap.map( categoryInput =>(
                    <CategoryChecked key={categoryInput.name}>
                        <input
                            type="radio" 
                            value={categoryInput.name}
                            checked = {category === `${categoryInput.name}`}
                            onChange= {handleClickCtateGory}
                        />
                        <span>{categoryInput.label}</span>
                    </CategoryChecked>
                ))}
                
            </div>
            <div>
                <h2>기사 내용 입력하기</h2>
                <CKEditor
                    id = 'content'
                    editor={ClassicEditor}
                    data='<p>Hello from CKEditor 5!</p>'
                    onChange={(event, editor) => {
                        content.current = editor.getData();
                    }}
                />
            </div>
            <div>
                <h2>표지 선택하기</h2>
                <input
                    type="file"
                    id="image"
                    name='file'
                    accept='image/*'
                    onChange={onLoadFile}
                />
                <p>권장 이미지 크기 : 600px * 600px</p>
                <ImgPreview id='imgPreview'></ImgPreview>
               
            </div>
            <div>
                <h2>공개범위</h2>
                {viewMap.map (viewInput => (
                    <CategoryChecked key = {viewInput.name}>
                        <input
                            type="radio"
                            value={viewInput.name}
                            checked={view === `${viewInput.name}`}
                            onChange = {handleClickView}
                         />
                         <span>{viewInput.label}</span>
                    </CategoryChecked>
                ))}
            </div>
            <button
            type='button'
            onClick={onSubmit}
            >게시하기</button>
        </form>
    );
};

export default Create;




const ImgPreview = styled.div`
    width: 100px;
    height: 100px;
    background-color:#fff8ff;
    border-radius: 20px;
    @media screen and (max-width: 600px){
        width: 80%;
    }
`

const CategoryChecked = styled.label`

    input {
        visibility: hidden;
        display: none;
    }
    span {
        padding: 10px 15px;
        border-radius: 20px;
        background-color:#fff ;
        border: 1px solid #EEF1F0;
        margin: 0 5px;
        transition: all .3s;
    }
    input[type=radio]:checked + span {
        color: #04a6d7;
        border: 1px solid #04a6d7;
        background-color: #e5eff5;
    }

`