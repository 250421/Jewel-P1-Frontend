import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { addPotionSchema, AddPotionSchema } from '../schemas/add-potion-schema';
import { usePotion } from '../hooks/use-add-potion';
  
interface AddPotionDialogProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export const AddPotionDialog = ({ 
        open, 
        setOpen, 
    }: AddPotionDialogProps) => {
        const { mutate: addPotion } = usePotion();

        const form = useForm<AddPotionSchema>({
            resolver: zodResolver(addPotionSchema),
            defaultValues: {
                name: "",
                category: "",
                stock: 1,
                seller: "",
            },
        });
    
        const onSubmit = (values: AddPotionSchema) => {
            console.log(values);
            addPotion(values, {
                onSuccess: () => {
                    setOpen(false);
                }
            });
        };
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>Add Potion</DialogTitle>
                <DialogDescription>
                    Add a new potion to your list.
                </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-y-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                            <Input placeholder="Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Category</FormLabel>
                            <FormControl>
                            <Input placeholder="Category" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />

                    <FormField  
                        control={form.control}
                        name="stock"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Stock</FormLabel>
                            <FormControl>
                            <Input placeholder="1" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="seller"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Seller</FormLabel>
                            <FormControl>
                            <Input placeholder="Seller" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />

                    <Button type="submit">Submit</Button>
                    </form>
                </Form>

            </DialogContent>
        </Dialog>

    )
}