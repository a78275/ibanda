var User = require ('../models/user')
var bcrypt = require('bcrypt')

//editar ou inserir um utilizador
module.exports.inserir = (user) => {
    if(user._id) {
        console.log("ID do utilizador que vai ser atualizado: " + user._id)
        return User
                .update({_id:user._id}, {$set:user})
                .exec()
    }
    var novo = new User(user)
    return new Promise(function(fulfill, reject){
        novo.save(erro => {
            if (erro) {
                console.log('Erro no controller do user: ' + erro)
                reject({erro: "Erro na inserção do utilizador."})
            }
            else 
                fulfill({ok: "Registo do utilizador inserido na BD."})
        })
    })
}

//listar todos os utilizadores
module.exports.listar = () => {
    return User
        .find()
        .sort({tipo:-1})
        .exec()
}

//remover um utilizador
module.exports.remover = (id) => {
    return User.remove({_id:id})
}

module.exports.getUser = (id) => {
    return User
        .findOne({_id: id})
        .exec()
}

//listar utilizadores de um determinado tipo (match com expressão regular)
module.exports.listarTipo = (tipo) => {
    var t = new RegExp(tipo, "i")
    return User
        .find({tipo: t})
        .sort({nome:-1})
        .exec()
}

//listar utilizadores com um determinado nome (match com expressão regular)
module.exports.listarNome = (nome) => {
    var n = new RegExp(nome, "i")
    return User
        .find({nome: n})
        .sort({nome:-1})
        .exec()
}
//listar utilizadores com um determinado email (match com expressão regular)
module.exports.listarEmail = (email) => {
    var e = new RegExp(email, "i")
    return User
        .find({email: e})
        .sort({nome:-1})
        .exec()
}

module.exports.consultar = (e) => {
    return User
        .findOne({email: e})
        .exec()
}
