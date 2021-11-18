const config = require('../config/default.json')

module.exports = function(email, password) {
    console.log(password)
    return {
        to: email,
        from: config.email,
        subject: 'Восстановление доступа',
        html: `
      <h1>Вы забыли пароль?</h1>
      <p>Если нет, то проигнорируйте данное письмо</p>
      <p>Иначе нажмите на ссылку ниже:</p>
      
      <p><a href="http:/localhost:3000/">Восстановить доступ</a></p>
      <hr />
      <a href="http:/localhost:3000">Магазин электроники</a>
    `
    }
}