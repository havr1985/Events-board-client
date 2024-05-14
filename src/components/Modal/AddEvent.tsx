import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { AddEventForm } from "./AddEventForm";

type Props = {
  id: string;
  title: string;
};

export const AddEvent = ({ id, title }: Props) => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className=" text-prim-green hover:text-sec-green text-xl font-bold">
          Register
        </div>
      </DialogTrigger>
      <DialogContent className=" text-xl">
        {title}
        <AddEventForm id={id} />
      </DialogContent>
    </Dialog>
  );
};
