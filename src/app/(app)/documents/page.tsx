'use client';

import { useState } from 'react';
import { mockDocuments } from '@/lib/data';
import type { Document } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { UploadCloud, FileText, MoreHorizontal } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AddDocumentForm } from './components/add-document-form';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const accessRoles = [
  { id: 'Admin', label: 'Admin' },
  { id: 'RH', label: 'RH' },
  { id: 'Manager', label: 'Manager' },
  { id: 'Everyone', label: 'Tout le monde' },
] as const;

export default function DocumentsPage() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);

  const handleEditClick = (doc: Document) => {
    setSelectedDocument(doc);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (doc: Document) => {
    setSelectedDocument(doc);
    setIsDeleteAlertOpen(true);
  };

  const handleConfirmDelete = () => {
    if (selectedDocument) {
      console.log('Deleting document:', selectedDocument.id);
      // Here you would add the logic to delete the document from the state/backend
    }
    setIsDeleteAlertOpen(false);
    setSelectedDocument(null);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Gestion des Documents</h1>
          <p className="text-muted-foreground">Téléchargez et gérez les fichiers sécurisés de l'entreprise.</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <UploadCloud className="mr-2 h-4 w-4" />
              Télécharger un document
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Télécharger un document</DialogTitle>
              <DialogDescription>
                Ajoutez un nouveau document sécurisé au système.
              </DialogDescription>
            </DialogHeader>
            <AddDocumentForm />
          </DialogContent>
        </Dialog>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom du fichier</TableHead>
              <TableHead>Propriétaire</TableHead>
              <TableHead>Date de dépôt</TableHead>
              <TableHead>Accès</TableHead>
              <TableHead><span className="sr-only">Actions</span></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockDocuments.map((doc) => (
              <TableRow key={doc.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground"/>
                    {doc.name}
                  </div>
                </TableCell>
                <TableCell>{doc.owner}</TableCell>
                <TableCell>{doc.uploadDate}</TableCell>
                <TableCell className="space-x-1">
                    {doc.access.map(role => <Badge key={role} variant="outline">{role}</Badge>)}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Télécharger</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleEditClick(doc)}>Modifier les permissions</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive" onClick={() => handleDeleteClick(doc)}>Supprimer</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Edit Permissions Modal */}
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Modifier les permissions</DialogTitle>
            <DialogDescription>
              Gérez les rôles qui peuvent accéder au document : {selectedDocument?.name}
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 space-y-4">
            <Label>Permissions d'accès</Label>
            <div className="space-y-2">
            {accessRoles.map((role) => (
                <div key={role.id} className="flex items-center space-x-2">
                    <Checkbox
                        id={`edit-${role.id}`}
                        // In a real app, you'd manage the state of these checkboxes
                        defaultChecked={selectedDocument?.access.includes(role.id)}
                    />
                    <Label htmlFor={`edit-${role.id}`} className="font-normal">{role.label}</Label>
                </div>
            ))}
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditModalOpen(false)}>Annuler</Button>
            <Button onClick={() => setIsEditModalOpen(false)}>Sauvegarder</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>


      {/* Delete Confirmation Alert */}
      <AlertDialog open={isDeleteAlertOpen} onOpenChange={setIsDeleteAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Êtes-vous absolument sûr ?</AlertDialogTitle>
            <AlertDialogDescription>
              Cette action est irréversible. Le document "{selectedDocument?.name}" sera définitivement supprimé.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setSelectedDocument(null)}>Annuler</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmDelete} className="bg-destructive hover:bg-destructive/90">Supprimer</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

    </div>
  );
}
