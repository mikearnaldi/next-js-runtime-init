import { MyService } from "@/runtime";

export default function Home() {
  runSync(MyService.logHello);
  return (
    <>
      <div>Bar</div>
      <a href="/">to home</a>
    </>
  );
}
