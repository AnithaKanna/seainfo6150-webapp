import React, { Component } from 'react';
import ArticleList from './ArticleList';
import articles from './articles.json';


class App extends Component {

    render() {
      return (

        <div>

        <ArticleList articles={articles} />

      </div>
    );
  }
}

export default App;
