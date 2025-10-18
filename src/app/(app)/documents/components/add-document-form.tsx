'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

const documentFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Le nom du fichier doit contenir au moins 2 caractères.',
  }),
  file: z.any().refine(files => files?.length > 0, 'Un fichier est requis.'),
  access: z.array(z.string()).refine(value => value.some(item => item), {
    message: "Vous devez sélectionner au moins un rôle.",
  }),
});

const accessRoles = [
  { id: 'Admin', label: 'Admin' },
  { id: 'RH', label: 'RH' },
  { id: 'Manager', label: 'Manager' },
  { id: 'Everyone', label: 'Tout le monde' },
] as const;

export function AddDocumentForm() {
    const { toast } = useToast();
  const form = useForm<z.infer<typeof documentFormSchema>>({
    resolver: zodResolver(documentFormSchema),
    defaultValues: {
      name: '',
      access: [],
    },
  });

  function onSubmit(values: z.infer<typeof documentFormSchema>) {
    console.log(values);
    toast({
        title: "Document téléchargé",
        description: "Le document a été ajouté avec succès.",
      });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom du document</FormLabel>
              <FormControl>
                <Input placeholder="Ex: Rapport Q2 2024" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
            control={form.control}
            name="file"
            render={({ field }) => {
                return (
                <FormItem>
                    <FormLabel>Fichier</FormLabel>
                    <FormControl>
                    <Input type="file" {...form.register('file')} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                );
            }}
        />
        <FormField
          control={form.control}
          name="access"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Permissions d'accès</FormLabel>
              </div>
              {accessRoles.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="access"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Télécharger</Button>
      </form>
    </Form>
  );
}
