<template>
  <div class="body">

    <h1>New Task</h1>

    <textarea id="name" placeholder="Enter task"></textarea>
    <button type="button" id="save" v-on:click="create()">Save</button>


  </div>
</template>

<script>

  export default {
    name: "new-task",

    methods: {
      create() {
        const textarea = document.getElementById('name');
        const name = textarea.value;
        this.$emit('create-task',name);
        textarea.value = '';
      }
    }
  }

</script>

<style scoped>

</style>
