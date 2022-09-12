(async () => {
    const database = require('./db');
    const Doador = require('./models/doador');
    const Bolsa = require('./models/bolsa');   
    try {
        const resultado = await database.sync();
        const novoDoador = await Doador.create({
            nomeCompletoDoador: 'Julio Cesar Souza',
            senhaFuncionario: 'luis123'
        })
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
})();