<template>
  <div class="body">
    <h1>My Tasks</h1>
    <div id="tasks">
      <div class='ui centered card' v-for="task in tasks" :key="task.id">
        <div class="content">
          <div class="header">
            {{task.name}}
          </div>
          <div class="extra content">
            <span class="right floated edit icon">
              <i class="edit icon"></i>
            </span>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
  import {getTasks} from "./api";

  export default {
      name: "list-tasks",
      props:['tasks'],

  }


</script>

<style scoped>

</style>
