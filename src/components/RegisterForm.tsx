"use client";

import { registerSchema } from "@/lib/schemas";
import { RegisterDataType } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

const RegisterForm = () => {
  const { theme } = useTheme();

  const rhForm = useForm<RegisterDataType>({
    defaultValues: {
      first_name: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(registerSchema),
    mode: "all",
  });

  const registerFormSubmit = (fData: RegisterDataType) => {
    console.log(fData);

    rhForm.reset();

    toast.success("Registered successfully!");
  };

  return (
    <>
      <div className="grid place-items-center">
        <Card className="w-full sm:w-[350px]">
          <CardHeader className="grid place-items-center text-center">
            <CardTitle>Register</CardTitle>

            <CardDescription>Create a new account</CardDescription>
          </CardHeader>

          <CardContent>
            <Form {...rhForm}>
              <form
                onSubmit={rhForm.handleSubmit(registerFormSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={rhForm.control}
                  name={"first_name"}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>

                      <FormControl>
                        <Input
                          placeholder="John Doe"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={rhForm.control}
                  name={"email"}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>

                      <FormControl>
                        <Input
                          placeholder="admin@example.com"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={rhForm.control}
                  name={"password"}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>

                      <FormControl>
                        <Input
                          placeholder="Enter your password"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full"
                >
                  Register
                </Button>
              </form>
            </Form>
          </CardContent>

          <CardFooter className="flex justify-center text-center">
            <span>Already have an account?&nbsp;</span>
            <Link
              href={"/login"}
              className="font-bold underline"
            >
              Login
            </Link>
          </CardFooter>
        </Card>

        {/* Toast Notification */}
        <ToastContainer
          position={"top-center"}
          autoClose={3000}
          theme={theme}
        />
      </div>
    </>
  );
};

export default RegisterForm;
