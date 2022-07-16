import './App.css';
import React from 'react';
import InputBox from './inputBox';
import BoxContent from './boxContent'

class App extends React.Component {
  state = {
    toDoList: [],
    inputValue: '',
  }

  changeHandler = (e) => {
    const {value} = e.target;
    this.setState({
      inputValue: value
    })
  }

  clickHandler = (e,d) => {
    e.preventDefault();

    const { toDoList } = this.state;

    this.setState({
      toDoList: [...toDoList, d],
      inputValue: '',
    })
  };

  clickDeleteHandler = (v) => {
    const { toDoList } = this.state;
    const newToDoList = toDoList.filter((l) => l !== v)

    this.setState({
      toDoList: newToDoList
    })
  }

  render () {
    const { inputValue, toDoList } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <InputBox
          inputValue={inputValue}
          clickHandler={this.clickHandler}
          changeHandler={this.changeHandler}
          />
          <div className='box-container'>
          {toDoList.map((l,i) => {
            return (
              <BoxContent
              list={l}
              index={i}
              deleteHandler={this.clickDeleteHandler}
              />
            )
          })}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
