for (let i = 11; i < 22; i++) {
   console.log(i);
}

for (let i = 21; i > 11; i--) {
    console.log(i);
}

const Friends = {
    1:"Linards",
    2:"Ričards",
    3:"Arturs",
    4:"Klāvs",
    5:"Markuss"
}

console.log(Friends[3])

let amount = 0

for (i = 1; i < 6; i++) {
  amount = i
  console.log(amount,Friends[i])
}