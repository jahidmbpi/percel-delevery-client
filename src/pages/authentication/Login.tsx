import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Link } from "react-router";
import Password from "./Password";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

export default function Login() {
  const form = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h2 className="capitalize text-3xl lg:text-4xl md:text-5xl">
            Please Login
          </h2>
        </div>

        <Card>
          <CardContent className="p-6">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
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
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Password {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit */}
                <Button className="w-full" type="submit">
                  Submit
                </Button>

                {/* Divider */}
                <div>
                  <span className="flex items-center">
                    <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-600"></span>
                    <span className="shrink-0 px-4 text-gray-900 dark:text-white">
                      Or
                    </span>
                    <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300 dark:to-gray-600"></span>
                  </span>
                </div>

                {/* Google Button */}
                <Button
                  className="w-full bg-black hover:bg-blue-700"
                  type="button"
                >
                  Google
                </Button>

                {/* Register */}
                <div className="text-center">
                  <h2>
                    Don’t have an account?{" "}
                    <span className="font-bold">
                      <Link to="/register">Register</Link>
                    </span>
                  </h2>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
