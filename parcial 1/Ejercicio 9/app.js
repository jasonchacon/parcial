const { createApp, computed } = Vue;

createApp({
    components: {
        'full-name': {
            props: {
                firstName: {
                    type: String,
                    required: true
                },
                lastName: {
                    type: String,
                    required: true
                }
            },
            template: `
                <div class="name-box">
                    <p>Nombre completo: {{ fullName }}</p>
                </div>
            `,
            setup(props) {
                const fullName = computed(() => `${props.firstName} ${props.lastName}`);

                return { fullName };
            }
        }
    },
    setup() {
        const firstName = 'Jason';
        const lastName = 'chacon';

        return { firstName, lastName };
    }
}).mount('#app');
