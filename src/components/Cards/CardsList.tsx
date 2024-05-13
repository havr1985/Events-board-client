import { useAllEventsQuery } from "@/services/api/eventsApi"
import { CardItem } from "./CardItem";


export const CardsList = () => {
    const { data  } = useAllEventsQuery();
    console.log(data)
  return (
      
          <ul className=" flex justify-center flex-col gap-3 md:flex-row md:flex-wrap xl:gap-5">
              {data?.map((item) => (
                  <li key={item._id}>
                      <CardItem title={item.title} description={item.description} id={item._id} />
                  </li>
              ))}
          </ul>
          
   
  )
}
