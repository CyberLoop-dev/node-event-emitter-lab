import { EventEmitter } from "node:events";

export function runDemo() {
  const emitter = new EventEmitter();
  const trace = [];
  const regular = value => trace.push("regular:" + value);
  const audit = value => trace.push("prepended:" + value);
  emitter.on("notice", regular);
  emitter.prependListener("notice", audit);
  emitter.once("notice", value => trace.push("once:" + value));
  emitter.emit("notice", "first");
  emitter.off("notice", regular);
  emitter.emit("notice", "second");
  emitter.on("error", error => trace.push("handled-error:" + error.message));
  emitter.emit("error", new Error("sample event"));
  return trace;
}
