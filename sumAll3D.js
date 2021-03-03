let tab = [
  [
    [1, 7, 3],
    [11, 17, 7],
    [-3, -5],
    [5, 13],
  ],
  [
    [2, 4, 6, 8, 10],
    [1, 3, 5],
  ],
  [[0]],
  [[0], [1], [2], [1]],
]

console.log(tab.flat(2).reduce((p, c) => { return p + c }))

let x = 0

for (const elem of tab) {
  for (const elem2 of elem) {
    for (const elem3 of elem2) {
      x += elem3
    }
  }
}
console.log(x)

/* V2
let tab = [
  [
    [1, 7, 3],
    [11, 17, 7],
    [-3, -5],
    [5, 13],
  ],
  [
    [2, 4, 6, 8, 10],
    [1, 3, 5],
  ],
  [[0]],
  [[0], [1], [2], [1]],
]

let x = 0

for (let i = 0; i < tab.length; i++) {
  for (let j = 0; j < tab[i].length; j++) {
    for (let k = 0; k < tab[i][j].length; k++) {
      x += tab[i][j][k]
    }
  }
}

console.log(x)

*/

/* V3

let tab = [
  [
    [1, 7, 3],
    [11, 17, 7],
    [-3, -5],
    [5, 13],
  ],
  [
    [2, 4, 6, 8, 10],
    [1, 3, 5],
  ],
  [[0]],
  [[0], [1], [2], [1]],
]

let x = 0

for (let i = 0; i < tab.length; i++) {
  for (let j = 0; j < tab[i].length; j++) {
    x += tab[i][j].reduce((a, b) => { return a + b })
  }
}

*/