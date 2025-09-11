"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { EmployeeSchema, EmployeeInput } from "@/lib/validation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useParams } from "next/navigation";

const EmployeeForm = () => {
  const params = useParams();
  const id = params.id;

  const form = useForm({
    resolver: zodResolver(EmployeeSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      position: "",
      email: "",
      responsible: "",
      baseSalary: 0,
      netSalary: 0,
    },
  });

  const handleEmployeeForm = (data: EmployeeInput) => {
    console.log(data);
    // Handle form submission logic here
  };

  return (
    <Form {...form}>
      <form
        className="flex w-full flex-col gap-10 px-4 py-4"
        onSubmit={form.handleSubmit(handleEmployeeForm)}
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-2">
              <FormLabel className="paragraph-semibold mb-2">
                First Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter first name"
                  className="paragraph-regular light-border-2 no-focus min-h-12 rounded-1.5 border"
                  {...field}
                />
              </FormControl>
              <FormDescription className="body-regular text-gray-700">
                This is the employee&apos;s given name
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-2">
              <FormLabel className="paragraph-semibold mb-2">
                Last Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter last name (e.g. Doe)"
                  className="paragraph-regular light-border-2 no-focus min-h-12 rounded-1.5 border"
                  {...field}
                />
              </FormControl>
              <FormDescription className="body-regular text-gray-700">
                This is the employee&apos;s family name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-2">
              <FormLabel className="paragraph-semibold mb-2">
                Position
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter position (e.g. Software Engineer)"
                  className="paragraph-regular light-border-2 no-focus min-h-12 rounded-1.5 border"
                  {...field}
                />
              </FormControl>
              <FormDescription className="body-regular text-gray-700">
                This is the employee&apos;s job title or role.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-2">
              <FormLabel className="paragraph-semibold mb-2">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter email (e.g. john.doe@example.com)"
                  className="paragraph-regular light-border-2 no-focus min-h-12 rounded-1.5 border"
                  {...field}
                />
              </FormControl>
              <FormDescription className="body-regular text-gray-700">
                This is the employee&apos;s official work email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="responsible"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-2">
              <FormLabel className="paragraph-semibold mb-2">
                Responsible
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter responsible person (e.g. Manager's name)"
                  className="paragraph-regular light-border-2 no-focus min-h-12 rounded-1.5 border"
                  {...field}
                />
              </FormControl>
              <FormDescription className="body-regular text-gray-700">
                This is the manager or supervisor responsible for the employee.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="baseSalary"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-2">
              <FormLabel className="paragraph-semibold mb-2">
                Base Salary
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter base salary (e.g. 50000)"
                  type="number"
                  className="paragraph-regular light-border-2 no-focus min-h-12 rounded-1.5 border"
                  value={field.value == null ? "" : String(field.value)}
                  onChange={(e) => field.onChange(e.target.value)}
                  onBlur={field.onBlur}
                  name={field.name}
                  ref={field.ref}
                />
              </FormControl>
              <FormDescription className="body-regular text-gray-700">
                This is the employee&apos;s fixed gross salary before
                deductions.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="netSalary"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-2">
              <FormLabel className="paragraph-semibold mb-2">
                Net Salary
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter net salary (e.g. 45000)"
                  type="number"
                  className="paragraph-regular light-border-2 no-focus min-h-12 rounded-1.5 border"
                  value={field.value == null ? "" : String(field.value)}
                  onChange={(e) => field.onChange(e.target.value)}
                  onBlur={field.onBlur}
                  name={field.name}
                  ref={field.ref}
                />
              </FormControl>
              <FormDescription className="body-regular text-gray-700">
                This is the employee&apos;s take-home salary after deductions.
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
            {id === "new" ? "Add" : "Edit"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default EmployeeForm;
