import React,{Component} from 'react';
import PropTypes from 'prop-types';


  class Article extends Component {
    render(){
      return(
        <div>
          <h1>{this.props.title}</h1>
          <h2> {this.props.author}</h2>
          <h3> {this.props.date}</h3>
          <div>{this.props.children}</div>
        </div>
      );

    }
  }
  Article.PropTypes = {
    title  : PropTypes.string.isRequired,
    author : PropTypes.string.isRequired,
    date   : PropTypes.string.isRequired,
  };



export default Article;
