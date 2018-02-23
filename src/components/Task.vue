<template>
  <div class="task">
    <div class="content">
      <textarea class="newName" v-model="task.name" title="name"></textarea>
    </div>

    <div class='extra content'>
          <span class='edit' v-on:click="edit(task)">
          <i class='edit'>Edit</i>
          </span>

      <span class='delete' v-on:click="deleteTask(task)">
          <i class='delete'>Delete</i>
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
      edit(task) {
        const ListName = document.getElementsByClassName("newName");
        this.$emit('update-task',task, ListName);
      },
    }
  }
</script>

<style scoped>

</style>
