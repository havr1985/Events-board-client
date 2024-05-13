import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import { useState } from "react";
import { useInterval } from "usehooks-ts";


type Props = {
    className?: string;
}

export const Time = ({ className }: Props) => {
    const [time, setTime] = useState("");
    useInterval(() => {
        setTime(dayjs().format("HH:mm | MMM D"));
    }, 1000)
  return (
      <div className={cn("xl:text-lg", className)}>{time}</div>
  )
}