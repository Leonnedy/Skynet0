const { createHash } = require('crypto')
let Reg = /(.*)([.|])([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.DATABASE._data.users[m.sender]
  if (user.registered === true) throw `Usted ya está registrado\nQuiere volver a registrarse? ${usedPrefix}unreg <SN|SERIAL NUMBER>`
  if (!Reg.test(text)) throw `Formato incorrecto\n*${usedPrefix}daftar <nama>.umur>*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'El nombre no puede estar vacío (Alphanumeric)'
  if (!age) throw 'La edad no puede estar vacía (Cifra)'
  user.name = name
  user.age = parseInt(age)
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
¡Registro exitoso!

╭─「 Info 」
│ Nombre: ${name}
│ Edad: ${age}thn
│ SN: ${sn}
╰────
`.trim())
}
handler.help = ['registrar', 'reg', 'registro'].map(v => v + ' <nombre>.<umur>')
handler.tags = ['exp']

handler.command = /^(registrar|reg(ister)?)$/i

module.exports = handler

