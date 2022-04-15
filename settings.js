const fs = require('fs')
const chalk = require('chalk')

//===> FREE API
global.APIs = {
	ryuu: 'https://api-ryubotz.herokuapp.com',
}

global.APIKeys = {
	'https://api-ryubotz.herokuapp.com': 'RyuBotz',
}

//===> UBAH DISINI
global.namaowner = '➺𝄟≛⃝𝐌𝐈𝐀𝐍💌⃝⃝❥͜͡🏵️' //Ganti Jadi Namamu
global.owner = ['923430436852','923430436852'] //Kalo Mau Lebih Tambahin Aja
global.nomerowner = '923430436852' //Owner Utama Istilahnya
global.namabot = 'RyuBotz MD' //Ganti Jadi Nama Botmu
global.packname = '© ➺𝄟≛⃝𝐌𝐈𝐀𝐍💌⃝⃝❥͜͡🏵️' //Sticker Weem
global.author = 'Ryubotz By Mian Team' //Sticker Weem
global.webme = 'https://instagram.com/mian_savage_boy?utm_medium=copy_link'
global.sessionName = 'session'
global.bg_welcome = 'https://telegra.ph/file/528b594d5d91c08482515.jpg' //Max 30kb Agar Tidak Delay
global.youtube = 'lol😀'
global.github = 'lol😁😈'
global.instagram = 'https://instagram.com/mian_savage_boy?utm_medium=copy_link'

//===> BACKGROUND SETIAP MENU
global.bg1 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.bg2 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=monarch-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.bg3 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=yolo-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.bg4 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fun-run-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','/','#','.']
global.sp = '⭔'

//===> EDIT SESUAI KEMAUANMU
global.mess = {
admin: '*LU ADMIN? 🤨*',
botAdmin: '*BOT BUKAN ADMIN 😔*',
owner: '*LU BUKAN OWNER GW 😠*',
group: '*KHUSUS GROUP 😏*',
private: '*KHUSUS PRIVATE CHAT*',
bot: '*KHUSUS PENGGUNA NOMER BOT*',
wait: '*SABAR SEDANG DI PROSES ...*',
done: '*DONE NGAB 🤗*',
}
global.thumb = fs.readFileSync('./media/ryuu.jpg')
    
//===> INI GAUSAH DIUBAH
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
