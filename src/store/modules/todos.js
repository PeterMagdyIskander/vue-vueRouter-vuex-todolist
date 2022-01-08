const state={
    todos:[],
    completedTodos:[],
}

const getters={
    getTodos:(state)=>state.todos,
    getCompletedTodos:(state)=>state.completedTodos,
}

const mutations={
    setTodos:(state,todos)=>(state.todos=[...state.todos,todos]),
    addTodo:(state,todo)=>(state.todos=[...state.todos,todo]),
    completeTodo:(state,id)=>(state.todos.map(todo=>todo.id===id ? (todo.completed=!todo.completed,state.completedTodos.push(todo)) :null))
}

const actions={
    addTodo({commit},todoTitle){
        let todo={
            todoTitle,
            completed:false,
            id:Math.random(),
        }
        commit('addTodo',todo)
    },
    completeTodo({commit},id){
        commit('completeTodo',id)
    }
}

export default{
    state,
    getters,
    actions,
    mutations,
}