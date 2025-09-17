import { MyService } from "@/services";
import { Hello } from "./component";

export default function Home() {
  serverRuntime.runSync(MyService.logHello);
  return (
    <>
      <div>home</div>
      <a href="/foo">to foo</a>
      <Hello />
    </>
  );
}
