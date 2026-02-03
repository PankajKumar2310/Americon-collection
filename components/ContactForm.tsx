"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { showSuccess, showError, showLoading, dismissToast } from "@/utils/toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form submitted:", values);
    const loadingToast = showLoading("Sending message...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        if (typeof loadingToast === 'string') {
          dismissToast(loadingToast);
        }
        showSuccess(data.message || "Thank you for your message! We'll be in touch soon.");
        form.reset();
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      if (typeof loadingToast === 'string') {
        dismissToast(loadingToast);
      }
      showError("Failed to send message. Please try again later.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-sans uppercase tracking-wider text-xs text-muted-foreground">Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Jane Doe" {...field} className="bg-card border border-white/8 rounded-md p-6" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-sans uppercase tracking-wider text-xs text-muted-foreground">Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="jane.doe@example.com" {...field} className="bg-card border border-white/8 rounded-md p-6" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-sans uppercase tracking-wider text-xs text-muted-foreground">Your Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your travel plans or any questions you have..."
                  className="min-h-[150px] bg-card border border-white/8 rounded-md p-6"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="text-center">
          <Button type="submit" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-7 text-base font-sans uppercase tracking-widest">
            Send Message
          </Button>
        </div>
      </form>
    </Form>
  );
}