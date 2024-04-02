const{createApp} = Vue;

createApp({
    data(){
        return{
            display:"",
            numeroAnterior:null,
            numeroAtual: null,
            operador:null
        }
    },
    methods:{
        lidarBotao(valor){
            switch(valor)
            {
                case 'x': 
                case '/': 
                case '-': 
                case '+': 
                    this.lidarOperador(valor);
                    break;
                case '.':
                    this.lidarDecimal();
                    break;
                case 'C':
                    this.lidarLimpar();
                    break;
                case '=':
                    this.lidarIgual();
                    break;
                default:
                    this.lidarNumero(valor);
                
            }
        },
        lidarOperador(valor){
                this.numeroAnterior = this.display
                this.operador = valor
                this.display = this.operador
            console.log("O botão digitado foi: ",valor);
        },
        lidarDecimal(){
                if (!this.display.includes('.')) {
                    this.display += '.';}
                else{
                this.display += this.valor
            }
            console.log("Entrou no decimal");
        },
        lidarLimpar(){
            this.display = '';
            this.numeroAtual = null;
            this.numeroAnterior = null;
            this.operador = null;
        },
        lidarIgual(){
            switch (this.operador) {
                case '+':
                    this.display = (parseFloat(this.numeroAnterior) + parseFloat(this.numeroAtual)).toString();
                    break;
                case '-':
                    this.display = (parseFloat(this.numeroAnterior) - parseFloat(this.numeroAtual)).toString();
                    break;
                case 'x':
                    this.display = (parseFloat(this.numeroAnterior) * parseFloat(this.numeroAtual)).toString();
                    break;
                case '/':
                    this.display = (parseFloat(this.numeroAnterior) / parseFloat(this.numeroAtual)).toString();
                    break;}
                
                
            console.log("Entrou no igual");
        },
        lidarNumero(valor){
            if(this.operador !== null && this.numeroAtual === null) {
                this.display = valor;
                this.numeroAtual = parseFloat(valor);
            } else {
                this.display += valor;
            }

            if (this.operador !== null) {
                this.numeroAtual = parseFloat(this.display); // Armazena o valor atual do display em numeroAtual
            } console.log("O botão digitado foi: ", valor);   }
    }

}).mount("#app")