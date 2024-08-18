// Importa la librería Vue
const { createApp } = Vue;

// Define el componente CounterComponent
const CounterComponent = {
  template: `
    <div>
      <h1>Contador: {{ count }}</h1>
      <button @click="increment">Incrementar</button>
    </div>
  `,
  data() {
    return {
      count: 0 // Inicializa el contador en 0
    };
  },
  methods: {
    increment() {
      this.count += 1; // Incrementa el valor del contador en 1
    }
  }
};

// Crea y monta la aplicación Vue
createApp({
  components: {
    CounterComponent
  }
}).mount('#app');