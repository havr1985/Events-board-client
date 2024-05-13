import { useGetEventByIdQuery } from "@/services/api/eventsApi";
import { useParams } from "react-router-dom";

import { Separator } from "../ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { AddEvent } from "../Modal/AddEvent";

export const Event = () => {
  const { id } = useParams();

    const { data } = useGetEventByIdQuery({ id });
    

  return (
    <div className=" p-6 bg-white rounded-xl flex flex-col gap-5">
      <h2 className=" text-center text-3xl font-bold">{data?.result.title}</h2>
      <p className=" text-xl">
        <span className=" text-prim-green">Organizer: </span>
        {data?.result.organizer}
      </p>
      <p className=" text-xl">
        <span className=" text-prim-green">Description: </span>
        {data?.result.description}
      </p>
      <div className=" flex justify-between items-center">
        <p className=" text-xl font-bold">
          <span className=" text-prim-green">Start: </span>
          {data?.result.date}
        </p>
        {id && data && <AddEvent id={id} title={data?.result.title} />}
      </div>
      <Separator />
      <div className=" text-xl font-bold">
        REGISTERED USER: {data?.subUser.length}
      </div>
      {data?.subUser.length && (
        <ul className=" flex justify-center flex-wrap gap-x-5">
          {data.subUser.map((item) => (
            <Popover key={item._id}>
              <PopoverTrigger>
                <li key={item._id} className=" p-3 bg-sec-green rounded-lg">
                  <p className=" font-bold">{item.name}</p>
                  <p>{item.email}</p>
                </li>
              </PopoverTrigger>
              <PopoverContent>
                <div className=" flex flex-col gap-3">
                  <p className=" text-xl font-bold text-center">{item.name}</p>
                  <p>Born: {item.born}</p>
                  <p>Email:{item.email}</p>
                </div>
              </PopoverContent>
            </Popover>
          ))}
        </ul>
      )}
    </div>
  );
};
