/**
 * TOLONG JANGAN GANTI GAMBARNYA,NOMORKU DAN SAWERIAKU
 * MENDING KALIAN TAMBAHIN NOMOR KALIAN
*/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m) => {
let duit = `Kalian bisa mendukung saya agar bot ini tetap up to date dengan

πΏπππΌππ πππΌ β’
β₯ ππππΌπ
β₯ πππ
β₯ πΏπΌππΌ
β₯ ππΌπππΌπ
β₯ π½πΌππ
β₯ πππππππππ½ππ
β ππππ β ππππ π½πππππ β`
let message = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/1ef90db60907d6083a23a.jpg' }}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: duit,
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: 'ππππππ πππ',
               url: 'https://wa.me/qr/3NPBSZBJKZYYN1'
             }

           },
               {
             callButton: {
               displayText: 'πππππ ππππππ',
               phoneNumber: '+6285892842367'
             }
           },           
               {
             quickReplyButton: {
               displayText: 'β ππππππ πππππ',
               id: '.sos',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|bagiduit$/i

module.exports = handler
