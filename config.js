import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['14694523233', 'Novi-MD', true],
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '14694523233'
global.packname = '© Sticker by'
global.author = 'NOVI-DWI'
global.namebot = 'NOVI botz'
global.wm = '© NOVI-DWI'
global.stickpack = '© NOVI-DWI'
global.stickauth = 'NOVI-MD'
global.fotonya = 'https://aemt.me/file/2YMdsOwiE2jV.jpg'
global.fotonya2 = `https://aemt.me/file/1zJzovDRFsvB.jpg`
// Link Sosmed
global.sig = 'https://instagram.com/Novi_Noviyyy'
global.syt = 'https://youtube.com/@Novi_Novy'
global.sgh = 'https://github.com/Novi-MD'
global.sgc = 'https://chat.whatsapp.com/GVhTBpfq5Kx4WnjMltL4hg'
// Donasi

global.psaweria = '-'
global.ptrakterr = '-'
global.povo = '089658675858'
// Info Wait
global.wait = 'Loading mohon di tunggu ya Cukg...'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.lol = 'SGWN'
global.rose = 'Rs-putangina'
global.xyro = '5dRkJDWvIG'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
    popcat : 'https://api.popcat.xyz'
}
/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "5dRkJDWvIG",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
