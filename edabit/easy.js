// 1'den girilen sayiya kadar olan sayilarin toplamini veren fonksiyon

let girilenSayi = 4
console.log(Array(girilenSayi).fill(1).map((eleman,indis)=> eleman + indis).reduce((sum,eleman)=> sum+eleman,0))
