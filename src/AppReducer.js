
export const ACTION_TYPE = {
    ADD_TODO: 'ADD_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    DELETE_TODO: 'DELETE_TODO',
    SET_TODO_NAME: 'SET_TODO_NAME'
}

const initialState = {
    tasks: [],
    name: ''
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPE.ADD_TODO:
            state = Object.assign({}, state, {
                tasks: [...state.tasks, {
                    id: (state.tasks ? state.tasks.length : 0) + 1,
                    name: action.payload,
                    hasCompleted: false
                }],
                name: ''
            });
            break;
        case ACTION_TYPE.TOGGLE_TODO:
            let toggleTasks = state.tasks.map((task, index) => {
                if (index === action.payload) {
                    task.hasCompleted = !task.hasCompleted;
                }
                return task;
            });

            state = Object.assign({}, state, {
                tasks: toggleTasks
            });
            break;
        case ACTION_TYPE.DELETE_TODO:
            let remainingTasks = state.tasks;
            remainingTasks.splice(action.payload, 1);
            state = Object.assign({}, state, {
                tasks: [...remainingTasks]
            });
            break;
        case ACTION_TYPE.SET_TODO_NAME:
            state = {
                ...state,
                name: action.payload
            };
            break;
        default:
            break;

    }
    return state;
};

export default taskReducer;

