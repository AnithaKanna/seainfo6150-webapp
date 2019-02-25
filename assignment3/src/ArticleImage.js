import React from 'react';
import PropTypes from 'prop-types';
import './ArticleImage.css';

class ArticleImage extends React.Component{
    render() {
      return(
            <img className='img' src= {this.props.url} alt="check"></img>
          );
}
}
ArticleImage.propTypes = {
  url: PropTypes.string.isRequired
};
export default ArticleImage;
