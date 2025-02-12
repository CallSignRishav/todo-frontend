"use client";

import userRegister from "@/hooks/auth/userRegister";
import { registerSchema } from "@/lib/schemas";
import { RegisterDataType } from "@/lib/types";
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

const RegisterForm = () => {
  const [view, setView] = useState(false);

  const { push } = useRouter();

  const rhForm = useForm<RegisterDataType>({
    defaultValues: {
      first_name: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(registerSchema),
    mode: "all",
  });

  const registerFormSubmit = async (fData: RegisterDataType) => {
    const { message, success } = await userRegister(fData);

    if (success) {
      push("/login");

      toast.success(message);
    }

    if (!success) {
      toast.error(message);
    }
  };

  return (
    <>
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
                disabled={
                  rhForm.formState.isValid || rhForm.formState.isSubmitting
                    ? false
                    : true
                }
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
    </>
  );
};

export default RegisterForm;
