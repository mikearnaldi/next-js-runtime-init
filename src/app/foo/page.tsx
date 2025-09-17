import { MyService } from "@/services";
import { Hello } from "../component";

export default function Home() {
  serverRuntime.runSync(MyService.logHello);
  return (
    <>
      <div>Foo</div>
      <a href="/bar">to bar</a>
      <Hello />
    </>
  );
}
