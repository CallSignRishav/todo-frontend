"use client";

import { profileUpdateAction } from "@/hooks/actions";
import updateUserProfile from "@/hooks/updateUserProfile";
import { profileUpdateSchema } from "@/lib/schemas";
import { AuthUserProfileType, ProfileUpdateDataType } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
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

type ProfileUserType = {
  profile: AuthUserProfileType | null;
};

const ProfileUpdateForm = ({ profile }: ProfileUserType) => {
  const [load, setLoad] = useState<boolean>(false);

  const rhForm = useForm<ProfileUpdateDataType>({
    resolver: zodResolver(profileUpdateSchema),

    mode: "all",

    defaultValues: {
      first_name: profile?.first_name || "",
      last_name: profile?.last_name || "",
      email: profile?.email || "",
    },
  });

  const profileUpdateFormSubmit = async (fData: ProfileUpdateDataType) => {
    setLoad(true);

    if (
      profile?.email === fData.email &&
      profile?.first_name === fData.first_name &&
      profile?.last_name === fData.last_name
    ) {
      toast.warn("No changes detected");
    } else {
      const { success, message } = await updateUserProfile(fData);

      if (!success) {
        toast.error(message);
      }

      if (success) {
        toast.success(message);

        await profileUpdateAction();
      }
    }

    setLoad(false);
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
                        disabled={load}
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
                        disabled={load}
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
                        disabled={load}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full"
                disabled={load}
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
