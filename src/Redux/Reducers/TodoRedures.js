const initial = JSON.parse(localStorage.getItem("todo"));
const Todo = (todolist = initial, action) => {
    if (action.type === "ADD-TODO") {
        const newdata = [
            ...todolist,
            action.payload
        ]
        localStorage.setItem("todo", JSON.stringify(newdata))
        return newdata
    }
    else if (action.type === "MARKING") {
        let newdata = [...todolist];
        newdata[action.payload].status = newdata[action.payload].status === "done" ? "pending" : "done";
        localStorage.setItem("todo", JSON.stringify(newdata))
        return newdata
    }
    else if (action.type === "DELETE-TODO") {
        const newdata = [...todolist].filter((item, i) => action.payload !== i)
        localStorage.setItem("todo", JSON.stringify(newdata))
        return newdata
    }
    else if (action.type === "FILTER-TODO") {
        let Todolist = JSON.parse(localStorage.getItem("todo"))
        if (action.payload === "done" || action.payload === "pending")
            return Todolist.filter(item => item.status === action.payload)
        else return Todolist
    }

    else if (action.type === "EDIT-TODO") {
        const newdata = [...todolist]
        newdata[action.payload].task = action.value === "" ? newdata[action.payload].task : action.value;
        localStorage.setItem("todo", JSON.stringify(newdata));
        return newdata
    }
    return todolist
}
export default Todo