<template>
    <div>
        {{getCompletedTodos}}
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    props:{
        msg:String
    },
    computed:mapGetters(['getCompletedTodos']),
}
</script>
