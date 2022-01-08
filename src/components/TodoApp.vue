<template>
    <div>
        <todo-entry @addTodo="addTodo"> </todo-entry>
        
        <ul v-for='todo in getTodos' :key="todo.id">
            <todo-item v-if="!todo.completed" :todoTitle="todo.todoTitle" :completed="todo.completed" :id="todo.id" @completeTodo="completeTodo" ></todo-item>
        </ul>

        <completed-todos />
    </div>
</template>

<script>
import TodoEntry from './TodoEntry.vue'
import TodoItem from  './TodoItem.vue'
import CompletedTodos from './CompletedTodos.vue'

import {mapGetters,mapActions} from 'vuex'

export default {
    name:'TodoApp',
    props:{
        msg:String,
    },
    computed:mapGetters(['getTodos','getCompletedTodos']),
    methods:{
        completeTodo:(index)=>{
            this.completeTodo(index)
        },
        addTodo:(todoTitle)=>{
            this.addTodo(todoTitle)
        },
        ...mapActions(['addTodo','completeTodo'])
    },
    components:{
        TodoItem,
        TodoEntry,
        CompletedTodos,
    }
}
</script>