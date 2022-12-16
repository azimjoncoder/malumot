function year (a,b){
    let result = b - a
    return result 
}
var ism = prompt('ism?')
var fam = prompt('familya?')

let tugYil = prompt("tug'ilgan yilingiz yozing")
let hozYil = prompt('hozirgi yilni yozing')
console.log(` ${fam} ${ism}, sizning yoshingiz ${year ( tugYil, hozYil   )} `)


