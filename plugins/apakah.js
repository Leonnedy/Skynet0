let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
*Pregunta:* ${m.text}
*Respuesta:* ${pickRandom(['SI','Es probable','Nah','definitivamente no','me da paja, pregunta otra cosa','desde luego!'])}
`.trim(), m)
}
handler.help = ['podria <texto>?']
handler.tags = ['kerang']
handler.customPrefix = /(\?$)/
handler.command = /^podria$/i
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

