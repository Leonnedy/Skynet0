let handler = function (m) {
  // this.sendContact(m.chat, '6281515860089',  'Nurutomo', m)
  this.sendContact(m.chat, '0', '+1 829 209 7057', m)
}
handler.help = ['owner', 'creador']
handler.tags = ['info']

handler.command = /^(owner|creador)$/i

module.exports = handler
