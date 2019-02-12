import React from 'react';
import PropTypes from 'prop-types';
import ArticleTableRow from './ArticleTableRow';
//import articles from './data/articles.json';

const ArticleTable = ({ articles }) => (

  <table background-color="pink" border="2px solid black" cellSpacing="8" cellPadding="0">
     <thead color="blue">
       <h3>Articles Table:</h3>
        <tr>
          <th>Checkbox</th>
          <th>Status</th>
          <th>Author</th>
          <th>Date</th>
          <th>ShortText</th>
        </tr>
     </thead>
  {
    // this iterates through the articles JSON and
    // calls your ArticleTableRow component for each article
    Object.values(articles).map(article => {
     return  <ArticleTableRow
        key={article.slug}
        title={article.title}
       date={article.pubDate}
       author={article.author}
       shortText={article.shortText}
          />
    })
}
  </table>
);

ArticleTable.propTypes = {
  articles: PropTypes.object.isRequired
};

export default ArticleTable;
