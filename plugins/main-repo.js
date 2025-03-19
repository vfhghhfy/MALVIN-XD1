

const fetch = require('node-fetch');
const config = require('../config');    
const { cmd } = require('../command');

cmd({
    pattern: "repo",
    alias: ["sc", "script"],
    desc: "Fetch information about a GitHub repository.",
    react: "❄️",
    category: "info",
    filename: __filename,
},
async (conn, mek, m, { from, reply }) => {
    const githubRepoURL = 'https://github.com/kingmalvn/MALVIN-XD';

    try {
        // Extract username and repo name from the URL
        const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);

        // Fetch repository details using GitHub API
        const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
        
        if (!response.ok) {
            throw new Error(`GitHub API request failed with status ${response.status}`);
        }

        const repoData = await response.json();

        // Format the repository information
        const formattedInfo = `
  *ʜᴇʟʟᴏ ᴛʜᴇʀᴇ, ᴍᴀʟᴠɪɴ xᴅ ᴜsᴇʀ! 👋* 

*𝑇𝒉𝑎𝑛𝑘𝑠 𝑓𝑜𝑟 𝑢𝑠𝑖𝑛𝑔 ᴍᴀʟᴠɪɴ xᴅ ᴠ3🌹🫶* 
╭──────────────━⊷
┊ 🚀 ᴍᴀʟᴠɪɴ xᴅ ʀᴇᴘᴏ ɪɴғᴏ 🚀
╰──────────────━⊷
╭──────────────━⊷
┇🤖 *ɴᴀᴍᴇ:* ${repoData.name}
┇⭐ *ᴛᴏᴛᴀʟ sᴛᴀʀs:* ${repoData.stargazers_count}
┇👥️ *ᴅᴀɪʟʏ ᴜsᴇʀs:* ${repoData.forks_count}
┇👀 *ᴡᴀᴛᴄʜᴇʀs:* 2
┇👤 *ᴏᴡɴᴇʀ:* sɪʀ ${repoData.owner.login}
┇🪀 *ᴅᴇsᴄʀɪᴘᴛɪᴏɴ:* ${repoData.description || 'No description'}
╰──────────────━⊷

> ᴅᴏɴ'ᴛ ғᴏʀɢᴇᴛ ᴛᴏ sᴛᴀʀ & ғᴏʀᴋ ᴛʜᴇ ʀᴇᴘᴏ🌟🍴

┋ ʀᴇᴘᴏ ʟɪɴᴋ: https://tinyurl.com/2yeb2ehy
╰──────────────━⊷

> sᴛᴀʏ ᴄᴏɴɴᴇᴄᴛᴇᴅ ғᴏʀ ғᴀɴᴛᴀsᴛɪᴄ ᴜᴘᴅᴀᴛᴇs!`;

        // Send an image with the formatted info as a caption and context info
        await conn.sendMessage(from, {
            image: { url: `https://files.catbox.moe/y65ffs.jpg` },
            caption: formattedInfo,
            contextInfo: { 
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363306168354073@newsletter',
                        newsletterName: 'ᴍᴀʟᴠɪɴ xᴅ ʀᴇᴘᴏ',
                        serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (error) {
        console.error("Error in repo command:", error);
        reply("Sorry, something went wrong while fetching the repository information. Please try again later.");
    }
});
