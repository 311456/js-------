// 导入方式一：
import { name, age } from "./foo.js";
// 方式二：
import { name2 as fName2, age2 as fAge } from "./index.js";
// 方式三;
import * as Fmodule from "./index.js";

console.log("index---name:", name);
console.log("index---age:", age);
