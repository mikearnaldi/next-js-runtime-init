import { MyService } from "@/runtime";

export default function Home() {
  runSync(MyService.logHello);
  return (
    <>
      <div>Foo</div>
      <a href="/bar">to bar</a>
    </>
  );
}
