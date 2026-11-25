import test from "node:test";
import assert from "node:assert/strict";
import { runDemo } from "../src/demo.js";

test("listeners run in the documented registration order and once fires once", () => {
  assert.deepEqual(runDemo(), [
    "prepended:first",
    "regular:first",
    "once:first",
    "prepended:second",
    "handled-error:sample event"
  ]);
});
