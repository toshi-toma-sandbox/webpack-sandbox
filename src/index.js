import { esm, f } from "./esm";
const { cjs } = require("./cjs");
import { ts } from "./typescript";

import "./index.css";
import "./style.css";

import avatar from "../avatar.jpg";

console.log("index.js", esm, f() , cjs, ts);

console.log(avatar);