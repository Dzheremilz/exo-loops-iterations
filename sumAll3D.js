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

for (const elem of tab) {
  for (const elem2 of elem) {
    for (const elem3 of elem2) {
      x += elem3
    }
  }
}
console.log(x)