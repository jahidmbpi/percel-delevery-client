import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import z from "zod";
import Password from "../login/Password";
import registerImage from "@/assets/register.png";
import { useCreateUserMutation } from "@/redux/feature/user/user.api";
import { toast } from "sonner";

export default function Register() {
  const [createUser] = useCreateUserMutation();

  const navigate = useNavigate();
  const registerSchema = z.object({
    name: z.string(),
    email: z.string().email({ message: "please provide a valid email" }),
    password: z
      .string()
      .min(10, {
        message:
          "password must be at least 10 characters or special character.",
      })
      .max(20, {
        message: "password exceed 20 character long",
      }),
    phone: z.string().regex(/^01[3-9]\d{8}$/, {
      message: "সঠিক বাংলাদেশি মোবাইল নাম্বার দিন (01XXXXXXXXX)",
    }),
    address: z.string().min(8).max(50),
  });

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
    },
  });

  const handelRegister = async (data: z.infer<typeof registerSchema>) => {
    const result = await createUser(data).unwrap();
    console.log(result);

    if (result.success && result.message === "User created successfully") {
      toast.success("user created successfully");
    }
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="w-full mx-auto max-w-7xl px-2 ">
      <div className=" flex items-center justify-center h-screen mx-auto">
        <div className=" flex gap-4 md:p-6">
          {/* this is from */}
          <div className="flex-1">
            {/* this is header */}
            <div className="lg:w-[70%] items-center justify-center mx-auto">
              <div className=" space-y-4">
                <h2 className="text-4xl font-medium font-serif capitalize">
                  create an account
                </h2>
                <p>
                  already have an account ?{" "}
                  <span>
                    <Link to="/login">log in</Link>
                  </span>
                </p>
              </div>

              {/* this is form */}
              <div>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(handelRegister)}
                    className="space-y-4"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your name"
                              type="text"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your email"
                              type="email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>password</FormLabel>
                          <FormControl>
                            <Password {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>phone</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your email"
                              type="number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>address</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your email"
                              type="text"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="px-4 w-full py-2 bg-blue-600 text-white rounded"
                    >
                      Register
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>

          {/* this is image  */}
          <div className="flex-1 p-2 hidden sm:block">
            <img src={registerImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
