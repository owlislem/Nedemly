import { z } from "zod";

export const EmployeeSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  position: z.string().min(1, "Position is required"),
  email: z.string().email("Invalid email"),
  responsible: z.string().optional(),

  baseSalary: z.coerce.number().min(0, "Base salary must be >= 0"),
  netSalary: z.coerce.number().min(0, "Net salary must be >= 0"),
});

export type EmployeeInput = z.infer<typeof EmployeeSchema>;



export const BaseSalarySettingsSchema = z.object({
  employee: z.string().min(1, "Employee is required"),
  baseSalary: z.coerce.number().min(0, "Base salary must be >= 0"),
  startingDate: z.coerce
    .date()
    .refine((val) => !isNaN(val.getTime()), { message: "Starting date is required" }),
});

export type BaseSalarySettingsInput = z.infer<typeof BaseSalarySettingsSchema>;

export const OvertimeSettingsSchema = z.object({
  timeRange: z.string().min(1, "Time range is required"), 
  pricePerHour: z.coerce.number().min(0, "Price per hour must be >= 0"), 
  maxHoursPerWeek: z.coerce.number().min(0, "Max hours must be >= 0"),
});

export type OvertimeSettingsInput = z.infer<typeof OvertimeSettingsSchema>;
