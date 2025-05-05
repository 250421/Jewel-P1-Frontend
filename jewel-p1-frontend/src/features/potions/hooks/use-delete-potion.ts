import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axios-config";
import { toast } from "sonner";

export const useDeletePotion = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      await axiosInstance.delete(`/potions/${id}`);
    },
    onSuccess: () => {
      toast.success("Potion deleted");
      queryClient.invalidateQueries({ queryKey: ["potions"] });
    },
    onError: () => {
      toast.error("Failed to delete potion");
    },
  });
};
