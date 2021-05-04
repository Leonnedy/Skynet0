let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.pantun)}”`, m)
}
handler.help = ['Reglas']
handler.tags = ['quotes']
handler.command = /^(Reglas)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.pantun = [
"*🍁..¡Bienvenidos al grupo 'Ministerio de Artistas'!..🍁*\n\n *ESTAS SON LAS REGLAS A SEGUIR:*\n\n *•NO SPAM*\n *•Respeto y sana convivencia*\n *•solo criticas constructivas y darlas si el artista lo pide*\n *•no robar dibujos a nadie*\n *•¿no sabes dibujar? no te preocupes, aprendemos entre todos*\n *•Respetar gustos*\n *•Presentarse, obviamente*\n *•poner marca de agua en los dibujos*\n *•No se aceptan dibujos con tematica NSFW*\n *•DOMINGO ES DIA LIBRE, PUEDEN CHARLAR Y PODER INTERACTUAR MAS CON EL GRUPO*\n *•NO HABLAR AL PRIV SIN UNA RAZON, ESTE GRUPO ES PARA DIBUJOS NO PARA BUSCAR PAREJA*\n\n *NO DESOBEDECER LAS REGLAS, CUALQUIER INCUMPLIMIENTO SERA CASTIGADO CON BANEO INSTANTANEO, gracias por su atención 🧡*"
]
