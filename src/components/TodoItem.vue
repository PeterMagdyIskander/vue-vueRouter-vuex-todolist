<template>
    <div>
        <p>{{todoTitle}}</p>
        <p>{{completed}}</p>
        <button @click="$emit('completeTodo',id)" > finish todo </button>
    </div>
</template>

<script>
export default {
    name:'TodoItem',
    props:[
        'todoTitle',
        'completed',
        'id',
    ],
}
</script>