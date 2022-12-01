const addTodo = (task, status) => {
    return {
        type: "ADD-TODO",
        payload: {
            task: task,
            status: status
        }
    }
}

const Marking = (index) => {
    return {
        type: "MARKING",
        payload: index,
    }
}

const deleteTodos = (index) => {
    return {
        type: "DELETE-TODO",
        payload: index
    }
}

const filterTodo = (status) => {
    return {
        type: "FILTER-TODO",
        payload: status
    }
}

const editTodos = (value, index) => {
    return {
        type: "EDIT-TODO",
        payload: index,
        value: value
    }
}

export { addTodo, Marking, deleteTodos, filterTodo, editTodos }