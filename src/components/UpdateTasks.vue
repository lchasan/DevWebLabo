<template>
    <button type="button" v-on:click="editTask()">Edit</button>
    <!--<task v-on:update-tasks="updateTask" v-for="task in tasks" :key="task.id" v-bind:task="task"/>-->
</template>

<script>
    import {updateTask} from "./api";

    export default {
        name: "update-task",
        props: ['tasks'],
        methods: {
            updateTask() {
                const edit = document.getElementsByClassName("edit icon");
                const newName = edit.value;
                this.$emit('update-task', newName);
                edit.value = '';

            }
        }
    }


    /*export default {
        name: "new-task",

        methods: {
            create() {
                const textarea = document.getElementById('name');
                const name = textarea.value;
                this.$emit('create-task',name);
                textarea.value = '';
            }
        }
    }*/
</script>

<style scoped>

</style>
