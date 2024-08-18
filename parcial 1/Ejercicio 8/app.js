const { createApp, ref } = Vue;

createApp({
    components: {
        'conditional-message': {
            props: {
                isHappy: {
                    type: Boolean,
                    required: true
                }
            },
            template: `
                <div :class="['message-box', isHappy ? 'happy' : 'sad']">
                    <p v-if="isHappy">😊 ¡Hoy es un gran día! ¡Sigue sonriendo!</p>
                    <p v-else>😞 No te preocupes, mañana será mejor.</p>
                </div>
            `
        }
    },
    setup() {
        const isHappy = ref(true); // Valor inicial

        const toggleMood = () => {
            isHappy.value = !isHappy.value;
        };

        return { isHappy, toggleMood };
    }
}).mount('#app');
