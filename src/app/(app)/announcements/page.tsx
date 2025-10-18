
import { mockAnnouncements } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AddAnnouncementForm } from './components/add-announcement-form';

export default function AnnouncementsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">Annonces Internes</h1>
            <p className="text-muted-foreground">Retrouvez les dernières nouvelles et mises à jour de BlackBenAI.</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Nouvelle annonce
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Créer une nouvelle annonce</DialogTitle>
              <DialogDescription>
                Rédigez et publiez une nouvelle annonce pour l'équipe.
              </DialogDescription>
            </DialogHeader>
            <AddAnnouncementForm />
          </DialogContent>
        </Dialog>
      </div>

      <div className="mx-auto max-w-3xl space-y-6">
        {mockAnnouncements.map((announcement) => (
          <Card key={announcement.id}>
            <CardHeader>
              <CardTitle>{announcement.title}</CardTitle>
              <CardDescription>
                <div className="flex items-center gap-2 text-sm mt-2">
                    <Avatar className="h-6 w-6">
                        <AvatarImage src={announcement.authorAvatarUrl} />
                        <AvatarFallback>{announcement.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span>{announcement.author}</span>
                    <span className="text-muted-foreground">&middot;</span>
                    <span className="text-muted-foreground">{announcement.date}</span>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{announcement.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
