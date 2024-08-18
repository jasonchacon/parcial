const { createApp, ref } = Vue;

createApp({
    setup() {
        const tema = ref('light'); // Estado inicial para el tema

        const toggleTema = () => {
            tema.value = tema.value === 'light' ? 'dark' : 'light';
            document.body.className = tema.value; // Cambia la clase del body para aplicar el tema
        };

        return { tema, toggleTema };
    }
}).mount('#app');
