import { CardsList } from "@/components/Cards/CardsList"
import { Container } from "@/components/Container"


const EventsPage = () => {
  return (
    <main className=" bg-bg-prim h-full">
      <Container>
        <div className=" w-full">
          <CardsList />
        </div>
      </Container>
    </main>
  );
}

export default EventsPage