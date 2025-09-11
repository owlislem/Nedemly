"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  BaseSalarySettingsSchema,
  BaseSalarySettingsInput,
} from "@/lib/validation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function formatDate(date: Date | undefined): string {
  if (!date) return "";
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

const BaseSalaryForm = () => {
  const [open, setOpen] = useState(false);
  const [month, setMonth] = useState<Date | undefined>(undefined);

  const form = useForm({
    resolver: zodResolver(BaseSalarySettingsSchema),
    defaultValues: {
      employee: "",
      baseSalary: 0,
      startingDate: undefined as Date | undefined,
    },
  });

  const handleSubmitForm = (data: BaseSalarySettingsInput) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className="bg-white flex-1 mt-4 py-6 px-4 border border-[#BABABA] rounded-xl">
      <h1 className="text-primary-100 h2-bold">Base Salary Settings</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmitForm)}
          className="flex w-full flex-col gap-10 px-4 py-4"
        >
          {/* Employee Select */}
          <FormField
            control={form.control}
            name="employee"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col gap-2">
                <FormLabel className="paragraph-semibold mb-2">
                  Employee
                </FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full border-[#BABABA] rounded-lg min-h-[46px]">
                      <SelectValue placeholder="Select an employee" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="emp1">
                        Belkherchouche Soundes
                      </SelectItem>
                      <SelectItem value="emp2">Amrouai Yacine</SelectItem>
                      <SelectItem value="emp3">Doe John</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>Select the employee</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Base Salary */}
          <FormField
            control={form.control}
            name="baseSalary"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col gap-2">
                <FormLabel className="paragraph-semibold mb-2">
                  Base Salary (DA)
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter base salary (e.g. 50000)"
                    className="paragraph-regular no-focus min-h-12 rounded-lg border border-[#BABABA]"
                    value={field.value == null ? "" : String(field.value)}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                    onBlur={field.onBlur}
                    name={field.name}
                    ref={field.ref}
                  />
                </FormControl>
                <FormDescription>
                  Enter the employee&apos;s base salary in Algerian Dinars
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Starting Date */}
          <FormField
            control={form.control}
            name="startingDate"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col gap-2">
                <FormLabel className="paragraph-semibold mb-2">
                  Starting Date
                </FormLabel>
                <FormControl>
                  <div className="relative flex gap-2">
                    <Input
                      value={formatDate(field.value as Date | undefined)}
                      readOnly
                      className="bg-background pr-10 border-[#BABABA] rounded-lg min-h-[46px] no-focus"
                    />
                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          type="button"
                          variant="ghost"
                          className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
                        >
                          <CalendarIcon className="size-3.5" />
                          <span className="sr-only">Select date</span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto overflow-hidden p-0 bg-white"
                        align="end"
                        alignOffset={-8}
                        sideOffset={10}
                      >
                        <Calendar
                          className="bg-white"
                          mode="single"
                          selected={field.value as Date | undefined}
                          captionLayout="dropdown"
                          month={month || (field.value as Date | undefined)}
                          onMonthChange={setMonth}
                          onSelect={(date) => {
                            if (date) {
                              field.onChange(date);
                              setOpen(false);
                            }
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </FormControl>
                <FormDescription>
                  Pick the date when this salary becomes effective
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex">
            <Button
              type="submit"
              className="bg-primary-100 text-white w-fit py-4 px-8 rounded-lg"
            >
              Save
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default BaseSalaryForm;
