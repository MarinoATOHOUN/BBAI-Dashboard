'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const announcementFormSchema = z.object({
  title: z.string().min(2, {
    message: 'Le titre doit contenir au moins 2 caractères.',
  }),
  content: z.string().min(10, {
    message: 'Le contenu doit contenir au moins 10 caractères.',
  }),
});

export function AddAnnouncementForm() {
    const { toast } = useToast();
  const form = useForm<z.infer<typeof announcementFormSchema>>({
    resolver: zodResolver(announcementFormSchema),
    defaultValues: {
      title: '',
      content: '',
    },
  });

  function onSubmit(values: z.infer<typeof announcementFormSchema>) {
    console.log(values);
    toast({
      title: "Annonce créée",
      description: "Votre nouvelle annonce a été publiée.",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Titre</FormLabel>
              <FormControl>
                <Input placeholder="Titre de l'annonce" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contenu</FormLabel>
              <FormControl>
                <Textarea placeholder="Contenu de l'annonce..." className="resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Publier l'annonce</Button>
      </form>
    </Form>
  );
}
