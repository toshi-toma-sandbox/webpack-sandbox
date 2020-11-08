import { esm, f } from "./esm";
const { cjs } = require("./cjs");
import { ts } from "./typescript";

console.log("index.js", esm, f() , cjs, ts);