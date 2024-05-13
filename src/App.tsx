import { lazy } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";

const Events = lazy(() => import("@/pages/EventsPage"));
const Event = lazy(() => import("@/pages/EventPage"));
const MyEvent = lazy(() => import("@/pages/MyEventsPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Events />} />
        <Route path="/myevents" element={<MyEvent />} />
        <Route path="event/:id" element={<Event />} />
      </Route>
    </Routes>
  );
}

export default App;
