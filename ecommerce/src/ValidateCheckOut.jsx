// import { z } from 'zod';

// export const checkOutSchema = z.object({
//   name: z.string().min(1, { message: 'Name is required' }),
  
//   cardNumber: z
//     .string()
//     .regex(/^\d{16}$/, { message: 'Card number must be exactly 16 digits' }),

//   expiryDate: z
//     .string()
//     .regex(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/, { message: 'Enter a valid expiry date (MM/YYYY)' }),

//   cvv: z
//     .string()
//     .length(3, { message: 'CVV must be exactly 3 digits' }),
// });
import { z } from 'zod';

export const checkOutSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  number: z.string().length(16, 'Card number must be exactly 16 digits'),
  expiryDate: z.string().min(1, 'Expiry date is required'),
  cvv: z.string().length(3, 'CVV must be exactly 3 digits'),
  country: z.string().min(1, 'Country is required'),
  addressLine1: z.string().min(1, 'Address Line 1 is required'),
  addressLine2: z.string().optional(),
});
