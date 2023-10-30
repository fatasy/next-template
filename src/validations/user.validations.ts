import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export const UserZodScheme = z.object({
  firstName: z.string().min(1).max(18),
  lastName: z.string().min(1).max(18),
  phone: z.string().min(10).max(14).optional(),
  email: z.string().email(),
  url: z.string().url().optional(),
});


export type User = z.infer<typeof UserZodScheme>;


export const UserFormValidation = zodResolver(UserZodScheme);


