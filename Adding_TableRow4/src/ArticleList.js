import React from 'react';
import PropTypes from 'prop-types';
import ArticleListItem from './ArticleListItem';
import articles from './articles.json';

const ArticleList = ({articles}) => (
  <body className='bodypanel'>
    <h2 align="center">List of Articles</h2>

  {
    Object.values(articles).map(article => {
     return  <ArticleListItem
        key={article.slug}
        title={article.title}
       date={article.pubDate}
       //year={article.year}
       author={article.author}
       shortText={article.shortText}
          />
    })
  }

  </body>
);

ArticleList.propTypes = {
  articles: PropTypes.object.isRequired
};

export default ArticleList;
