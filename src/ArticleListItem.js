import React from 'react';
import PropTypes from 'prop-types';
import './ArticleListItem.css';

class ArticleListItem extends React.Component{

  render () {
  return(


        <ul className='liststyle'>
            <li className='titlepanel'><h3 className='spacing'>{this.props.title}</h3></li>
            <li className='shortpanel'>{this.props.shortText}</li>
            <li className='space'><address>By: {this.props.author}</address></li>
            <li className='datepanel'>{this.props.date}</li>
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
