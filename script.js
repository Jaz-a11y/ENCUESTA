const app = {
    data() {
        return {
            respuesta: '',
            color: '',
            estilo: '',
            largo: 9,
            listaUñas: [],
        }
    },
    methods: {
        guardarUñas() {
            this.listaUñas.push({
                color: this.color,
                estilo: this.estilo,
                largo: this.largo
            });
            this.color = '';
            this.estilo = '';
            this.largo = 9;
        }
    }
}

Vue.createApp(app).mount('#app');
