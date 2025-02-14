"use client";

import { todoToggleCheckAction } from "@/hooks/actions";
import todoToggleCheck from "@/hooks/todo/todoToggleCheck";
import { TodoDataType } from "@/lib/types";
import { Trash2 } from "lucide-react";
import { useState } from "react";
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

    await todoToggleCheckAction();

    setLoad(false);
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
          >
            <Trash2 />
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default TodoSingle;
