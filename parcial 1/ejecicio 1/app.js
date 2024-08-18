const { createApp, reactive } = Vue;

createApp({
    components: {
        'bienvenida-personalizada': {
            template: `
                <div class="contenedor-bienvenida">
                    <input v-model="estado.nombre" type="text" placeholder="Ingresa tu nombre" class="input-nombre" />
                    <h1 v-if="estado.nombre">¡Bienvenido, {{ estado.nombre }}!</h1>
                    <p v-else>Bienvenido.</p>
                </div>
            `,
            setup() {
                const estado = reactive({
                    nombre: ''
                });

                return { estado };
            }
        }
    }
}).mount('#app');
