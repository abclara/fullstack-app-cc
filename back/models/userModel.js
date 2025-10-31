const db = require('../db/database')
// .. = sair da pasta models e entrar na pasta db
const bcrypt = require('bcryptjs')

// FUNÇÃO PARA AChAR USUÁRIO PELO USERNAME para fazer autentificação
function findUserByUsername(username, callback) {
        db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
            callback(err, row)
    })
}

// Função para criar um usuário
async function createUser(username, password, callback) { 
    const hashedPassword = await bcrypt.hash(password, 10) // 10 é o número de saltos (salt rounds)
    // |--> vai pegar a senha e transformar em hash 
    db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err) => {
            callback(err, {id: this?.lastID, username})
    })
}

module.exports = {findUserByUsername, createUser}