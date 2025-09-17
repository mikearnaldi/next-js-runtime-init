import { client, server } from "@/services";
import { ManagedRuntime } from "effect";

const initRuntime = () => {
  const serverRuntime = ManagedRuntime.make(server);
  const clientRuntime = ManagedRuntime.make(client, serverRuntime.memoMap);
  // @ts-expect-error
  globalThis.serverRuntime = serverRuntime;
  // @ts-expect-error
  globalThis.clientRuntime = clientRuntime;
  return [serverRuntime, clientRuntime] as const;
};

declare global {
  const serverRuntime: ReturnType<typeof initRuntime>[0];
  const clientRuntime: ReturnType<typeof initRuntime>[1];
}

export function register() {
  const runtime = initRuntime();

  process.on("SIGTERM", () => {
    runtime[0].dispose();
    runtime[1].dispose();
  });
  process.on("SIGINT", () => {
    runtime[0].dispose();
    runtime[1].dispose();
  });
}
