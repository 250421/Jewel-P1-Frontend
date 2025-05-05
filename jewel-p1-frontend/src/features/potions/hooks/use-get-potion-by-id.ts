import { useQuery } from "@tanstack/react-query";
import { Potion } from "../models/potion";
import { axiosInstance } from "@/lib/axios-config";

interface useGetPotionByIdProps {
    id: string;
}

export const useGetPotionById = ({ id }: useGetPotionByIdProps) => {
    return useQuery ({
        queryKey: ["potion"],
        queryFn: async (): Promise<Potion | null> => {
            try {
                const resp = await axiosInstance.get(`/potions/${id}`);
                return resp.data;
            } catch (error) {
                return null;
            }
        }
    })
}