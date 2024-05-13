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
        <div>Register</div>
      </DialogTrigger>
      <DialogContent>
        {title}
        <AddEventForm id={id} />
      </DialogContent>
    </Dialog>
  );
};
