let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
*Pregunta:* ${m.text}
*Respuesta:* ${Math.floor(Math.random() * 10)} ${pickRandom(['en un segundo', 'en un minuto', 'en una hora', 'en un día', 'en una semana', 'en un mes', 'en un año', 'en una década', 'en un siglo'])}  ...
`.trim(), m)
}
handler.help = ['', 'cuando'].map(v => 'Cuándo' + v + ' <texto>?')
handler.tags = ['kerang']
handler.customPrefix = /(\?$)/
handler.command = /^Cuando(kah)?$/i
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

