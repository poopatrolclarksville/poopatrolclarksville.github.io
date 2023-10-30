import { z } from 'zod'

export const bookingFormSchema = z.object({
  firstName: z.string().min(2).max(35),
  lastName: z.string().min(2).max(25),
  email: z.string().email(),
  serviceType: z.enum([
    'Weekly', 
    'Twice-Weekly', 
    'Bi-Weekly', 
    'One-Time',
    'Deoderize'
  ]),
  message: z.string()
    .min(10, {
      message: "Message must be at least 10 characters.",
    })
    .max(240, {
      message: "Message must not be longer than 240 characters.",
    }),
});

export type BookingFormSchema = z.infer<typeof bookingFormSchema>;