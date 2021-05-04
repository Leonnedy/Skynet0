let handler = async m => m.reply(`
╭─「 Donación • Pulsa 」
│ • OnlyFans https://onlyfans.com/leoqwerty
│ • Youtube https://www.youtube.com/c/leoblade3
│ • Twitter https://twitter.com/LeoBladeYT1 
╰────
╭─「 Contactos 」
│ > Queres donarme? Wa.me/18292097057
╰────
`.trim()) // Agrégalo tú mismo si quieres
handler.help = ['donaciones']
handler.tags = ['info']
handler.command = /^dona(cion|si)$/i

module.exports = handler

