import { esm, f } from "./esm";
const { cjs } = require("./cjs");
import { ts } from "./typescript";

import "./index.css";
import "./style.css";

console.log("index.js", esm, f() , cjs, ts);