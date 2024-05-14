import { useGetUserEventsQuery } from "@/services/api/eventsApi";
import { Loader } from "../Loader";

export const MyEventsList = () => {
  const id = localStorage.getItem("user_id");

  const { data, isLoading, isError } = useGetUserEventsQuery({ id });

  return (
    <div>
      {isLoading && <Loader />}
      {isError && (
        <div className=" text-center text-3xl font-bold">
          You have not registered for any event!
        </div>
      )}
      <ul className=" flex justify-center flex-col gap-3 md:flex-row md:flex-wrap xl:gap-5">
        {data?.map((item) => (
          <li
            key={item._id}
            className=" flex flex-col gap-2 border-2 p-2 bg-white rounded-xl md:w-[230px] md:h-[200px] md:justify-between 
      xl:w-[280px] xl:h-[230px] xl:p-4 "
          >
            <h2 className=" text-center text-sm font-bold md:text-base xl:text-lg">
              {item.title}
            </h2>
            <p className=" text-xs text-slate-500 md:text-base">
              {item.description}
            </p>
            <p className=" text-xs text-slate-500 md:text-base">
              <span className=" text-prim-green">Orzanized: </span>
              {item.organizer}
            </p>
            <p className=" text-xs text-slate-500 md:text-base">
              <span className=" text-prim-green">Date: </span>
              {item.date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
