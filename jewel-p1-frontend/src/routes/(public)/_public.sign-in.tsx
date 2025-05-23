import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import { signinSchema, SignInSchemaType } from '@/features/auth/schemas/sign-in-schema';
import { useSignIn } from '@/features/auth/hooks/use-sign-in';

export const Route = createFileRoute('/(public)/_public/sign-in')({
  component: SignInPage,
})

function SignInPage() {
    const {mutate: login } = useSignIn();
    const form = useForm<SignInSchemaType>({
        resolver: zodResolver(signinSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    function onSubmit(values: SignInSchemaType) {
        login(values);
    }

    return (
    <Card className = "width-[400px]">
        <CardHeader>
        <CardTitle className = "font-bold text-2xl">Sign In</CardTitle>
        <CardDescription>Please fill in the details below:</CardDescription>
        </CardHeader>
        <CardContent>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-y-6">
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                    <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            <Button type="submit" style={{ color: "#FEFAE0", backgroundColor: "#283618" }}>Submit</Button>
            </form>
        </Form>

        <div className="flex items-center gap-x-2 pt-4">
            <p>Don&apos;t have an account?</p>
            <Link to={"/sign-up"} className="text-blue-500 underline">
                Sign Up
            </Link>
        </div>
        </CardContent>
    </Card>
    );
}
