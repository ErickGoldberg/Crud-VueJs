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
            
            this.clientes.splice(this.clientes[index - 1], 1);
        },
        editarCliente(index){
            let clienteEditado = prompt("Digite o novo nome:");
            this.clientes[index] = clienteEditado;
        }
    }
});

app.mount("#app")