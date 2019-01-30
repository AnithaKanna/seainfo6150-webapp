import React from 'react';
import PropTypes from 'prop-types';


  class Article extends Component {
    render(){
      return(
        <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.author}</h2>
        <h3>{this.props.date}</h3>
        </div>
      );

    }
  }

  // disply the title author date

export default Article;
