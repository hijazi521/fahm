'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { handlePartnerFormSubmission } from '@/app/actions/partner-actions';


const formSchema = z.object({
  organizationName: z.string().min(2, {
    message: 'Organization name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phoneNumber: z.string().min(10, {
    message: 'Phone number must be at least 10 digits.',
  }).regex(/^\+?[0-9\s-()]*$/, { message: "Invalid phone number format."}),
  schoolOrInstitution: z.string().min(2, {
    message: 'School or institution name must be at least 2 characters.',
  }),
  partnershipInterest: z.string().min(10, {
    message: 'Please describe your interest in partnership (min 10 characters).'
  }).max(500, {
    message: 'Partnership interest description cannot exceed 500 characters.'
  })
});

export type PartnerFormValues = z.infer<typeof formSchema>;

export function PartnerProgramForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<PartnerFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      organizationName: '',
      email: '',
      phoneNumber: '',
      schoolOrInstitution: '',
      partnershipInterest: '',
    },
  });

  async function onSubmit(values: PartnerFormValues) {
    setIsSubmitting(true);
    try {
      const result = await handlePartnerFormSubmission(values);
      if (result.success) {
        toast({
          title: 'Application Submitted!',
          description: 'Thank you for your interest. We will be in touch soon.',
        });
        form.reset();
      } else {
        toast({
          title: 'Submission Failed',
          description: result.error || 'An unexpected error occurred. Please try again.',
          variant: 'destructive',
        });
      }
    } catch (error) {
       toast({
        title: 'Submission Error',
        description: 'An error occurred while submitting the form. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-2xl mx-auto p-6 sm:p-8 bg-card rounded-lg shadow-xl">
        <FormField
          control={form.control}
          name="organizationName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Organization Name</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Acme University, Innovate Corp" {...field} />
              </FormControl>
              <FormDescription>
                The official name of your organization or institution.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="your.email@example.com" {...field} />
              </FormControl>
              <FormDescription>
                A primary email address for communication.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact Phone Number</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="+1 (555) 123-4567" {...field} />
              </FormControl>
              <FormDescription>
                Include country code if applicable.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="schoolOrInstitution"
          render={({ field }) => (
            <FormItem>
              <FormLabel>School / Institution Type</FormLabel>
              <FormControl>
                <Input placeholder="e.g., University, Research Lab, Non-profit" {...field} />
              </FormControl>
              <FormDescription>
                Specify the type or name of your school or institution if different from Organization Name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="partnershipInterest"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Partnership Interest</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Briefly describe why you're interested in partnering with Fahm Insights, potential areas of collaboration, etc."
                  className="resize-y min-h-[100px]"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Let us know how we can work together (max 500 characters).
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            'Submit Application'
          )}
        </Button>
      </form>
    </Form>
  );
}
