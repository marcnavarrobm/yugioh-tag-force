import z from 'zod'

const packSchema = z.object({
    name: z.string({
        required_error: 'Pack name is required.'
    }),
    cost: z.number().min(0, {
        message: 'Cost must be a positive number'
    }),
    unlock: z.string({
        required_error: 'Unlock criteria is required.'
    }),
    image: z.string().url().optional() // Haciéndolo opcional
    // Puedes agregar más campos aquí según sea necesario
})

export function validatePack(input) {
    return packSchema.safeParse(input)
}

export function validatePartialPack(input) {
    return packSchema.partial().safeParse(input)
}
