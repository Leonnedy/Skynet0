let { performance } = require('perf_hooks')
let handler = async (m, { conn }) => {
  let old = performance.now()
  await m.reply('_Man, cuanto porno tenes para alentar tanto el internet..._')
  let neww = performance.now()
  m.reply(neww - old + 'ms')
}
handler.help = ['ping', 'velocidad']
handler.tags = ['info', 'tools']

handler.command = /^(ping|velocidad)$/i
module.exports = handler
