import { z } from 'zod';

export const SignupSchema = z.object({
  name: z.string().min(1, 'Name is required'),  // Add validation for name
  email: z.string().email('Invalid email address'),
  password: z.string()
    .min(6, 'Password must be at least 6 characters')
    .max(10, 'Password must be less than or equal to 10 characters'),
});
