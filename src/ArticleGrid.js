import React from 'react';
import PropTypes from 'prop-types';
import ArticleList from  './ArticleList';
import articles from './articles.json';
import  './ArticleGrid.css';

class ArticleGrid extends React.Component{
  render() {
      
  return (
    
   
    
    <div>
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      
         <article className='entireArticle'>
           <header className='articleheader'>
              <div className='leftcss'><h3>The INFO6150 News</h3></div>
              <div className='rightcss'>Wed, February 20, 2019</div>
           </header>
        <div className='emptyClass'>
        </div>
         <ArticleList articles = {articles} />
       <div className='emptyClass'>
       </div>
       <footer className='articlefooter'>
          <div className='footerfont'>&copy; 2019, April Bhingam</div>
       </footer>
      </article>
    </div>
 
  );
}
}

export default ArticleGrid;
