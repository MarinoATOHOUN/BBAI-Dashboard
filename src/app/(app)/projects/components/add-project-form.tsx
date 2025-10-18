'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import type { Employee } from '@/lib/types';
import Select from 'react-select';

const projectFormSchema = z.object({
  title: z.string().min(2, {
    message: 'Le titre doit contenir au moins 2 caractères.',
  }),
  description: z.string().min(10, {
    message: 'La description doit contenir au moins 10 caractères.',
  }),
  assignedMembers: z.array(z.object({ value: z.string(), label: z.string() })).min(1, 'Vous devez assigner au moins un membre.'),
});

interface AddProjectFormProps {
    employees: Employee[];
}

export function AddProjectForm({ employees }: AddProjectFormProps) {
  const { toast } = useToast();
  const employeeOptions = employees.map(emp => ({ value: emp.id, label: emp.name }));

  const form = useForm<z.infer<typeof projectFormSchema>>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
      title: '',
      description: '',
      assignedMembers: [],
    },
  });

  function onSubmit(values: z.infer<typeof projectFormSchema>) {
    console.log(values);
    toast({
      title: "Projet créé",
      description: `Le projet "${values.title}" a été créé avec succès.`,
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
              <FormLabel>Titre du projet</FormLabel>
              <FormControl>
                <Input placeholder="Ex: Modèle de Langue Wolof" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Décrivez le projet en quelques mots..." className="resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="assignedMembers"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Membres assignés</FormLabel>
              <FormControl>
                <Select
                  {...field}
                  isMulti
                  options={employeeOptions}
                  className="react-select-container"
                  classNamePrefix="react-select"
                  placeholder="Sélectionner des membres"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Créer le projet</Button>
      </form>
    </Form>
  );
}
