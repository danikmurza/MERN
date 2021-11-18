const config = require('../config/default.json')

module.exports = function(email) {
    return {
        to: email,
        from: config.email,
        subject: 'Аккаунт создан',
        html: `
      <h1>Добро пожаловать в наш магазин</h1>
      <p>Вы успешно создали аккаунт c email - ${email}</p>
      <hr />
      <a href="http:/localhost:3000/">Магазин комплектующих</a>
    `
    }
}