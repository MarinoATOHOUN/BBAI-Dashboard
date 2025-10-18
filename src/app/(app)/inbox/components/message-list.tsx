'use client';

import { cn } from '@/lib/utils';
import type { InternalMessage } from '@/lib/types';

interface MessageListProps {
  messages: InternalMessage[];
  selectedMessage: InternalMessage | null;
  onSelectMessage: (message: InternalMessage) => void;
}

export function MessageList({ messages, selectedMessage, onSelectMessage }: MessageListProps) {
  return (
    <div className="flex flex-col gap-2 p-2">
      {messages.map((message) => (
        <button
          key={message.id}
          className={cn(
            'flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent',
            selectedMessage?.id === message.id && 'bg-muted'
          )}
          onClick={() => onSelectMessage(message)}
        >
          <div className="flex w-full flex-col gap-1">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="font-semibold">{message.sender.name}</div>
                {!message.read && (
                  <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                )}
              </div>
              <div className="ml-auto text-xs text-muted-foreground">
                {message.date}
              </div>
            </div>
            <div className="text-xs font-medium">{message.subject}</div>
          </div>
          <div className="line-clamp-2 text-xs text-muted-foreground">
            {message.body.substring(0, 300)}
          </div>
        </button>
      ))}
    </div>
  );
}
