import React from 'react';
import faker from 'faker';

const CommentDetail = () => {
    return ( 
        <div>
    <div className = "content" >
            <a href = "/"
        className = "author" >
            <img alt = "author"
        src = {
            faker.image.avatar()
        }
        />
        Sam </a> <div className = "metadata"> <span className = "date"> Today at 6: 00 PM </span> </div> <div className = "text" > Nice blog post </div> </div > <div className = "content" >
            </div>
        </div>
    );
};

export default CommentDetail;