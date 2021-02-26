for (let i = 101; i >= 1; i = i - 2) {
  console.log(i)
}

console.log('.....')

let j = 101

while (j >= 1) {
  if (j % 2 === 1) {
    console.log(j)
  }
  j--
}

console.log('.....')

let k = 101

do {
  if (k % 2 === 0) {
    continue
  }
  console.log(k)
  k -= 2
} while (k >= 1)