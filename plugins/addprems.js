const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'etiqueta a uno de ellos y ingresa el numero para la verificacion !'
  // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.DATABASE._data.chats[m.chat].premium = true
  var nomor = m.sender
    m.reply(`*Pendejo añadido nuevamente✅*\n\n*Número : wa.me/${nomor.split("@s.whatsapp.net")[0]}\n*Vencimiento:* 30Days\n*gracias por agregar a alguien a premium !*`)
  // } else m.reply('Aquí hay un número de host...')
}
handler.help = ['addprems <numero>']
handler.tags = ['owner']
handler.command = /^addprems$/i
handler.rowner = true

module.exports = handler
