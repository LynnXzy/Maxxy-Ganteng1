import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `「 Lynn-Md Aktif🐸 」`
await conn.reply(m.chat, info, m, { quoted: fakes, contextInfo: { externalAdReply: { showAdAttribution: true, title: botdate, body: bottime, sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg') }}})
}
handler.customPrefix = /^(tes|tess|test)$/i
handler.command = new RegExp

export default handler
