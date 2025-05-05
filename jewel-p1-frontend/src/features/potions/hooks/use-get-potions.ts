import { axiosInstance } from "@/lib/axios-config";
import { useQuery } from "@tanstack/react-query";
import { Potion } from "../models/potion";

export const useGetPotions = () => {
    return useQuery({
        queryKey: ["potions"],
        queryFn: async (): Promise<Potion[]> => {
            try{
                const resp = await axiosInstance.get("/potions");
                return resp.data;
            } catch (error) {
                console.error(error);
                return [];
            }
        },
    });
};