/**
 * TOLONG JANGAN GANTI GAMBARNYA,NOMORKU DAN SAWERIAKU
 * MENDING KALIAN TAMBAHIN NOMOR KALIAN
*/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m) => {
let duit = `πππ πππππ ππππππ
ββββββββββββ
β πππππππ‘

γversion 0.5.1γ
β πππππ’ππ ππππππβ΄β°β΄ β
`
let message = await prepareWAMessageMedia({ image: {url: 'https://i.ibb.co/0jYFSb7/03e384dfd0f4.png' }}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: duit,
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: 'ππππππ ππππ',
               url: 'https://github.com/DikaArdnt'
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
               displayText: 'β² πππππππππ',
               id: '.allmenu',
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
handler.command = /^menu$/i

module.exports = handler
