const fetch = require("node-fetch");
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  sleep,
  fetchJson
} = require("../functions");
const {
  cmd
} = require("../command");
cmd({
  'pattern': "pair",
  'alias': "pair",
  'desc': "Get a pairing code for a phone number",
  'category': "main",
  'filename': __filename
}, async (_0x3f368b, _0x1c1435, _0x2fe294, {
  reply: _0x393f08,
  body: _0x4cbc9c,
  isGroup: _0x586b42
}) => {
  try {
    await _0x3f368b.sendMessage(_0x2fe294.key.remoteJid || _0x2fe294.from, {
      'react': {
        'text': '⌛',
        'key': _0x2fe294.key
      }
    });
    if (_0x586b42) {
      return _0x3f368b.sendMessage(_0x2fe294.key.remoteJid || _0x2fe294.from, {
        'text': "*❌ Getting a pairing code is not allowed in groups!*\n\nPlease use this command in my inbox to get your pairing code."
      }, {
        'quoted': _0x2fe294
      });
    }
    const _0x3b2587 = _0x4cbc9c.split(" ")[0x1];
    if (!_0x3b2587 || !/^\d{10,15}$/.test(_0x3b2587)) {
      return _0x393f08("*❌ Invalid phone number format*.\n\nPlease enter a valid number with country code (.pair 263714757857).");
    }
    await _0x3f368b.sendMessage(_0x2fe294.key.remoteJid || _0x2fe294.from, {
      'react': {
        'text': '⏳',
        'key': _0x2fe294.key
      }
    });
    _0x393f08("Processing your request. Please wait...");
    const _0x13d51a = await fetch("https://malvin-pair-code-xzcb.onrender.com/pair?phone=" + encodeURIComponent(_0x3b2587));
    const _0x2e869c = await _0x13d51a.json();
    if (_0x2e869c.code) {
      const _0x25f740 = _0x2e869c.code;
      const _0xeea95a = "*⚡Pairing Code For Malvin Xd🗿*\n\n🪀 notification has been sent to your WhatsApp. Please check your phone and copy this code to pair it and get your *MALVIN XＤ* session id.\n\n*🔢 Pairing Code* : *" + _0x25f740 + "*\n\n> *_Copy it from below message 👇🏻_*";
      try {
        await _0x3f368b.sendMessage(_0x2fe294.key.remoteJid || _0x2fe294.from, {
          'image': {
            'url': "https://files.catbox.moe/y65ffs.jpg"
          },
          'caption': _0xeea95a
        }, {
          'quoted': _0x2fe294
        });
      } catch (_0x3ddd1f) {
        console.error("Error sending pairing code message with image:", _0x3ddd1f);
        _0x393f08("⚠️ Error sending pairing code message with image. Please try again.");
      }
      await _0x3f368b.sendMessage(_0x2fe294.key.remoteJid || _0x2fe294.from, {
        'text': _0x25f740
      }, {
        'quoted': _0x2fe294
      });
      await _0x3f368b.sendMessage(_0x2fe294.key.remoteJid || _0x2fe294.from, {
        'react': {
          'text': '⤵️',
          'key': _0x2fe294.key
        }
      });
    } else if (_0x2e869c.error) {
      _0x393f08("❌ Error: " + _0x2e869c.error);
    } else {
      _0x393f08("❌ Failed to retrieve pairing code. Please try again later.");
    }
  } catch (_0x43d09a) {
    console.error("Error processing pair command:", _0x43d09a);
    _0x393f08("❌ An error occurred: " + _0x43d09a.message);
  }
});
