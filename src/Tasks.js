import React from "react";
import { connect } from "react-redux";
import { ACTION_TYPE } from "./AppReducer";

class Tasks extends React.Component {
    render() {
        return (
            <div>
                <b>Todo List ({this.props.tasks ? this.props.tasks.length : 0}):</b>
                <div className="task-table">
                    {
                        this.props.tasks.map((task, index) =>
                            <div key={`task-id-${index}`} className="task-row">
                                <div className="task-cell">{index + 1}</div>
                                <div className={`task-cell table-cell-name ${task && task.hasCompleted ? 'completed' : 'pending'}`}>
                                    {task ? task.name : ''}
                                </div>
                                <div className="task-action-cell">
                                    <button className="task-action" onClick={() => this.props.toggleTask(index)}> {task && task.hasCompleted ? 'Undo' : 'Complete'}</button>
                                    <button className="task-action" onClick={() => this.props.deleteTask(index)}> Delete </button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (index) => {
            dispatch({
                type: ACTION_TYPE.DELETE_TODO,
                payload: index
            })
        },
        toggleTask: (index) => {
            dispatch({
                type: ACTION_TYPE.TOGGLE_TODO,
                payload: index
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
