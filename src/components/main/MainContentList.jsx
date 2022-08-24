import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MainContent from './MainContent';
import styled from 'styled-components';
import Layout from '../common/Layout';

const MainContentList = () => {
    const[allnewsData, setAllnewsData] = useState([]);

    const getPosts = async() =>{
        try{
            const response  = await axios.get('http://15.164.170.89/api/news')
            setAllnewsData(response.data.content)
            //const allNewsData = response.data
            console.log(response.data)
        } catch(error){
            console.log(error)
        }
    }
    
    useEffect(()=>{
        getPosts();
    },[])


    const newsData = allnewsData && allnewsData.map((news) => 
        (
        <MainContent
            key ={news.newsId}
            id ={news.newsId}
            title={news.title}
            username = {news.username}
            view = {news.view}
            image = {news.image}
            createdAt = {news.createdAt}
            category = {news.category}
        />
        ))

    return (
        <Layout>
            <CardListDiv>
                {newsData}
            </CardListDiv>
        </Layout>
    );
};

export default MainContentList;

const CardListDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
`