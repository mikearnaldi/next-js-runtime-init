import { client } from "@/services";
import { ManagedRuntime } from "effect";

// @ts-expect-error
global.clientRuntime = ManagedRuntime.make(client);
