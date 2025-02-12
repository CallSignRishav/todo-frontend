"use client";

import { profileUpdateSchema } from "@/lib/schemas";
import { ProfileUpdateDataType } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
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

const ProfileUpdateForm = () => {
  const rhForm = useForm<ProfileUpdateDataType>({
    resolver: zodResolver(profileUpdateSchema),

    mode: "all",

    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
    },
  });

  const profileUpdateFormSubmit = (fData: ProfileUpdateDataType) => {
    console.log(fData);

    toast.success("Profile updated successfully!");

    rhForm.reset();
  };

  return (
    <>
      <Card className="w-full sm:w-[350px]">
        <CardHeader className="grid place-items-center text-center">
          <CardTitle>Profile</CardTitle>

          <CardDescription>Update your profile details</CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...rhForm}>
            <form
              onSubmit={rhForm.handleSubmit(profileUpdateFormSubmit)}
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
                name={"first_name"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>

                    <FormControl>
                      <Input
                        placeholder="John"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={rhForm.control}
                name={"last_name"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>

                    <FormControl>
                      <Input
                        placeholder="Doe"
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
                Update
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};

export default ProfileUpdateForm;
