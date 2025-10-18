'use client';

import type { InternalMessage } from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

interface MessageViewProps {
  message: InternalMessage | null;
}

export function MessageView({ message }: MessageViewProps) {
  if (!message) {
    return (
      <div className="p-8 text-center text-muted-foreground">
        Sélectionnez un message pour le lire.
      </div>
    );
  }

  return (
    <div className="p-4 h-full flex flex-col">
      <div className="flex items-start gap-4">
        <Avatar className="h-10 w-10">
          <AvatarImage src={message.sender.avatarUrl} alt={message.sender.name} />
          <AvatarFallback>{message.sender.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="grid gap-1">
          <p className="font-semibold">{message.sender.name}</p>
          <p className="text-sm text-muted-foreground">{message.sender.email}</p>
        </div>
        <div className="ml-auto text-xs text-muted-foreground">
          {message.date}
        </div>
      </div>
      <Separator className="my-4" />
      <div className="flex-1 whitespace-pre-wrap text-sm">
        <h2 className="text-xl font-bold mb-4">{message.subject}</h2>
        {message.body}
      </div>
    </div>
  );
}
