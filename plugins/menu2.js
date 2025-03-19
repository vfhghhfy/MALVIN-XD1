const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');

cmd({
    pattern: "menu2",
    desc: "menu the bot",
    category: "menu",
    react: "⚡",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `
╭───❍「 *${config.BOT_NAME}* 」
┊ 🧑 *ᴜsᴇʀ:* ${pushname} 
┊ 🌐 *ᴍᴏᴅᴇ:**[${config.MODE}]*
┊ ✨ *ᴘʀᴇғɪx:* *[${config.PREFIX}]*
┊ 📍 *ᴘʟᴀᴛғᴏʀᴍ:* *[${os.hostname()}]*
┊ 👤 *ᴏᴡɴᴇʀ:* *${config.OWNER_NAME}*
┊ 🎐 *ᴠᴇʀsɪᴏɴ:* *3.0.0 ʙᴇᴛᴀ☯︎*
╰───────────❍

 ╭───❍「 *𝖬𝖤𝖭𝖴 𝖫𝖨𝖲𝖳* 」
 ┊• privatemenu
 ┊• settingsmenu
 ┊• searchmenu
 ┊• aimenu
 ┊• toolsmenu
 ┊• convertmenu
 ┊• funmenu
 ┊• dlmenu
 ┊• listcmd
 ┊• mainmenu
 ┊• groupmenu
 ┊• ownermenu
 ┊• othermenu
 ┊• logo <text>
 ┊• repo
 ╰───────────❍ 
╭───────────❍
 ${config.DESCRIPTION}
╰───────────❍
`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/e0kj4n.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363306168354073@newsletter',
                        newsletterName: 'ɴᴇxᴜs tech',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/kingmalvn/KING-DATA/raw/refs/heads/main/autovoice/menu2.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


// dlmenu

cmd({
    pattern: "dlmenu",
    desc: "menu the bot",
    category: "menu",
    react: "⤵️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = ` 〘 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨 〙

╭─────────────⪼
┋ ☻ *ʏᴛᴘᴏsᴛ* 
┋ ☻ *ᴀᴘᴋ* 
┋ ☻ *ᴛᴡɪᴛᴛᴇʀ* 
┋ ☻ *ɢᴅʀɪᴠᴇ* 
┋ ☻ *ᴍᴇᴅɪᴀғɪʀᴇ* 
┋ ☻ *ᴍᴇᴅɪᴀғɪʀᴇᴘʀᴏ*
┋ ☻ *sᴘᴏᴛɪғʏ*
┋ ☻ *ғʙ*
┋ ☻ *ɪɢ* 
┋ ☻ *ᴍᴏᴠɪᴇ*
┋ ☻ *sᴏɴɢ* 
┋ ☻ *sᴏɴɢ1*
┋ ☻ *ᴠɪᴅᴇᴏ* 
┋ ☻ *ᴠɪᴅᴇᴏ3*
┋ ☻ *ᴠɪᴅᴘʀᴏ*
┋ ☻ *ᴘʟᴀʏ*
┋ ☻ *ᴘʟᴀʏ2*
┋ ☻ *ᴘʟᴀʏ3*
┋ ☻ *ᴘʟᴀʏᴛ*
┋ ☻ *ᴘʟᴀʏᴘʀᴏ*
┋ ☻ *ᴘʟᴀʏᴜʟᴛʀᴀ*
┋ ☻ *ʏᴛ*
┋ ☻ *ʏᴛᴍᴘ3*
┋ ☻ *ʏᴛᴍᴘ4*
┋ ☻ *ᴛɪᴋᴛᴏᴋ* 
┋ ☻ *ᴛɪᴋᴛᴏᴋ2*
┋ ☻ *ɪᴍɢ* 
┋ ☻ *ʙᴀɪsᴄᴏᴘᴇ*
┋ ☻ *sɪɴʜᴀʟᴀsᴜʙ*
┋ ☻ *ɢᴇɴɪsɪsɪʟᴀ*
┋ ☻ *xɴxxᴅᴏᴡɴ*
┋ ☻ *xᴠᴅʟ*
┋ ☻ *ᴘɪɴᴛᴇʀᴇsᴛ*
┋ ☻ *ʀᴀɴᴅᴏᴍᴀɴɪᴍᴇ*
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

 ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/l1uebm.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363306168354073@newsletter',
                        newsletterName: 'Malvin King',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// group menu

cmd({
    pattern: "groupmenu",
    desc: "menu the bot",
    category: "menu",
    react: "⤵️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try
       {
        let dec = `〘 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨〙

〘 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 〙

╭────────────⪼
┋ ◉ *sϙᴜɪᴅɢᴀᴍᴇ* 
┋ ◉ *ᴋᴏɴᴀᴍɪ* 
┋ ◉ *ғᴀᴄᴛ* 
┋ ◉ *ϙᴜɪᴢ* 
┋ ◉ *ᴇᴍɪx* 
┋ ◉ *ᴄᴏᴍᴘᴀᴛɪʙɪʟɪᴛʏ* 
┋ ◉ *ᴅɪᴅʏᴏᴜᴋɴᴏᴡ*
┋ ◉ *ᴀᴜʀᴀ* 
┋ ◉ *8ʙᴀʟʟ* 
┋ ◉ *ᴄᴏᴍᴘʟɪᴍᴇɴᴛ* 
┋ ◉ *ʟᴏᴠᴇᴛᴇsᴛ* 
┋ ◉ *ᴇᴍᴏᴊɪ*
┋ ◉ *ᴄʀʏ* 
┋ ◉ *ᴄᴜᴅᴅʟᴇ*
┋ ◉ *ʙᴜʟʟʏ*
┋ ◉ *ʜᴜɢ* 
┋ ◉ *ᴀᴡᴏᴏ* 
┋ ◉ *ʟɪᴄᴋ* 
┋ ◉ *ᴘᴀᴛ* 
┋ ◉ *sᴍᴜɢ* 
┋ ◉ *ʙᴏɴᴋ* 
┋ ◉ *ʏᴇᴇᴛ* 
┋ ◉ *ʙʟᴜsʜ* 
┋ ◉ *ʜᴀɴᴅʜᴏʟᴅ* 
┋ ◉ *ʜɪɢʜғɪᴠᴇ* 
┋ ◉ *ᴡᴀᴠᴇ* 
┋ ◉ *ɴᴏᴍ* 
┋ ◉ *sᴍɪʟᴇ* 
┋ ◉ *ᴡɪɴᴋ* 
┋ ◉ *ʜᴀᴘᴘʏ* 
┋ ◉ *ɢʟᴏᴍᴘ* 
┋ ◉ *ʙɪᴛᴇ* 
┋ ◉ *ᴘᴏᴋᴇ* 
┋ ◉ *ᴄʀɪɴɢᴇ* 
┋ ◉ *ᴅᴀɴᴄᴇ* 
┋ ◉ *ᴋɪʟʟ* 
┋ ◉ *sʟᴀᴘ* 
┋ ◉ *ᴋɪss* 
┋ ◉ *ʜᴀᴄᴋ*  
┋ ◉ *ʟᴏʟɪ* 
┋ ◉ *ᴡᴀɪғᴜ*
┋ ◉ *ɴᴇᴋᴏ*
┋ ◉ *ᴍᴇɢᴜᴍɪɴ*
┋ ◉ *ᴅᴏɢ*
┋ ◉ *ᴄᴀᴛ*
┋ ◉ *ʀᴡ/ᴡᴀʟʟᴘᴀᴘᴇʀ*
┋ ◉ *ʙɪʙʟᴇ*
┋ ◉ *sʜɪᴘ*
┋ ◉ *ɪɴsᴜʟᴛ*
┋ ◉ *ғᴀɴᴄʏ*
┋ ◉ *ᴘɪᴄᴋᴜᴘʟɪɴᴇ*
┋ ◉ *ᴄʜᴀʀᴀᴄᴛᴇʀ*
┋ ◉ *ʀɪɴɢᴛᴏɴᴇ*
┋ ◉ *ʀɪɴɢᴛᴏɴᴇs*
┋ ◉ *ʀᴄᴏʟᴏʀ*
┋ ◉ *ʀᴏʟʟ*
┋ ◉ *ᴘɪᴄᴋ*
┋ ◉ *ᴄᴏɪɴғʟɪᴘ*
┋ ◉ *ғʟɪᴘ*
┋ ◉ *ᴅᴀᴛᴇ*
┋ ◉ *ᴛɪᴍᴇɴᴏᴡ*
┋ ◉ *ᴄᴏᴜɴᴛ*
┋ ◉ *ᴄᴏᴜɴᴛx*
┋ ◉ *sʜᴀᴘᴀʀ*
┋ ◉ *ᴄᴀʟᴄᴜʟᴀᴛᴇ*
┋ ◉ *ʀᴀᴛᴇ*
┋ ◉ *ᴄᴏᴜᴘʟᴇ*
┋ ◉ *ғᴀᴍɪʟʏ*
╰━━━━∙⋆⋅⋆∙━ ─┉─• ─⊷

 ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/ebqp72.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363306168354073@newsletter',
                        newsletterName: 'Malvin King',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// fun menu

cmd({
    pattern: "funmenu",
    desc: "menu the bot",
    category: "menu",
    react: "😎",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        let dec = `〘 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 〙

╭────────────⪼
┋ ◉ *sϙᴜɪᴅɢᴀᴍᴇ* 
┋ ◉ *ᴋᴏɴᴀᴍɪ* 
┋ ◉ *ғᴀᴄᴛ* 
┋ ◉ *ᴇᴍɪx* 
┋ ◉ *ᴄᴏᴍᴘᴀᴛɪʙɪʟɪᴛʏ* 
┋ ◉ *ᴀᴜʀᴀ* 
┋ ◉ *8ʙᴀʟʟ* 
┋ ◉ *ᴄᴏᴍᴘʟɪᴍᴇɴᴛ* 
┋ ◉ *ʟᴏᴠᴇᴛᴇsᴛ* 
┋ ◉ *ᴇᴍᴏᴊɪ*
┋ ◉ *ᴄʀʏ* 
┋ ◉ *ᴄᴜᴅᴅʟᴇ*
┋ ◉ *ʙᴜʟʟʏ*
┋ ◉ *ʜᴜɢ* 
┋ ◉ *ᴀᴡᴏᴏ* 
┋ ◉ *ʟɪᴄᴋ* 
┋ ◉ *ᴘᴀᴛ* 
┋ ◉ *sᴍᴜɢ* 
┋ ◉ *ʙᴏɴᴋ* 
┋ ◉ *ʏᴇᴇᴛ* 
┋ ◉ *ʙʟᴜsʜ* 
┋ ◉ *ʜᴀɴᴅʜᴏʟᴅ* 
┋ ◉ *ʜɪɢʜғɪᴠᴇ* 
┋ ◉ *ᴡᴀᴠᴇ* 
┋ ◉ *ɴᴏᴍ* 
┋ ◉ *sᴍɪʟᴇ* 
┋ ◉ *ᴡɪɴᴋ* 
┋ ◉ *ʜᴀᴘᴘʏ* 
┋ ◉ *ɢʟᴏᴍᴘ* 
┋ ◉ *ʙɪᴛᴇ* 
┋ ◉ *ᴘᴏᴋᴇ* 
┋ ◉ *ᴄʀɪɴɢᴇ* 
┋ ◉ *ᴅᴀɴᴄᴇ* 
┋ ◉ *ᴋɪʟʟ* 
┋ ◉ *sʟᴀᴘ* 
┋ ◉ *ᴋɪss* 
┋ ◉ *ʜᴀᴄᴋ*  
┋ ◉ *ʟᴏʟɪ* 
┋ ◉ *ᴡᴀɪғᴜ*
┋ ◉ *ɴᴇᴋᴏ*
┋ ◉ *ᴍᴇɢᴜᴍɪɴ*
┋ ◉ *ᴅᴏɢ*
┋ ◉ *ᴄᴀᴛ*
┋ ◉ *ʀᴡ/ᴡᴀʟʟᴘᴀᴘᴇʀ*
┋ ◉ *ʙɪʙʟᴇ*
┋ ◉ *sʜɪᴘ*
┋ ◉ *ɪɴsᴜʟᴛ*
┋ ◉ *ғᴀɴᴄʏ*
┋ ◉ *ᴘɪᴄᴋᴜᴘʟɪɴᴇ*
┋ ◉ *ᴄʜᴀʀᴀᴄᴛᴇʀ*
┋ ◉ *ʀɪɴɢᴛᴏɴᴇ*
┋ ◉ *ʀɪɴɢᴛᴏɴᴇs*
┋ ◉ *ʀᴄᴏʟᴏʀ*
┋ ◉ *ʀᴏʟʟ*
┋ ◉ *ᴘɪᴄᴋ*
┋ ◉ *ᴄᴏɪɴғʟɪᴘ*
┋ ◉ *ғʟɪᴘ*
┋ ◉ *ᴅᴀᴛᴇ*
┋ ◉ *ᴛɪᴍᴇɴᴏᴡ*
┋ ◉ *ᴄᴏᴜɴᴛ*
┋ ◉ *ᴄᴏᴜɴᴛx*
┋ ◉ *sʜᴀᴘᴀʀ*
┋ ◉ *ᴄᴀʟᴄᴜʟᴀᴛᴇ*
┋ ◉ *ʀᴀᴛᴇ*
┋ ◉ *ᴄᴏᴜᴘʟᴇ*
┋ ◉ *ғᴀᴍɪʟʏ*
╰━━━━∙⋆⋅⋆∙━ ─┉─• ─⊷

 ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/e0kj4n.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363306168354073@newsletter',
                        newsletterName: 'Malvin King',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// other menu

cmd({
    pattern: "othermenu",
    desc: "menu the bot",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `〘 𝗢𝗧𝗛𝗘𝗥 𝗠𝗘𝗡𝗨 〙

╭┈┈┈┈┈┉┉┉┈┈┈┈┈┈┈⪼
┋ ☻ *.ᴍᴏᴠɪᴇ*
┋ ☻ *.ɢꜱᴛᴀʟᴋ*
┋ ☻ *.ɢᴘᴀꜱꜱ*
┋ ☻ *.ɢɪᴛᴄʟᴏɴᴇ*
┋ ☻ *.ʀᴇᴘᴏ*
┋ ☻ *.ᴅᴇғɪɴᴇ*
┋ ☻ *.ᴜʀʟ*
┋ ☻ *.sᴀᴠᴇ*
┋ ☻ *.ϙᴜᴏᴛᴇ*
┋ ☻ *.sᴛᴀᴛᴜs*
┋ ☻ *.sʀᴇᴘᴏ*
┋ ☻ *.ɴᴘᴍ*
╰━━━━∙⋆⋅⋆∙━ ─┉┉─⊷

 ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/3ua1n7.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363306168354073@newsletter',
                        newsletterName: 'Malvin King',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
// search menu

cmd({
    pattern: "searchmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `〘 𝗦𝗘𝗔𝗥𝗖𝗛 𝗠𝗘𝗡𝗨 〙

╭──────── ────⪼
┋ ◉ *.ᴘʟᴀʏ* 
┋ ◉ *xsᴛᴀʟᴋ*
┋ ◉ *ʏᴛsᴛᴀʟᴋ*
┋ ◉ *ɪɢsᴛᴀʟᴋ*
┋ ◉ *ᴛɪᴋᴛᴏᴋsᴛᴀʟᴋ*
┋ ◉ *sᴏɴɢ*
┋ ◉ *.ᴠɪᴅᴇᴏ* 
┋ ◉ *.ʏᴛ  <ᴛᴇxᴛ>*
┋ ◉ *.ʟᴏʟɪ <ᴛᴇxᴛ>*
┋ ◉ *.ᴍᴏᴠɪᴇ <ᴛᴇxᴛ>*
┋ ◉ *.ɪᴍɢ <ᴛᴇxᴛ>*
┋ ◉ *.ᴡᴇᴀᴛʜᴇʀ <ᴄɪᴛʏ>*
┋ ◉ *ʟʏʀɪᴄs*
┋ ◉ *ɢᴏᴏɢʟᴇ*
┋ ◉ *ɴᴇᴡs*
┋ ◉ *ᴡɪᴋɪ*
╰━━━━∙⋆⋅⋆∙━ ─┉─ •┉─⊷

 ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/7hqhsw.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363306168354073@newsletter',
                        newsletterName: 'Malvin King',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// main menu

cmd({
    pattern: "mainmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🗿",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `〘 𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨 〙

╭─────────────
┋ ◕ *ᴀʟɪᴠᴇ* 
┋ ◕ *ᴀʟɪᴠᴇ2* 
┋ ◕ *ʟɪᴠᴇ*
┋ ◕ *ʙᴏᴛ*
┋ ◕ *ᴍᴇɴᴜ* 
┋ ◕ *ᴀʟʟᴍᴇɴᴜ* 
┋ ◉ *ʟɪsᴛ*
┋ ◕ *sᴜᴘᴘᴏʀᴛ* 
┋ ◕ *sʏsᴛᴇᴍ* 
┋ ◕ *ᴘɪɴɢ* 
┋ ◕ *ʀᴜɴᴛɪᴍᴇ* 
┋ ◕ *ᴜᴘᴅᴀᴛᴇ*
┋ ◕ *ɪɴғᴏ*
┋ ◕ *ᴀʙᴏᴜᴛ*
┋ ◕ *ᴛɪɴʏᴜʀʟ*
┋ ◕ *ᴏʙғ/ᴏʙғᴜsᴄᴀᴛᴇ*
┋ ◉ *ϙʀᴄᴏᴅᴇ*
┋ ◕ *ʙᴀsᴇ64*
┋ ◕ *ᴅᴇʙᴀsᴇ64*
┋ ◕ *ғᴇᴛᴄʜ / ᴀᴘɪ*
┋ ◕ *ɴᴘᴍɢᴜɪᴅᴇ*
┋ ◕ *ɴᴇᴡs* 
┋ ◕ *ᴡɪᴋɪ* 
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷-

 ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/ebqp72.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363306168354073@newsletter',
                        newsletterName: 'Malvin King',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// owner menu

cmd({
    pattern: "ownermenu",
    desc: "menu the bot",
    category: "menu",
    react: "🔰",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `〘 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 〙

╭───────────────⪼
┋☻ *.sᴇᴛᴛɪɴɢs*
┋☻ *.ʀᴇᴘᴏʀᴛ* 
┋⚉ *.ᴏᴡɴᴇʀ*
┋⚉ *.ʀᴇϙᴜᴇsᴛ*
┋☻ *.ʀᴀɴᴋ*
┋⚉ *.ʀᴇᴘᴏ*
┋⚉ *.ʙᴏᴛ*
┋⚉ *.ᴄʜᴇᴄᴋ*
┋⚉ *.sᴜᴘᴘᴏʀᴛ*
┋☻ *.sᴜᴘᴘᴏʀᴛ2*
┋⚉ *.ᴄʜᴀɴɴᴇʟ*
┋⚉ *.ꜱʏꜱᴛᴇᴍ*
┋⚉ *.ᴠᴇrsɪᴏɴ*
┋⚉ *.ʙʟᴏᴄᴋ*
┋⚉ *.ᴜɴʙʟᴏᴄᴋ*
┋⚉ *.ᴄʟᴇᴀʀᴄʜᴀᴛs*
┋⚉ *.sᴇᴛᴘᴘ*
┋⚉ *.ʙʀᴏᴀᴅᴄᴀsᴛ*
┋⚉ *.ᴘɪɴɢ*
┋⚉ *.ᴘɪɴɢ2*
┋⚉ *.ᴊɪᴅ*
┋⚉ *.ɢᴊɪᴅ*
┋⚉ *.ᴊɪᴅ1*
┋⚉ *.ᴊɪᴅ2*
┋⚉ *.ʀᴇꜱᴛᴀʀᴛ*
┋⚉ *.ᴡʜᴀᴛsɴᴇᴡ*
┋⚉ *.ɴᴇᴡᴘʟᴜɢɪɴs*
┋⚉ *.ᴘᴀɪʀ 263xxx*
┋⚉ *.ᴘᴀɪʀ2 263xxx*
┋☻ *.sᴘᴀᴍ*
┋⚉ *.ɴᴇᴡᴘʟᴜɢɪɴs*
┋⚉ *.ᴀɴᴛɪᴅᴇʟᴇᴛᴇ*
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

 ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/jt8zr6.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363306168354073@newsletter',
                        newsletterName: 'Malvin King',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// convert menu

cmd({
    pattern: "convertmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🥀",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗠𝗘𝗡𝗨

╭─────────────⪼
┋ ☻ *ᴄᴏɴᴠᴇʀᴛ* 
┋ ☻ *ᴘᴅғ*
┋ ☻ *ᴠsᴛɪᴄᴋᴇʀ* 
┋ ☻ *ᴛɢs*
┋ ☻ *ss* 
┋ ☻ *ᴛʀᴛ*
┋ ☻ *ᴛᴛs*
┋ ☻ *ᴠᴠ*
┋ ☻ *ғᴀɴᴄʏ*
┋ ☻ *sᴛᴇᴀʟ*
┋ ☻ *ᴛᴀᴋᴇ*
┋ ☻ *sᴛɪᴄᴋᴇʀ*
┋ ☻ *ʟᴏɢᴏ*
┋ ☻ *ʙɪɴᴀʀʏ*
┋ ☻ *ᴅᴇʙɪɴᴀʀʏ*
┋ ☻ *ᴇɴᴄᴏᴅᴇ*
┋ ☻ *ᴅᴇᴄᴏᴅᴇ*
┋ ☻ *ᴜʀʟᴇɴᴄᴏᴅᴇ*
┋ ☻ *ᴜʀʟᴅᴇᴄᴏᴅᴇ*
┋ ☻ *ᴛɪɴʏᴜʀʟ*
┋ ☻ *ᴜʀʟ / ᴛᴏᴜʀʟ*
┋ ☻ *ᴜᴘʟᴏᴀᴅ2*
╰━━━━∙⋆⋅⋆∙━ ─┉─ •┉─⊷

 ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/e0kj4n.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363306168354073@newsletter',
                        newsletterName: 'Malvin King',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// private menu

cmd({
    pattern: "privatemenu",
    desc: "menu the bot",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `〘 𝗣𝗥𝗜𝗩𝗔𝗧𝗘 𝗠𝗘𝗡𝗨 〙

╭────────────⪼
┋ ☻ *.ᴅɪᴀʀʏ*
┋ ☻ *.sᴇᴛᴅɪᴀʀʏ*
┋ ☻ *.ʀᴇsᴇᴛᴅɪᴀʀʏ*
┋ ☻ *.ʀᴇsᴇᴛᴘᴀssᴡᴏʀᴅ*
┋ ☻ *.ᴅᴀɪʟʏғᴀᴄᴛs*
┋ ☻ *.ᴀɢᴇ*
┋ ☻ *.ᴛɪᴍᴇᴢᴏɴᴇ*
┋ ⚉ *.ʏᴛsᴛᴀʟᴋ*
┋ ☻ *.sᴇɴᴅɪᴍᴀɢᴇ*
┋ ☻ *.ᴄᴏᴜɴᴛʀʏ*
┋ ☻ *.ᴠᴄᴀʀᴅ*
┋ ☻ *.ᴡᴀ*
┋ ☻ *.ᴀᴜᴛᴏʙɪᴏ*
╰━━━━∙⋆⋅⋆∙━ ─ • ─┉─⊷

 ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/ebqp72.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363306168354073@newsletter',
                        newsletterName: 'Malvin King',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// settings menu

cmd({
    pattern: "settingsmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `〘 𝖲𝖤𝖳𝖳𝖨𝖭𝖦𝖲 𝗠𝗘𝗡𝗨 〙

╭─────────────⪼
┋ ☻ *setprefix* 
┋ ☻ *autoreadstatus*
┋ ☻ *setmode*
┋ ☻ *setbotnumber*
┋ ☻ *autovoice*
┋ ☻ *autosticker*
┋ ☻ *autoreply*
┋ ☻ *autoreply*
┋ ☻ *autoreact*
┋ ☻ *welcome*
┋ ☻ *antibad*
┋ ☻ *antibot*
┋ ☻ *antilink*
┋ ☻ *allwaysonline*
┋ ☻ *readcmd*
┋ ☻ *settings*
╰━━━━∙⋆⋅⋆∙━ ─ • ─┉─⊷

 ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/7hqhsw.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363306168354073@newsletter',
                        newsletterName: 'Malvin King',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
// anmie menu 

cmd({
    pattern: "toolsmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🧚",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
          let dec = `〘 𝗧𝗢𝗢𝗟𝗦 𝗠𝗘𝗡𝗨 〙

╭────────────⪼
┋ ☻ *.ᴋɪss*
┋ ☻ *.ʜᴀɴᴅ*
┋ ☻ *.ʜᴀᴘᴘʏ*
┋ ☻ *.ʜᴇᴀʀᴛ*
┋ ☻ *.ᴀɴɢᴇʀ*
┋ ☻ *.sᴀᴅ*
┋ ☻ *.sʜʏ*
┋ ☻ *.ᴍᴏᴏɴ*
┋ ☻ *.ᴄᴏɴғᴜsᴇᴅ*
┋ ☻ *.ɴɪᴋᴀʟ*
╰━━━━∙⋆⋅⋆∙━ ─ • ─┉─⊷


 ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/3ua1n7.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363306168354073@newsletter',
                        newsletterName: 'Malvin King',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


// ai menu 

cmd({
    pattern: "aimenu",
    desc: "menu the bot",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `〘 𝗔𝗜 𝗠𝗘𝗡𝗨 〙

╭─────────────⪼
┋ ☻ *ᴀɪ* 
┋ ☻ *ɢᴘᴛ*
┋ ☻ *ᴍᴀʟᴠɪɴ*
┋ ☻ *ɢᴇᴍɪɴɪ*
┋ ☻ *ɢᴘᴛ3*
┋ ☻ *ᴍɪsᴛʀᴀᴀɪ*
┋ ☻ *ʟʟᴀᴍᴀ3*
┋ ☻ *ɢᴘᴛ4o*
┋ ☻ *ᴍᴀʟᴠɪɴᴀɪ*
┋ ☻ *ᴀɪɪᴍɢ*
┋ ☻ *ɢᴇɴᴇʀᴀᴛᴇɪᴍɢ*
╰━━━━∙⋆⋅⋆∙━ ─ • ─┉─⊷

 ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/7hqhsw.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363306168354073@newsletter',
                        newsletterName: 'Malvin King Tech',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

