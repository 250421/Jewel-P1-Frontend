import { axiosInstance } from "@/lib/axios-config";
import { useMutation } from "@tanstack/react-query";
import { AddPotionSchema } from "../schemas/add-potion-schema";
import { AxiosError } from "axios";
import { toast } from "sonner";

export const usePotion = () => {
    return useMutation({
        mutationFn: async (values: AddPotionSchema) => {
            const resp = await axiosInstance.post("/potions", values);
            return resp.data;
        },
        onSuccess: () => {
            toast.success("Potion added");
        },
        onError: (error) => {
            console.error(error);
            if (error instanceof AxiosError) {
                toast.error(error.response?.data.message || "Error adding potion");
            } else {
                toast.error("An unexpected error occurred.");
            }
        }
    });
};
