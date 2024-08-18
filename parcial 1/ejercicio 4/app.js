// Importa las funciones necesarias de Vue
const { createApp, ref } = Vue;

// Define el componente InputAlert
const InputAlert = {
  template: `
    <div>
      <input v-model="inputValue" placeholder="Escribe algo aquí" />
      <button @click="showAlert">Mostrar Alerta</button>
    </div>
  `,
  setup() {
    // Define el estado reactivo para el valor del input
    const inputValue = ref('');

    // Función para mostrar una alerta con el valor del input
    const showAlert = () => {
      alert(inputValue.value);
    };

    // Devuelve el estado y la función para usarlos en el template
    return { inputValue, showAlert };
  }
};

// Crea y monta la aplicación Vue
createApp({
  components: {
    InputAlert
  }
}).mount('#app');