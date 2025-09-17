import { Effect, Layer } from "effect";

export class MyService extends Effect.Service<MyService>()("MyService", {
  scoped: Effect.gen(function* () {
    console.log("Service initialized");
    yield* Effect.addFinalizer(() =>
      Effect.sync(() => console.log("disposed"))
    );
    return {
      logHello: Effect.sync(() => console.log("Hello!!!")),
    };
  }),
  accessors: true,
}) {}

export class MyServiceClientOnly extends Effect.Service<MyServiceClientOnly>()(
  "MyServiceClientOnly",
  {
    scoped: Effect.gen(function* () {
      console.log("MyServiceClientOnly initialized");
      yield* Effect.addFinalizer(() =>
        Effect.sync(() => console.log("disposed client"))
      );
      return {
        logHello: Effect.sync(() => console.log("Hello client!!!")),
      };
    }),
    accessors: true,
  }
) {}

export const server = Layer.mergeAll(MyService.Default);

export const client = Layer.mergeAll(
  MyService.Default,
  MyServiceClientOnly.Default
);
