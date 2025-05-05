import { axiosInstance } from "@/lib/axios-config";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddPotionSchema } from "../schemas/add-potion-schema";
import { AxiosError } from "axios";
import { toast } from "sonner";

export const useAddPotion = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (values: AddPotionSchema) => {
            const resp = await axiosInstance.post("/potions", values);
            return resp.data;
        },
        onSuccess: () => {
            toast.success("Potion added");
            queryClient.invalidateQueries({
                queryKey: ["potions"], 
            });
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
