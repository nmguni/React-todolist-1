import React from 'react';
import TodoList from './TodoList/todolist';
import TodoItem from './TodoItem/todoitem';
import Addtodo from './Addtodo/addtodo'
import './App.css';

class App extends React.Component {
  // render func is used when extending react.component 
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  render() {
    return (
      <div>
        {
          <Addtodo addTodoFn={this.addTodo}> </Addtodo>
        }
      </div>

    )
  }
  // get called when component is renderd and put in the dom
  // the component is considerd to be mounted 
  // whatever is inside of componentDIDMount will run
  componentDidMount = () => {
    const todos = localStorage.getItem('todos')
    if (todos) {
      // we can only put a string into local storage, when we get it out its still a string
      // we will have to turn it inot a string JSON.stringafy
      const savedTodos = JSON.parse(todos);
      //update out state
      this.setState({ todos: savedTodos });
    } else {
      console.log('No todos')
    }
  }

  addTodo = async (todo) => {
    await this.setState({ todos: [...this.state.todos, todo] })
    localStorage.setItem('todos', JSON.stringify(this.state.todos))
    console.log(localStorage.getItem('todos'));
  }

}

export default App;
