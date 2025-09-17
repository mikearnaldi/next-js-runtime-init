import { layer } from "@/runtime";
import { ManagedRuntime } from "effect";

const initRuntime = () => {
  const runtime = ManagedRuntime.make(layer);
  // @ts-expect-error
  global.runSync = runtime.runSync;
  // @ts-expect-error
  global.runPromise = runtime.runPromise;
  return runtime
};

declare global {
  const runPromise: ReturnType<typeof initRuntime>["runPromise"];
  const runSync: ReturnType<typeof initRuntime>["runSync"];
}

export function register() {
  const runtime = initRuntime();

  process.on("SIGTERM", () => runtime.dispose())
  process.on("SIGINT", () => runtime.dispose())
}
