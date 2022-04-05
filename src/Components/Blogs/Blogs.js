import React from 'react';
import './Blogs.css';
const Blogs = () => {
    return (
        <div className='content'>
          <div>
                <h1>What is Context API?</h1>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around.</p>
                <p>Context like Props</p>

          </div>
            <div>
                <h1>What Is Semantic HTML?</h1>
                <p>Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation.</p>
                <p>For example, a (p)tag indicates that the enclosed text is a paragraph. </p>
            </div>
            <div>
                <h1>What Block and inline Element</h1>
                <p>Block: A block element always starts on a new line, and fills up the horizontal space left and right on the web page
                    <br></br>
                    example-div tag , p tag , heading tag etc.
                </p>
                <p> Inline: Inline elements don’t start on a new line, they appear on the same line as the content and tags beside them.
                    <br></br>
                 For example   span,strong,img tags
                </p>
            </div>
       </div>
       
    );
};

export default Blogs;