import { useAllEventsQuery } from "@/services/api/eventsApi"
import { CardItem } from "./CardItem";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";



export const CardsList = () => {
    const [page, setPage] = useState(1);
    const { data, isLoading } = useAllEventsQuery({ page });

    
    const clickNext = () => {
        setPage(page + 1);
    }

    const clickPrev = () => {
        setPage(page - 1)
    }
    
   

    
    return (
        <div className=" flex flex-col items-center gap-8">
            {isLoading && <div>Loading...</div>}
        <ul className=" flex justify-center flex-col gap-3 md:flex-row md:flex-wrap xl:gap-5">
          {data?.result?.map((item) => (
            <li key={item._id}>
              <CardItem
                title={item.title}
                description={item.description}
                id={item._id}
              />
            </li>
          ))}
        </ul>
        <div className=" flex gap-x-5 text-center mb-5">
          <button onClick={clickPrev} disabled={page - 1 <= 0 && true} className=" flex text-2xl items-center font-bold">
            <ChevronLeft className=" w-8 h-8" />
            Prev
          </button>
          <p className=" bg-prim-green py-1 px-3 rounded-full font-bold">{page}</p>
          <button onClick={clickNext} disabled={data?.totalPage !== undefined && page >= data.totalPage ? true : false} className=" flex text-2xl items-center font-bold">
            Next
            <ChevronRight className=" w-8 h-8" />
          </button>
        </div>
      </div>
    );
}
