let tab = [
  [1, 2, 3],
  [4, -5, 7],
  [-3, -6],
  [10, -13],
]
let x = 0
for (const elem of tab) {
  elem.forEach((elem2) => {
    x += elem2
  })
}
console.log(x)

let y = 0
for (let i = 0; i < tab.length; i++) {
  y += tab[i].reduce((a, b) => {
    return a + b
  })
}
console.log(y)