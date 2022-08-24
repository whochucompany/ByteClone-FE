import React  from 'react';
import ContentTop from  '../category/ContentTop'
import ContentList from './ContentList';

const ContentView = ({category}) => {

    return (
        <div>
            <ContentTop category={category}/>
            <ContentList category={category}/>
        </div>
    );
};



export default ContentView;