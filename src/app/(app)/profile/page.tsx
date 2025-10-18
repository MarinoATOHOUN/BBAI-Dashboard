import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Mon Profil</h1>
        <p className="text-muted-foreground">Gérez les informations de votre compte.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <Card>
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src="https://picsum.photos/seed/amina/100/100" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-semibold">Amina Diallo</h2>
              <p className="text-sm text-muted-foreground">Admin</p>
              <p className="text-sm text-muted-foreground mt-1">amina.d@blackben.ai</p>
              <Button variant="outline" className="mt-4">Changer l'avatar</Button>
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-2">
            <Card>
                <CardHeader>
                    <CardTitle>Informations Personnelles</CardTitle>
                    <CardDescription>Mettez à jour vos informations personnelles.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Nom Complet</Label>
                        <Input id="name" defaultValue="Amina Diallo" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="amina.d@blackben.ai" disabled/>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button>Sauvegarder les changements</Button>
                </CardFooter>
            </Card>

            <Separator className="my-6" />

            <Card>
                <CardHeader>
                    <CardTitle>Changer le mot de passe</CardTitle>
                    <CardDescription>Mettez à jour votre mot de passe. Il est recommandé d'utiliser un mot de passe fort.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="current-password">Mot de passe actuel</Label>
                        <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="new-password">Nouveau mot de passe</Label>
                        <Input id="new-password" type="password" />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button>Mettre à jour</Button>
                </CardFooter>
            </Card>
        </div>
      </div>
    </div>
  );
}
