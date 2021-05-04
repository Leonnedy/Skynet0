let handler  = async (m, { conn }) => {
  if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, '¿Por qué no vas directamente a la terminal?', m)
  else {
    await conn.reply(m.chat, 'Adios bot :\')', m)
    conn.close()
  }
}
handler.help = ['Detener','parar']
handler.tags = ['jadibot']
handler.command = /^(Detener|Parar)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

