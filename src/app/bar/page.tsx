import { MyService } from "@/services";
import { Hello } from "../component";

export default function Home() {
  serverRuntime.runSync(MyService.logHello);
  return (
    <>
      <div>Bar</div>
      <a href="/">to home</a>
      <Hello />
    </>
  );
}
