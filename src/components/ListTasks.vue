<template>
  <div class="body">
    <h1>My Tasks</h1>
    <div id="tasks">

        <task  v-on:delete-task="deleteTask" v-on:update-task="updateTask" v-for="task in tasks" :key="task.id" v-bind:task="task"/>

      </div>
    </div>

</template>

<script>
import {deleteTask, updateTask} from "./api";
import Task from "./Task.vue";

export default {
    name: "list-tasks",
    props: ['tasks'],
    components: {
      Task,
    },

    methods: {
        deleteTask(task) {
            deleteTask(task.id);
            this.tasks.splice(this.tasks.indexOf(task), 1);
        },
        updateTask(task, ListName){
            const newName = ListName[this.tasks.indexOf(task)].value;
            updateTask(task.id, newName);

        }
    }
}




</script>

<style scoped>

</style>
