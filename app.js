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
        },
        apagarCliente(index){
            let clienteIndex = this.clientes.indexOf(index);
            this.clientes.splice(clienteIndex, 1);
        },
        editarCliente(index){

        }
    }
});

app.mount("#app")