"use client";

import { loginSchema } from "@/lib/schemas";
import { LoginDataType } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
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

const LoginForm = () => {
  const [view, setView] = useState(false);

  const { replace } = useRouter();

  const rhForm = useForm<LoginDataType>({
    resolver: zodResolver(loginSchema),

    mode: "all",

    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginFormSubmit = (fData: LoginDataType) => {
    console.log(fData);

    replace("/");

    toast.success("Logged in successfully!");
  };

  return (
    <>
      <Card className="w-full sm:w-[350px]">
        <CardHeader className="grid place-items-center text-center">
          <CardTitle>Login</CardTitle>

          <CardDescription>Log into your account</CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...rhForm}>
            <form
              onSubmit={rhForm.handleSubmit(loginFormSubmit)}
              className="space-y-8"
            >
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
                      <div className="relative">
                        <Input
                          type={view ? "text" : "password"}
                          placeholder="Enter your password"
                          {...field}
                        />

                        {view ? (
                          <Eye
                            className="absolute right-2 top-2"
                            onClick={() => setView(!view)}
                          />
                        ) : (
                          <EyeOff
                            className="absolute right-2 top-2"
                            onClick={() => setView(!view)}
                          />
                        )}
                      </div>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full"
              >
                Login
              </Button>
            </form>
          </Form>
        </CardContent>

        <CardFooter className="flex justify-center text-center">
          <span>Don&apos;t have an account?&nbsp;</span>
          <Link
            href={"/register"}
            className="font-bold underline"
          >
            Register
          </Link>
        </CardFooter>
      </Card>
    </>
  );
};

export default LoginForm;
