import React from 'react';
import PropTypes from 'prop-types';
import ArticleListItem from './ArticleListItem';
import ArticleImage from './ArticleImage';
import articles from './articles.json';

const ArticleList = ({articles}) => (
  <body className='bodypanel'>


  {
    Object.values(articles).map(article => {
     return   <div className='mainpanel'>

                <div>
                  <ArticleImage url={article.image._url} />
                </div>
                <div>
                  <ArticleListItem
                    key={article.slug}
                    title={article.title}
                    date={article.pubDate}
                    //year={article.year}
                    author={article.author}
                    shortText={article.shortText}
                  //url={article.image._url}
                  />
               </div>
               <div className='clear'></div>
             </div>

    })
  }


  </body>
);

ArticleList.propTypes = {
  articles: PropTypes.object.isRequired
};

export default ArticleList;
