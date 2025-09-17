"use client";

import { MyServiceClientOnly } from "@/services";

export function Hello() {
  clientRuntime.runSync(MyServiceClientOnly.logHello);
  return <div>Hello</div>;
}
