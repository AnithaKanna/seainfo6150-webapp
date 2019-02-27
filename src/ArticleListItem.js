import React from 'react';
import PropTypes from 'prop-types';
//import ArticleImage from './ArticleImage';
import './ArticleListItem.css';
//import './ArticleImage.css';


class ArticleListItem extends React.Component{

  render () {
  return(


        <ul className='liststyle'>
            <li className='titlepanel'><h3 className='spacing'>{this.props.title}</h3></li>
            <li className='shortpanel'>{this.props.shortText}</li>
            <li align="right" className='space'><address>By: {this.props.author}</address></li>
            <li align="right" className='datepanel'>{this.props.date}</li>
        </ul>

  );
}
}
ArticleListItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  shortText: PropTypes.string.isRequired
};

export default ArticleListItem;
