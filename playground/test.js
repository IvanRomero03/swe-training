import { LeetCode } from "leetcode-query";

const leetcode = new LeetCode();
const user = await leetcode.user("IvanRomero03");
console.log(user);
const problems = await leetcode.problem("two-sum");