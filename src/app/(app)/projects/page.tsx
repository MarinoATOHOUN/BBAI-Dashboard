import { mockProjects, mockEmployees } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import type { Project } from '@/lib/types';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AddProjectForm } from './components/add-project-form';


const statusVariantMap: { [key in Project['status']]: 'default' | 'secondary' | 'outline' | 'destructive' } = {
  Completed: 'default',
  'In Progress': 'secondary',
  Planning: 'outline',
  'On Hold': 'destructive',
};

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">Suivi des Projets</h1>
            <p className="text-muted-foreground">Visualisez et gérez tous les projets internes.</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Nouveau projet
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-xl">
            <DialogHeader>
              <DialogTitle>Créer un nouveau projet</DialogTitle>
              <DialogDescription>
                Définissez les détails de votre nouveau projet.
              </DialogDescription>
            </DialogHeader>
            <AddProjectForm employees={mockEmployees} />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockProjects.map((project) => (
          <Card key={project.id} className="flex flex-col">
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <Badge variant={statusVariantMap[project.status]}>{project.status}</Badge>
              </div>
              <CardDescription className="line-clamp-2">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              
            </CardContent>
            <CardFooter className="flex justify-between items-center">
                <div className="text-sm text-muted-foreground">Membres:</div>
                 <div className="flex items-center">
                    <TooltipProvider>
                    {project.assignedMembers.map((member, index) => (
                      <Tooltip key={member.id}>
                        <TooltipTrigger asChild>
                            <Avatar className={`h-8 w-8 border-2 border-background -ml-2`}>
                                <AvatarImage src={member.avatarUrl} />
                                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{member.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                    </TooltipProvider>
                </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
