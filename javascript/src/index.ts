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

// function createH1Element() {
//   const h1 = document.createElement("h1");
//   h1.textContent = "Hello world!";
//   h1.style.color = "red";
//   document.body.appendChild(h1);
// }

// const createH1btn = document.getElementById("h1btn");
// createH1btn?.addEventListener("click", createH1Element);
// console.log("h1btn");
// console.log(createH1btn);

// fetch("https://fakestoreapi.com/products")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// (async () => {
//   const data = await fetch("https://fakestoreapi.com/products");
//   const json = await data.json();
//   console.log(json);
// })();

type Product = {
  title: string;
};

async function fetchData() {
  const data = await fetch("https://fakestoreapi.com/products");
  if (data.ok) {
    const products: Product[] = await data.json();
    products
      .map((product) => {
        const h2 = document.createElement("h2");
        h2.textContent = product.title;
        return h2;
      })
      .forEach((element) => document.body.appendChild(element));
  } else {
    const p = document.createElement("p");
    p.textContent = `${data.status} - ${data.statusText}`;
    p.style.color = "red";
    document.body.appendChild(p);
  }
}

const createH1btn = document.getElementById("h1btn");
createH1btn?.addEventListener("click", fetchData);

// ---
type Person = {
  name: string;
  age: number;
};
type Data = {
  persons: Person[];
};

const data: Data = {
  persons: [
    { name: "C", age: 32 },
    { name: "D", age: 16 },
  ],
};

localStorage.setItem("data", JSON.stringify(data));
const readData: Data = JSON.parse(localStorage.getItem("data") || "");
console.log(readData);

const name = readData.persons[0]?.name;
console.log(name);
