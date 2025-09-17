import { Effect, Layer } from "effect";

export class MyService extends Effect.Service<MyService>()("MyService", {
  scoped: Effect.gen(function* () {
    console.log("Service initialized");
    yield* Effect.addFinalizer(() => Effect.sync(() => console.log("disposed")))
    return {
      logHello: Effect.sync(() => console.log("Hello!!!")),
    };
  }),
  accessors: true,
}) {}

export const layer = Layer.mergeAll(MyService.Default)