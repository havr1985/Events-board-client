import { Container } from "@/components/Container";
import { Event } from "@/components/Event/Event";

const EventPage = () => {
  return (
    <main className=" bg-bg-prim h-screen">
      <Container>
        <div>
          <Event />
        </div>
      </Container>
    </main>
  );
};

export default EventPage;
