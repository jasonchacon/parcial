// Importa las funciones necesarias de Vue
const { createApp, ref } = Vue;

// Define el componente ToggleMessage
const ToggleMessage = {
  template: `
    <div>
      <button @click="toggleVisibility">
        {{ isVisible ? 'Ocultar Mensaje' : 'Mostrar Mensaje' }}
      </button>
      <p v-if="isVisible">¡Este es el mensaje que puedes ocultar o mostrar!</p>
    </div>
  `,
  setup() {
    // Define el estado reactivo utilizando ref
    const isVisible = ref(false);

    // Función para alternar la visibilidad del mensaje
    const toggleVisibility = () => {
      isVisible.value = !isVisible.value;
    };

    // Devuelve el estado y la función para usarlos en el template
    return { isVisible, toggleVisibility };
  }
};

// Crea y monta la aplicación Vue
createApp({
  components: {
    ToggleMessage
  }
}).mount('#app');