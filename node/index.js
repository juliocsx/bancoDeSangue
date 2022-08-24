(async () => {
    const database = require('./db');
    const Doador = require('./models/doador');
    const Funcionario = require('./models/funcionario')    
    try {
        const resultado = await database.sync({force: true});
        // const novoFuncionario = await Funcionario.create({
        //     nomeFuncionario: 'Luis',
        //     senhaFuncionario: 'luis123'
        // })
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
})();