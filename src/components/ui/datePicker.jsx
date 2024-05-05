"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePickerDemo() {
  const [date, setDate] = useState();

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          variant={"outline"}
          className={cn(
            "w-full h-[100px] justify-start text-left font-normal",
            !date && "text-muted-foreground",
          )}
        >
          <div className="flex items-center">
            <CalendarIcon className="mr-2 h-4 w-4 hover:text-red-700" />
            {date ? (
              format(date, "PPP")
            ) : (
              <span className="text-gray-500">Date</span>
            )}
          </div>
          <ChevronDown className="h-4 w-4 ml-auto mr-6 text-xl" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
