import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';

const App =  () => {
    return <div className="ui container comments">
        <CommentDetail author = "Sam"  timeAgo ="today at 4:25pm" text="Yeahh" srcp={faker.image.avatar()} />
        <CommentDetail author = "Alex" timeAgo ="today at 4:35pm" text="Nahhh" srcp={faker.image.avatar()} />
        <CommentDetail author = "Jane" timeAgo ="today at 4:55pm" text="okayyyy" srcp={faker.image.avatar()} />
       

        
      </div>;
};

ReactDOM.render( < App / > , document.querySelector('#root'))