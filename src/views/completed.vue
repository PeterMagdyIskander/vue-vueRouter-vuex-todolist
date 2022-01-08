<template>
  <div class="home">
    <CompletedTodos />
  </div>
</template>

<script>
// @ is an alias to /src
import CompletedTodos from '@/components/CompletedTodos.vue'

export default {
  name: 'completed',
  components: {
    CompletedTodos
  }
}
</script>
