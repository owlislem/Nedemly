"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  OvertimeSettingsSchema,
  OvertimeSettingsInput,
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const OverTimeSettingsForm = () => {
  const form = useForm({
    resolver: zodResolver(OvertimeSettingsSchema),
    defaultValues: {
      timeRange: "",
      pricePerHour: 0,
      maxHoursPerWeek: 0,
    },
  });

  const handleSubmitForm = (data: OvertimeSettingsInput) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className="bg-white flex-1 mt-4 py-6 px-4 border border-[#BABABA] rounded-xl">
      <h1 className="text-primary-100 h2-bold">Overtime Settings</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmitForm)}
          className="flex w-full flex-col gap-10 px-4 py-4"
        >
          {/* Time Range Select */}
          <FormField
            control={form.control}
            name="timeRange"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col gap-2">
                <FormLabel className="paragraph-semibold mb-2">
                  Time Range
                </FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full border-[#BABABA] rounded-lg min-h-[46px]">
                      <SelectValue placeholder="Select time range" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="weekday">
                        Weekday (Monday - Friday)
                      </SelectItem>
                      <SelectItem value="weekend">
                        Weekend (Saturday - Sunday)
                      </SelectItem>
                      <SelectItem value="holiday">Public Holidays</SelectItem>
                      <SelectItem value="night">
                        Night Shift (10 PM - 6 AM)
                      </SelectItem>
                      <SelectItem value="all">All Hours</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>
                  Select when overtime rates apply
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Price Per Hour */}
          <FormField
            control={form.control}
            name="pricePerHour"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col gap-2">
                <FormLabel className="paragraph-semibold mb-2">
                  Price Per Hour (DA)
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter price per hour (e.g. 800)"
                    className="paragraph-regular no-focus min-h-12 rounded-lg border border-[#BABABA]"
                    value={field.value == null ? "" : String(field.value)}
                    onChange={(e) => field.onChange(e.target.value)}
                    onBlur={field.onBlur}
                    name={field.name}
                    ref={field.ref}
                  />
                </FormControl>
                <FormDescription>
                  Enter the hourly rate for overtime work in Algerian Dinars
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Max Hours Per Week */}
          <FormField
            control={form.control}
            name="maxHoursPerWeek"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col gap-2">
                <FormLabel className="paragraph-semibold mb-2">
                  Max Hours Per Week
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter max hours per week (e.g. 20)"
                    className="paragraph-regular no-focus min-h-12 rounded-lg border border-[#BABABA]"
                    value={field.value == null ? "" : String(field.value)}
                    onChange={(e) => field.onChange(e.target.value)}
                    onBlur={field.onBlur}
                    name={field.name}
                    ref={field.ref}
                  />
                </FormControl>
                <FormDescription>
                  Maximum overtime hours allowed per week
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

export default OverTimeSettingsForm;
