'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { Employee } from '@/lib/types';

const messageFormSchema = z.object({
  recipient: z.string().email('Veuillez sélectionner un destinataire valide.'),
  subject: z.string().min(2, 'Le sujet doit contenir au moins 2 caractères.'),
  body: z.string().min(10, 'Le corps du message doit contenir au moins 10 caractères.'),
});

interface ComposeMessageFormProps {
    employees: Employee[];
}

export function ComposeMessageForm({ employees }: ComposeMessageFormProps) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof messageFormSchema>>({
    resolver: zodResolver(messageFormSchema),
    defaultValues: {
      subject: '',
      body: '',
    },
  });

  function onSubmit(values: z.infer<typeof messageFormSchema>) {
    console.log(values);
    toast({
      title: "Message envoyé",
      description: `Votre message à ${values.recipient} a été envoyé.`,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="recipient"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Destinataire</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner un membre de l'équipe" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {employees.map(employee => (
                    <SelectItem key={employee.id} value={employee.email}>
                      {employee.name} ({employee.email})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sujet</FormLabel>
              <FormControl>
                <Input placeholder="Sujet de votre message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Écrivez votre message ici..." className="resize-none h-40" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Envoyer le message</Button>
      </form>
    </Form>
  );
}
