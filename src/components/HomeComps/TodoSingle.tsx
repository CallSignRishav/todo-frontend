"use client";

import { todoUpdateCheckAction } from "@/hooks/actions";
import todoDeleteHook from "@/hooks/todo/todoDeleteHook";
import todoToggleCheck from "@/hooks/todo/todoToggleCheck";
import { TodoDataType } from "@/lib/types";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Checkbox } from "../ui/checkbox";

type TodoSingleProps = {
  details: TodoDataType;
};

const TodoSingle = ({ details }: TodoSingleProps) => {
  const [load, setLoad] = useState(false);

  const toggleCheck = async (checked: boolean) => {
    setLoad(true);

    await todoToggleCheck({ checked, tId: details.id });

    await todoUpdateCheckAction();

    setLoad(false);
  };

  const todoDelete = async () => {
    const { error, isError } = await todoDeleteHook(details.id);

    if (isError) {
      toast.error(error);
    }

    if (!isError) {
      await todoUpdateCheckAction();

      toast.success(error);
    }
  };

  return (
    <>
      <Card>
        <CardContent className="flex items-center justify-between px-6 py-2">
          <div className="flex items-center gap-4">
            <Checkbox
              defaultChecked={details.read}
              onCheckedChange={(c: boolean) => toggleCheck(c)}
              disabled={load}
            />

            <div
              className={`${details.read ? "line-through" : ""} text-sm decoration-2 md:text-base`}
            >
              {details.todoInfo}
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="text-red-500"
            onClick={todoDelete}
            disabled={load}
          >
            <Trash2 />
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default TodoSingle;
