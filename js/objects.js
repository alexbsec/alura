const cliente = {
    nome: "Caio",
    idade: 24,
    email: "caio@caio.com",
    saldo: 200,
    makePayment: function(valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente");
        } else {
            this.saldo -= valor;
            console.log(`Dinheiro enviado. Novo saldo ${this.saldo}`);
        }
    }
};

cliente.makePayment(50);

// FOR IN OBJECTS

for (let key in cliente) {
    console.log(cliente[key]);
}

// OBJECT METHODS

const chaves = Object.keys(cliente);

if (!chaves.includes("address")) {
    console.log('Chave no existe');
}