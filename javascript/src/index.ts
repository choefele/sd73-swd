// type Data = {
//   index: number;
//   s: string;
// }[];

// const data: Data = [
//   { index: 0, s: "a" },
//   { index: 1, s: "b" },
//   { index: 2, s: "c" },
// ];

// data.toReversed().forEach((d) => console.log(d.s));

// console.log("---");

// for (const d of data) {
//   console.log(d);
// }

// console.log("---");

// for (let i = 0; i < data.length; i++) {
//   console.log(data[i]);
// }

// console.log("---");

// const { index, s } = data[1] ?? { index: 0, s: "" };
// console.log(index, s);

console.log("---");

// const numbers: number[] = [1, 3, 5, 8];
// const numbers: number[] = [1, 3, 5, 8, 9];
// const numbers: number[] = [];
// const numbers: number[] = [2];

// const sortedNumbers = numbers.toSorted();
// let median: number;
// if (numbers.length === 0) {
//   median = 0;
// } else if (sortedNumbers.length % 2 === 0) {
//   const index = sortedNumbers.length / 2;
//   median = ((sortedNumbers[index] ?? 0) + (sortedNumbers[index - 1] ?? 0)) / 2;
// } else {
//   const index = Math.floor(sortedNumbers.length / 2);
//   median = sortedNumbers[index] ?? 0;
// }

// console.log(median);

// function medianArray(values?: number[]): number | undefined {
//   if (!values || values.length === 0) return undefined;

//   const sorted = [...values].sort((a, b) => a - b);
//   const mid = Math.floor(sorted.length / 2);

//   return sorted.length % 2 === 1
//     ? sorted[mid]
//     : (sorted[mid - 1] + sorted[mid]) / 2;
// }
