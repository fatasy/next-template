import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const ExameGroupZodScheme = z.object({
  active: z.boolean().optional(),
  company_id: z.number().optional().default(1),
  id: z.number().optional(),
  name: z.string()
})

export type ExameGroup = z.infer<typeof ExameGroupZodScheme>

export const ExameGroupFormValidation = zodResolver(ExameGroupZodScheme)
