const { createApp, ref } = Vue;

const App = {
    setup() {
        const newTask = ref('');
        const tasks = ref([]);

        const addTask = () => {
            if (newTask.value.trim() !== '') {
                tasks.value.push(newTask.value.trim());
                newTask.value = '';
            }
        };

        const removeTask = (index) => {
            tasks.value.splice(index, 1);
        };

        return {
            newTask,
            tasks,
            addTask,
            removeTask
        };
    }
};

createApp(App).mount('#app');