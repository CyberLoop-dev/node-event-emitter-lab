import { runDemo } from "./demo.js";

console.log("EventEmitter listener trace");
for (const [index, line] of runDemo().entries()) {
  console.log(String(index + 1).padStart(2, "0") + "  " + line);
}
