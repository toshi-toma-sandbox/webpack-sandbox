import { esm, f } from "./esm";
const { cjs } = require("./cjs");

console.log("index.js", esm, f() , cjs);