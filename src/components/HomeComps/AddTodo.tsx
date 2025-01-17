"use client";

import { todoSchema } from "@/lib/schemas";
import { TodoInfoType } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { CirclePlus } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const AddTodo = () => {
  const rhForm = useForm<TodoInfoType>({
    resolver: zodResolver(todoSchema),

    mode: "all",

    defaultValues: {
      todoInfo: "",
    },
  });

  const todoAddFn = (fData: TodoInfoType) => {
    console.log(fData);

    rhForm.reset();
  };

  return (
    <>
      <Card className="">
        <CardContent className="p-4">
          <Form {...rhForm}>
            <form
              onSubmit={rhForm.handleSubmit(todoAddFn)}
              className="grid grid-cols-1 gap-2 md:grid-cols-4"
            >
              <FormField
                control={rhForm.control}
                name={"todoInfo"}
                render={({ field }) => (
                  <FormItem className="md:col-span-3">
                    <FormControl>
                      <Input
                        className="focus-visible:ring-0 focus-visible:ring-offset-0"
                        placeholder="Write somthing..."
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="flex w-full items-center gap-2"
              >
                <CirclePlus />
                Add Todo
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};

export default AddTodo;
