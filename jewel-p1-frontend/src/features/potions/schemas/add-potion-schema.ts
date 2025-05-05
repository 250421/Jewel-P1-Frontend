import { z } from "zod";

export const addPotionSchema = z.object({
    name: z.string().min(1, {
        message: "Name is required",
    }), 
    category: z.string().min(1, {
        message: "Category is required",
    }), 
    stock: z.coerce.number().min(1, {
        message: "Stock is required",
    }),
    seller: z.string().min(1, {
        message: "Seller is required",
    }), 
});

export type AddPotionSchema = z.infer<typeof addPotionSchema>;