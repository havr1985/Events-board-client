import { Container } from "@/components/Container";
import { MyEventsList } from "@/components/MyEvents/MyEventsList";

export default function MyEventsPage() {
  return (
    <main className=" bg-bg-prim h-screen">
      <Container>
        <div className=" w-full">
          <MyEventsList />
        </div>
      </Container>
    </main>
  );
}
