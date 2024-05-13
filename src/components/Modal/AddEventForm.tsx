import { AddFields, AddValSchema } from "@/type/idex";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "../ui/button";
import { useAddUserEventMutation } from "@/services/api/eventsApi";

type Props = {
  id: string;
};

export const AddEventForm = ({ id }: Props) => {
  const [add] = useAddUserEventMutation();
  const {
    register,
    reset,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<AddFields>({
    mode: "onBlur",
    defaultValues: {
      id: id,
      name: "",
      email: "",
      born: "",
      heard: "",
    },
    resolver: zodResolver(AddValSchema),
  });
  const onSubmit: SubmitHandler<AddFields> = (data) => {
    console.log(data);
    add(data);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input {...register("name")} id="name" />
        <p>{errors.name?.message}</p>
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input {...register("email")} id="email" />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <Label htmlFor="born">Date of birth</Label>
        <Input {...register("born")} id="born" />
        <p>{errors.born?.message}</p>
      </div>
      <div>
        <RadioGroup
          {...register("heard")}
          onValueChange={(selected) => setValue("heard", selected)}
          defaultValue="social"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="social" id="social" />
            <Label htmlFor="social">Social Media</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="friends" id="friends" />
            <Label htmlFor="friends">Friends</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="myself" id="myself" />
            <Label htmlFor="myself">Found myself</Label>
          </div>
        </RadioGroup>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};
