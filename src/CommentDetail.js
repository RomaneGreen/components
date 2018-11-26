import React from 'react';
import faker from 'faker';

const CommentDetail = (props) => {
    
    return ( 
        <div>
    <div className = "content" >
            <a href = "/"
        className = "author" >
            <img alt = "author"
        src = {
            props.srcp
        }
        />
        {props.author} </a> <div className = "metadata"> <span className = "date"> {props.timeAgo}</span> </div> <div className = "text" > {props.text} </div> </div > <div className = "content" >
            </div>
        </div>
    );
};

export default CommentDetail;