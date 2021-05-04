let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text}) => {
    if (!text) throw '¿Quién quiere ser asesinado?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Etiqueta uno'
    let users = global.DATABASE._data.users
    users[who].banned = true
    conn.reply(m.chat, `no vio venir el chingadazo`, m)
}
handler.help = ['Kick']
handler.tags = ['owner']
handler.command = /^kick$/i
handler.rowner = true

module.exports = handler
