const { createApp, ref } = Vue;

const app = createApp({
    setup() {
        const num1 = ref(0);
        const num2 = ref(0);
        const result = ref(null);

        const calculate = (operation) => {
            switch (operation) {
                case 'add':
                    result.value = num1.value + num2.value;
                    break;
                case 'subtract':
                    result.value = num1.value - num2.value;
                    break;
                case 'multiply':
                    result.value = num1.value * num2.value;
                    break;
                case 'divide':
                    result.value = num1.value !== 0 && num2.value !== 0 ? num1.value / num2.value : 'Error';
                    break;
            }
        };

        return { num1, num2, result, calculate };
    }
});

app.mount('#app');
