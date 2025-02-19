function sumFor(list: number[]): number {
  let sum = 0;
  for (let i = 0; list.length > i; i++) {
    sum += list[i];
  }
  return sum;
}

function sumWhile(list: number[]): number {
  let sum = 0;
  let i = 0;
  while (list.length > i) {
    sum += list[i];
    i++;
  }
  return sum;
}

function sumRecursion(list: number[]): number {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1));
}

function sumTheFunctionalWay(list: number[]): number {
  return list.reduce((total, amount) => total + amount);
}

console.log(sumFor([1, 2, 3, 4]));
console.log(sumWhile([1, 2, 3, 4]));
console.log(sumRecursion([1, 2, 3, 4]));
console.log(sumTheFunctionalWay([1, 2, 3, 4]));
