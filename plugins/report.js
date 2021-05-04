// By RC047 :V

let handler = async(m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, 'Por favor ingrese un informe', m)
    if (text > 300) return conn.reply(m.chat, 'Lo siento, mucho texto, máximo 300 texto ctm!', m)
    const laporan = `*「 REPORT 」*\nNomor : wa.me/${m.sender.split`@`[0]}\nPesan : ${text}`
    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid))
    m.reply(laporan, jid)
    m.reply(laporan, m.sender) // Mwehehehehe
    conn.reply(m.chat, '✔️El problema se ha informado al propietario del bot, ¡Los informes falsos/main2 no serán respondidos!', m)
}
handler.help = ['bug', 'report'].map(v => v + ' <laporan>')
handler.tags = ['info']
handler.command = /^(bug|report)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
