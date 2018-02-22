<template>
  <div class="body">

  <h1>New Task</h1>
  <textarea id="name" placeholder="Enter task"></textarea>
  <button type="button" id="save">Save</button>
  <h1>My Tasks</h1>
  <div id="tasks"></div>

  <script type="module" src="./app.js"></script>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
