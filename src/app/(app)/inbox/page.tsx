'use client';

import { useState } from 'react';
import { mockMessages, mockEmployees } from '@/lib/data';
import type { InternalMessage, Employee } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { FileEdit } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { Separator } from '@/components/ui/separator';
import { MessageList } from './components/message-list';
import { MessageView } from './components/message-view';
import { ComposeMessageForm } from './components/compose-message-form';

export default function InboxPage() {
  const [selectedMessage, setSelectedMessage] = useState<InternalMessage | null>(mockMessages[0] || null);

  return (
    <div className="h-[calc(100vh-theme(spacing.20))] flex flex-col">
      <div className="flex items-center justify-between p-4 border-b">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Messagerie</h1>
          <p className="text-muted-foreground">Boîte de réception interne.</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <FileEdit className="mr-2 h-4 w-4" />
              Composer
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle>Nouveau Message</DialogTitle>
              <DialogDescription>
                Envoyer un message à un membre de l'équipe.
              </DialogDescription>
            </DialogHeader>
            <ComposeMessageForm employees={mockEmployees} />
          </DialogContent>
        </Dialog>
      </div>

      <ResizablePanelGroup
        direction="horizontal"
        className="flex-1 items-stretch"
      >
        <ResizablePanel defaultSize={30} minSize={20} maxSize={40}>
          <div className="h-full overflow-y-auto">
            <MessageList messages={mockMessages} selectedMessage={selectedMessage} onSelectMessage={setSelectedMessage} />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={70}>
          <MessageView message={selectedMessage} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
