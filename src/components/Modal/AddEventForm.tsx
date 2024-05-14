import { AddFields, AddValSchema } from "@/type/idex";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "../ui/button";
import { useAddUserEventMutation } from "@/services/api/eventsApi";
import toast from "react-hot-toast";
import { useEffect } from "react";

type Props = {
  id: string;
};

export const AddEventForm = ({ id }: Props) => {
  const [add, { isSuccess, isError, data }] = useAddUserEventMutation();

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
  const onSubmit: SubmitHandler<AddFields> = async (data) => {
    await add(data);
    reset();
  };

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("user_id", data?._id || "");
      toast.success("You have successfully registered for this event!");
    }
    if (isError) {
      toast.error("You are already registered for this event!");
    }
  }, [isError, isSuccess, data?._id]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-3">
        <div className=" flex flex-col gap-2">
          <Label htmlFor="name">Full Name</Label>
          <Input {...register("name")} id="name" />
          <p className=" text-sm text-red-500">{errors.name?.message}</p>
        </div>
        <div className=" flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input {...register("email")} id="email" />
          <p className=" text-sm text-red-500">{errors.email?.message}</p>
        </div>
        <div className=" flex flex-col gap-2">
          <Label htmlFor="born">Date of birth</Label>
          <Input {...register("born")} id="born" placeholder="YY.MM.DD" />
          <p className=" text-sm text-red-500">{errors.born?.message}</p>
        </div>
        <div>
          {" "}
          Where did you hear about this event?
          <RadioGroup
            {...register("heard")}
            onValueChange={(selected) => setValue("heard", selected)}
            defaultValue="social"
            className=" mt-4 flex gap-x-4"
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
        <Button type="submit" variant="secondary" className=" mt-4">
          Submit
        </Button>
      </form>
    </>
  );
};
