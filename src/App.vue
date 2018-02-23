<template>
  <div id="app">
    <NewTask/>
    <ListTasks v-bind:tasks="tasks"/>
  </div>
</template>

<script>
import NewTask from './components/NewTask'
import ListTasks from './components/ListTasks'
import {getTasks,createTask,updateTask,deleteTask} from './components/api.js'

export default {
  name: 'App',
  components: {
    NewTask,
    ListTasks
  },

  data() {
    return {
      tasks: []
    }
  },
  created: function () {
    getTasks().then((response) => {
    this.tasks = response;
    })
  },

  methods:{
    deleteTask(task) {
      const todoIndex = this.tasks.indexOf(task);
      deleteTask(task.id)
    },
  }

};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
