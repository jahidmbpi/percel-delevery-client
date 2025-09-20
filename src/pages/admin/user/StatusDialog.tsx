import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle, // 👈 Title import করতে হবে
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { IUserFrontend } from "@/redux/feature/user/type";
import { useUpdateUserMutation } from "@/redux/feature/user/user.api";
import { useForm, type SubmitHandler } from "react-hook-form";

type userDialogProps = {
  children: React.ReactNode;
  user: IUserFrontend;
};
type StatusFormValues = {
  status: string;
  role: string;
};
export default function StatusDialog({ children, user }: userDialogProps) {
  const [updateUser] = useUpdateUserMutation();
  console.log(user);
  const form = useForm<StatusFormValues>({
    defaultValues: {
      role: user.role,
      status: user.isActive,
    },
  });

  const handelUpdateUserStatus: SubmitHandler<StatusFormValues> = async (
    data
  ) => {
    console.log(data);
    try {
      console.log(user._id);
      const result = await updateUser({
        userId: user._id,
        data: data,
      }).unwrap();
      console.log("User deleted:", result);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle>Update User Account</AlertDialogTitle>
          <AlertDialogDescription></AlertDialogDescription>
        </AlertDialogHeader>

        <div>
          <Form {...form}>
            <form
              id="form1"
              onSubmit={form.handleSubmit(handelUpdateUserStatus)}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {/* Role Field */}
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Update Role</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value ?? user.role}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a role" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="SENDER">SENDER</SelectItem>
                          <SelectItem value="ADMIN">ADMIN</SelectItem>
                          <SelectItem value="RECIVER">RECIVER</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Status Field */}
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Update Status</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value ?? user.isActive}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="ACTIVE">ACTIVE</SelectItem>
                          <SelectItem value="BLOCKED">BLOCKED</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </form>
          </Form>
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <button
              form="form1"
              type="submit"
              className="px-4 py-1 bg-blue-600 text-white rounded"
            >
              Continue
            </button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
