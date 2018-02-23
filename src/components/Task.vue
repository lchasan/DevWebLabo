<template>
  <div class="task">
    <div class="content">
      <input type='text' v-model="task.name" >
    </div>

    <div class='extra content'>
          <span class='right floated edit icon' v-on:click="edit()">
          <i class='edit icon'>Edit</i>
          </span>

      <span class='right floated delete icon' v-on:click="deleteTask(task)">
          <i class='delete icon'>Delete</i>
          </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "task",
    props: ['task'],

    methods: {
      deleteTask(task) {
        this.$emit('delete-task', task);
      },
    }
  }
</script>

<style scoped>

</style>
