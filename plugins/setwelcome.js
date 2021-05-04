let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.welcome = text
    else if (isOwner) conn.welcome = text
    else global.DATABASE._data.chats.sWelcome = text
    m.reply('Bienvenida está configurado correctamente\n@user (Mention)\n@subject (Judul Grup)')
  } else throw 'y el texto?'
}
handler.help = ['conf. Bienvenida <texto>']
handler.tags = ['owner', 'group']

handler.command = /^cfbd$/i
module.exports = handler

