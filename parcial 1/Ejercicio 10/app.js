const { createApp, ref, watch } = Vue;

createApp({
    components: {
        'value-watcher': {
            props: {
                value: {
                    type: Number,
                    required: true
                }
            },
            template: `
                <div class="message-box" v-if="message">
                    <p>{{ message }}</p>
                </div>
            `,
            setup(props) {
                const message = ref('');

                watch(() => props.value, (newValue, oldValue) => {
                    message.value = `El valor ha cambiado de ${oldValue} a ${newValue}`;
                    setTimeout(() => {
                        message.value = '';
                    }, 3000); 
                });

                return { message };
            }
        }
    },
    setup() {
        const valor = ref(0);

        const cambiarValor = () => {
            valor.value += 1; 
        };

        return { valor, cambiarValor };
    }
}).mount('#app');
