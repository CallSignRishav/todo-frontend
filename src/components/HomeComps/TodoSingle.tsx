"use client";

import { Trash2 } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Checkbox } from "../ui/checkbox";

const TodoSingle = () => {
  const [read, setRead] = useState(false);

  return (
    <>
      <Card>
        <CardContent className="flex items-center justify-between px-6 py-2">
          <div className="flex items-center gap-4">
            <Checkbox
              defaultChecked={read}
              onCheckedChange={() => setRead(!read)}
            />

            <div
              className={`${read ? "line-through" : ""} text-sm decoration-2 md:text-base`}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem,
              exercitationem?
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
