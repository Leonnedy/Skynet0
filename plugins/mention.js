let handler = async (m, { conn, text }) => {
  if (!text) throw 'Sin texto'
  m.reply(text, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}
handler.help = ['mencion <texto>']
handler.tags = ['tools']

handler.command = /^mencion$/i

module.exports = handler
