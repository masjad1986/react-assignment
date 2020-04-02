import React from "react";

class Tasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: props.items
        };

        this.handleDeleteTask = this.handleDeleteTask.bind(this);
        this.handleProcessTask = this.handleProcessTask.bind(this);
    }

    handleDeleteTask(index) {
        this.state.tasks.splice(index, 1);
        this.setState({ tasks: this.state.tasks });

    }

    handleProcessTask(index) {
        let updatedTasks = this.state.tasks.map((task, i) => {
            if (index === i) {
                task.hasCompleted = !task.hasCompleted;
            }
            return task;
        })

        this.setState({ tasks: updatedTasks });
    }

    render() {
        return (
            <div>
                <b>Todo List ({this.state.tasks.length}):</b>
                <div className="task-table">
                    {
                        this.state.tasks.map((task, index) =>
                            <div key={`task-id-${index}`} className="task-row">
                                <div className="task-cell">{index + 1}</div>
                                <div className={`task-cell table-cell-name ${task && task.hasCompleted ? 'completed' : 'pending'}`}>
                                    {task ? task.name : ''}
                                </div>
                                <div className="task-action-cell">
                                    <button className="task-action" onClick={() => this.handleProcessTask(index)}> {task && task.hasCompleted ? 'Undo' : 'Complete'}</button>
                                    <button className="task-action" onClick={() => this.handleDeleteTask(index)}> Delete </button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Tasks;