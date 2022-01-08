<template>
    <div>
        <input type='text' placeholder="please enter a todo" v-model="todoTitle" />
        <button @click="$emit('addTodo',todoTitle)"> Add Todo </button>
    </div>
</template>

<script>
export default {
    name:'TodoEntry',
    data(){
        return{
            todoTitle:'',
        }
    },
}
</script>