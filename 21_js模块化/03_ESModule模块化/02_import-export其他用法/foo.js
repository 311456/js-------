// 方式一：
export const name = "hxxx";
export const age = 88;

// 方式二：
const name2 = "name1";
const age2 = 12;
export { name2, age2 };

// 方式三：
export { name2 as fName2, age as fAge };
