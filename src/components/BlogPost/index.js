import React from 'react';
import './style.css';
import Card from '../UI/Card';

/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {
  return(
      /*In the above code we can define it like this style={{width:"70%"}}
        <Card width='70%'>  </Card>*/

        <div className="blogPostContainer">
            <Card>
                <div className="blogHeader">
                <span className="blogCategory">Featured</span>
                <h1 className="postTitle">Beautiful is always beautiful</h1>
                <span className="postedBy">posted on July,26 by Sora</span>
                </div>

                <div className="postImageContainer">
                    <img src={require('../../blogPostImages/e.jpg')}alt="Post Imahe"/>

                </div>
            </Card>

        </div>


   );

 }

export default BlogPost;