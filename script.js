class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = "";
    }

    atacar() {
        switch (this.tipo) {
            case "mago":
                this.ataque = "usou magia!";
                break;
            case "guerreiro":
                this.ataque = "usou espada!";
                break;
            case "monge":
                this.ataque = "usou artes marciais!";
                break;
            case "ninja":
                this.ataque = "usou shuriken!";
                break;
            default:
                this.ataque = "usou um ataque indefinido!";
        }
    }
}

function criarHeroi() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const tipo = document.getElementById("tipo").value;

    const heroi = new Heroi(nome, idade, tipo);
    heroi.atacar();

    const resultado = document.getElementById("resultado");
    resultado.textContent = `O ${tipo} atacou usando ${heroi.ataque}`;
}
