import React from 'react';
import PropTypes from 'prop-types';
//import Checkbox from './Checkbox';


class ArticleTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //author:
      selected: false
    };
  }

  onClick() {
    this.setState({
      selected: !this.state.selected
    });
  }

  render() {

    let selectedStatus;
    if (this.state.selected) {
      selectedStatus = 'Ticked';
    }
    else {
      selectedStatus = 'Not Ticked';
    }

    // paste this onClick handler into your checkbox;
    // you should not have to modify this code in any way
    // onClick={this.onClick.bind(this)}
    //
    return (
             <tr align="left">
                <td><input type="checkbox" onClick={this.onClick.bind(this)}/></td>
                <td><p>This box is {selectedStatus}</p></td>
                <td><address>{this.props.author}</address></td>
                <td><time datetime>{this.props.date}</time></td>
                <td>{this.props.shortText}</td>
              </tr>
    //  <div>Replace this div with your table row HTML</div>
    );
  }

}

ArticleTableRow.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  shortText: PropTypes.string.isRequired
};

export default ArticleTableRow;
