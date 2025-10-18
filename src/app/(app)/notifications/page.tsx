
import { mockNotifications } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function NotificationsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
          <p className="text-muted-foreground">
            Consultez vos dernières mises à jour, alertes et messages.
          </p>
        </div>
        <Button variant="outline">Marquer tout comme lu</Button>
      </div>

      <div className="mx-auto max-w-3xl space-y-4">
        {mockNotifications.map((notification) => (
          <Card 
            key={notification.id}
            className={cn(
                "flex items-start gap-4 p-4",
                !notification.read && "bg-muted/50 border-primary/50"
            )}
            >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <notification.icon className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <p className="font-semibold">{notification.title}</p>
              <p className="text-sm text-muted-foreground">{notification.description}</p>
              <p className="text-xs text-muted-foreground mt-1">{notification.date}</p>
            </div>
            {!notification.read && (
                <div className="h-2.5 w-2.5 rounded-full bg-primary self-center" />
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
