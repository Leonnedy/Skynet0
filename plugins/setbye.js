let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.bye = text
    else if (isOwner) conn.bye = text
    else global.DATABASE._data.chats.sBye = text
    m.reply('Despedida está configurado correctamente\n@user (Mention)')
  } else throw '¿Dónde está el texto?'
}
handler.help = ['Despedida <texto>']
handler.tags = ['owner', 'group']

handler.command = /^despedida$/i
module.exports = handler

