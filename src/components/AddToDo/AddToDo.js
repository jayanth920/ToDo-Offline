import React, { Component } from "react";
import "./AddToDo.css";

const ENTER_KEY_CODE_NUMBER = 13;
class AddToDo extends Component {
  handleChange = (newToDoItemTitleEvent) => {
    this.props.updateToDoItemTitle(newToDoItemTitleEvent.target.value);
  };

  addToDoList = () => {
    if (this.props.newToDoItemTitle != "") {
      let newToDoItem = {
        title: this.props.newToDoItemTitle,
        complete: false,
      };
      this.props.addToDoItem(newToDoItem);
    }
  };

  handleSubmit(event) {
    event.preventDefault();
  }

  enterPressed(event){
    var code = event.keyCode || event.which;
    if (code === ENTER_KEY_CODE_NUMBER) {
      this.addToDoList();
    }
  }

  render() {
    return (
      <div className="addToDoContainer">
        <h1 className="addToDoHeader">To Do:</h1>
        <input
          className="addToDoInput"
          type="text"
          value={this.props.newToDoItemTitle}
          onKeyPress={this.enterPressed.bind(this)}
          onChange={this.handleChange}
        />
        <button
          type="submit"
          className="toDoListSave"
          onClick={this.addToDoList}
        >
          Save
        </button>
      </div>
    );
  }
}

export default AddToDo;
