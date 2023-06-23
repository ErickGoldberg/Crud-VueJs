const app = Vue.createApp({
    data(){
        return{
            clientes: []
        }   
    },
    methods: {
        cadastrar(){
            let addCliente = document.querySelector("#cad_cliente").value
            this.clientes.push(addCliente)
            
        }
    }
});

app.mount("#app")