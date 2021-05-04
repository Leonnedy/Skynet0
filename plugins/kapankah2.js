let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
*Pregunta:* ${command} ${text}
*Respuesta:* ${Math.floor(Math.random() * 10)} ${pickRandom(['segundos', 'minutos', 'horas', 'días', 'semanas', 'meses', 'años', 'décadas', 'siglos'])}  ...
`.trim(), m)
}
handler.help = ['', 'cuando2'].map(v => 'cuando' + v + ' <pregunta>')
handler.tags = ['kerang']
handler.command = /^cuando2(kah)?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

