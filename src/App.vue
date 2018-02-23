<template>
  <div id="app">
    <NewTask v-on:create-task="create"/>
    <ListTasks v-bind:tasks="tasks"/>
    <UpdateTasks v-on:update-task="updateTask"/>
  </div>
</template>

<script>
import NewTask from './components/NewTask'
import ListTasks from './components/ListTasks'
import UpdateTasks from './components/UpdateTasks'
import {getTasks,createTask,updateTask,deleteTask} from './components/api.js'

export default {
  name: 'App',
  components: {
    NewTask,
    ListTasks,
    UpdateTasks
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

      deleteTask(task)  {
        deleteTask(task.id).then((response) => {
            this.tasks.pop(response);
        })
      },

    updateTask(id, name){
        updateTask(task.id, task.name).then((response) => {
            this.tasks.splice(this.tasks.indexOf(task), 1, name)
        });
    }
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
