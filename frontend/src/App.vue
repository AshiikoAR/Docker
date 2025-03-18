<template>
  <div id="app">
    <h1>Task Manager</h1>
    <div>
      <form @submit.prevent="addTask">
        <input v-model="newTask" placeholder="Add a new task" />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        <li v-for="task in tasks" :key="task.id">
          <input type="checkbox" v-model="task.completed" @change="updateTask(task)" />
          <span :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">{{ task.name }}</span>
          <button @click="deleteTask(task.id)">Delete</button>
          <button @click="markTaskCompleted(task.id)">Mark as Completed</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      tasks: [],
      newTask: ''
    };
  },
  methods: {
    fetchTasks() {
      console.log('Fetching tasks...');
      fetch(`${process.env.VUE_APP_API_URL}/tasks`)
        .then(response => response.json())
        .then(data => {
          console.log('Tasks fetched:', data);
          this.tasks = data;
        })
        .catch(error => {
          console.error('Error fetching tasks:', error);
        });
    },
    addTask() {
      console.log('Adding task:', this.newTask);
      fetch(`${process.env.VUE_APP_API_URL}/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: this.newTask, completed: false })
      })
        .then(response => response.json())
        .then(task => {
          console.log('Task added:', task);
          this.tasks.push(task);
          this.newTask = '';
        });
    },
    updateTask(task) {
      console.log('Updating task:', task);
      fetch(`${process.env.VUE_APP_API_URL}/tasks/${task.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
      });
    },
    deleteTask(taskId) {
      console.log('Deleting task:', taskId);
      fetch(`${process.env.VUE_APP_API_URL}/tasks/${taskId}`, {
        method: 'DELETE'
      }).then(() => {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
      });
    },
    markTaskCompleted(taskId) {
      console.log('Marking task as completed:', taskId);
      fetch(`${process.env.VUE_APP_API_URL}/tasks/${taskId}/completed`, {
        method: 'PATCH'
      }).then(() => {
        const task = this.tasks.find(task => task.id === taskId);
        if (task) {
          task.completed = true;
        }
      });
    }
  },
  mounted() {
    this.fetchTasks();
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: red;
  margin-top: 60px;
}
</style>
