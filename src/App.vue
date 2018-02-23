<template>
  <div id="app">
    <NewTask v-on:create-task="create"/>
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
    create(name){
      createTask(name).then((response) => {
        this.tasks.push(response);
      })
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
