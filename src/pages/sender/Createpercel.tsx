import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetMeQuery } from "@/redux/feature/auth/auth.api";
import { useCreatePercelMutation } from "@/redux/feature/percel/percel.api";

import { zodResolver } from "@hookform/resolvers/zod";

import { ChevronDown } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const parcelSchema = z.object({
  trakinId: z
    .string()
    .regex(/^TRK-\d{4}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])-[A-Za-z0-9]{6}$/, {
      message:
        "trackingId must be in format: TRK-YYYYMMDD-XXXXXX (e.g. TRK-20230809-1A2B3C)",
    }),
  type: z.string(),
  weight: z.number(),

  reciver: z.string(),
  pickUpAddress: z.string(),
  deliveryAddress: z.string(),
  fee: z.number(),
  status: z.string(),
  deliveriDate: z.date(),
});

export default function CreateParcel() {
  const [startOpen, setStartOpen] = React.useState(false);
  const { data: userData, isLoading, error } = useGetMeQuery(undefined);

  const [createPercel] = useCreatePercelMutation(undefined);
  console.log(isLoading, error);
  console.log(userData?.data);
  const form = useForm<z.infer<typeof parcelSchema>>({
    resolver: zodResolver(parcelSchema),
    defaultValues: {
      trakinId: "",
      type: "",
      weight: 0,
      reciver: "",
      pickUpAddress: "",
      deliveryAddress: "",
      fee: 150,
      status: "REQUESTED",
      deliveriDate: new Date(),
    },
  });

  const handleCreateParcel = async (data: z.infer<typeof parcelSchema>) => {
    const payload = {
      ...data,
      sender: userData?.data?._id,
      deliveriDate: data.deliveriDate,
      status: "REQUESTED",
      trackingEvents: [
        {
          location: `${userData?.data?.role}'s `,
          updatedBy: userData?.data?._id,
          status: "REQUESTED",
          note: `Parcel created by ${userData?.data?.role}`,
        },
      ],
    };

    try {
      const result = await createPercel(payload).unwrap();
      console.log(result);

      if (result.statusCode === 201) {
        toast.success("Parcel created successfully!");
      }

      form.reset();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-lg space-y-4">
        <h2 className="text-4xl font-serif capitalize font-medium text-center">
          Create Parcel
        </h2>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleCreateParcel)}
            className="space-y-4"
          >
            {/* Tracking ID */}
            <FormField
              control={form.control}
              name="trakinId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tracking ID</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="format: TRK-YYYYMMDD-XXXXXX"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Type */}
            <div className="flex flex-col md:flex-row gap-4 w-full ">
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="document">document</SelectItem>
                          <SelectItem value="box">box</SelectItem>
                          <SelectItem value="fragile">fragile</SelectItem>
                          <SelectItem value="other">other</SelectItem>
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="weight"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Weight</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Weight"
                          {...field}
                          value={field.value ?? ""}
                          onChange={(e) =>
                            field.onChange(
                              e.target.value === ""
                                ? ""
                                : Number(e.target.value)
                            )
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Start Date */}
            <FormField
              control={form.control}
              name="deliveriDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Delevery Date</FormLabel>
                  <Popover open={startOpen} onOpenChange={setStartOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-between font-normal"
                      >
                        {field.value
                          ? new Date(field.value).toLocaleDateString()
                          : "Select start date"}
                        <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        disabled={(date) =>
                          date <
                          new Date(new Date().setDate(new Date().getDate() - 1))
                        }
                        onSelect={(date) => {
                          if (date) field.onChange(date);
                          setStartOpen(false);
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="fee"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fee</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Fee"
                          {...field}
                          value={field.value ?? ""}
                          onChange={(e) =>
                            field.onChange(
                              e.target.value === ""
                                ? ""
                                : Number(e.target.value)
                            )
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Receiver */}
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="reciver"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Receiver</FormLabel>
                      <FormControl>
                        <Input placeholder="Receiver ID" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Pick-up Address */}
            <FormField
              control={form.control}
              name="pickUpAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pick-up Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Pick-up Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Delivery Address */}
            <FormField
              control={form.control}
              name="deliveryAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Delivery Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Delivery Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Fee */}

            <Button
              type="submit"
              className="px-4 w-full py-2 bg-blue-600 text-white rounded"
            >
              Create Parcel
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
