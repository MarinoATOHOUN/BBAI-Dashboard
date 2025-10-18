'use client';

import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal, ArrowUpDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import type { Employee } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


const statusVariantMap: { [key in Employee['status']]: 'default' | 'secondary' | 'destructive' } = {
    Active: 'default',
    'On Leave': 'secondary',
    Inactive: 'destructive',
}

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Nom
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
        const employee = row.original;
        return (
            <div className="flex items-center gap-3">
                <Avatar>
                    <AvatarImage src={employee.avatarUrl} alt={employee.name} />
                    <AvatarFallback>{employee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <span className="font-medium">{employee.name}</span>
                    <span className="text-sm text-muted-foreground">{employee.email}</span>
                </div>
            </div>
        )
    }
  },
  {
    accessorKey: 'role',
    header: 'Rôle',
  },
  {
    accessorKey: 'status',
    header: 'Statut',
    cell: ({ row }) => {
        const status = row.getValue('status') as Employee['status'];
        return <Badge variant={statusVariantMap[status]}>{status}</Badge>
    }
  },
  {
    accessorKey: 'hireDate',
    header: 'Date d\'embauche',
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const employee = row.original;

      return (
        <div className="text-right">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(employee.id)}>
              Copier l'ID du membre
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Modifier</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">Supprimer</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        </div>
      );
    },
  },
];
