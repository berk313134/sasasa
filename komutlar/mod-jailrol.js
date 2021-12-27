const Discord = require('discord.js')
const ayarlar = require("../ayarlar.json")
const { Database } = require("quickmongo");
const db = new Database(ayarlar.mongourl);


exports.run = async(client, message, args) => {

var başarılı = ['**İŞTE BU!** <a:like:819837331737149461>', '**SÜPER!** <a:like:819837331737149461>', '**NASIL YAPTIN BUNU?!** <a:like:819837331737149461>', '**MÜKEMMEL!** <a:like:819837331737149461>', '**SEVDİM BUNU!** <a:like:819837331737149461>', '**ŞİMDİ OLDU!** <a:like:819837331737149461>'];
   var x = başarılı[Math.floor(Math.random() * başarılı.length)];

   var başarısız = ['**TÜH!** <a:nope:819837486741192784>', '**OLMADI BU!** <a:nope:819837486741192784>', '**HAY AKSİ!** <a:nope:819837486741192784>', '**HADİ ORADAN!** <a:nope:819837486741192784>', '**OLMADI YA!** <a:nope:819837486741192784>', '**BÖYLE OLMAZ?!** <a:nope:819837486741192784>', '**HADİ YA!** <a:nope:819837486741192784>'];
   var x2 = başarısız[Math.floor(Math.random() * başarısız.length)];
  
if (!message.member.hasPermission('MANAGE_GUILD')) return message.reply(`**u!jail-rol ayarla/sıfırla** isimli komutu kullanabilmek için \`SUNUCUYU YÖNET\` yetkisine sahip olman gerekiyor.`)
if (!args[0]) return message.reply(`Sistemi kullanabilmek için, u!jail-rol ayarla/sıfırla @rol yazmalısın.`)
   
  
  if (args[0] == 'ayarla') {
  
  let rol = message.mentions.roles.first() || message.guild.roles.find(c => c.name === args[1].join(' '))
  if (!rol) return message.channel.send(x2 + ` Bir rol etiketle.`)
  
  await db.set(`jailrol_${message.guild.id}`, rol.id)
  message.channel.send(x + ` Jail rolü ${rol} olarak ayarlandı.`)
  } 
  

  if (args[0] == 'sıfırla') {
    await db.delete(`jailrol_${message.guild.id}`)
    message.channel.send(x + ` Jail rolü başarıyla sıfırlandı.`)
  }
  
  
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['jailrol'],
 permLevel: 0
};

exports.help = {
 name: 'jail-rol',
 description: 'Birisi jaile atılınca hangi role sahip olacağını ayarlarsınız.',
 usage: 'jail-rol ayarla/sıfırla @rol',
  kategori: "jail"
};