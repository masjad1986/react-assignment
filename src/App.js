import React from 'react';
import './App.css';
import Tasks from './Tasks';
import { connect } from 'react-redux';
import { ACTION_TYPE } from './AppReducer';

class App extends React.Component {
   render() {
    return (
      <div className="todo-container">
        <div className="todo-header">
          <div>
            <div className="header-title">
              <div className="right"><h1>To-Do App!</h1></div>
              <div className="right add-new">Add New To-Do</div>
              <div className="add-container">
                <input placeholder="Enter new task" value={this.props.taskName} onChange={(e) => this.props.setTaskName(e.target.value)} />
                <div className="right">
                  <button onClick={() => this.props.addTasks(this.props.taskName)}>Add</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="todo-content">
          <div className="content-title">Let's get some work done</div>
          
          <Tasks />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    taskName: state.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTaskName: (name) => {
      dispatch({
        type: ACTION_TYPE.SET_TODO_NAME,
        payload: name
      })
    },
    addTasks: (taskName) => {
      if (!taskName || !taskName.length) {
        alert('Enter task name.');
        return;
      }

      dispatch({
        type: ACTION_TYPE.ADD_TODO,
        payload: taskName
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
