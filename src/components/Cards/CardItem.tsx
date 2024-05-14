import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { AddEvent } from "../Modal/AddEvent";

type Props = {
  id: string;
  title: string;
  description: string;
};

export const CardItem = ({ id, title, description }: Props) => {
  return (
    <div
      className=" flex flex-col gap-2 border-2 p-2 bg-white rounded-xl md:w-[230px] md:h-[200px] md:justify-between 
      xl:w-[280px] xl:h-[230px] xl:p-4 "
    >
      <h2 className=" text-center text-sm font-bold md:text-base xl:text-lg">
        {title}
      </h2>
      <p className=" text-xs text-slate-500 md:text-base">{description}</p>
      <div className=" flex justify-between">
        <Button>
          <Link to={`/event/${id}`}>View</Link>
        </Button>
        <AddEvent id={id} title={title} />
      </div>
    </div>
  );
};
