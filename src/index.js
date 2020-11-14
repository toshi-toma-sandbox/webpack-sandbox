import { esm, f } from "./esm";
const { cjs } = require("./cjs");
import { ts } from "./typescript";

import "./index.css";
import "./style.css";

import avatar from "../avatar.jpg";

console.log("index.js", esm, f() , cjs, ts);

console.log(avatar);

const header = document.createElement("h1");
header.textContent = "Header";
document.body.appendChild(header);

const img = document.createElement("img");
img.src = avatar;
img.height = 200;
img.width = 200;

document.body.appendChild(img);