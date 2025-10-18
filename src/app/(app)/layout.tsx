'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PanelLeft, Search } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { MainNav } from '@/components/layout/main-nav';
import { UserNav } from '@/components/layout/user-nav';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-10 hidden flex-col border-r bg-background sm:flex transition-all duration-300 ease-in-out',
          isCollapsed ? 'w-20' : 'w-64'
        )}
      >
        <div className="flex h-16 items-center gap-2 border-b px-6">
          <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
            <Image src="/logo.png" alt="BlackBenAI Logo" width={32} height={32} className="h-8 w-8" />
            {!isCollapsed && <span>BlackBenAI</span>}
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-4">
          <MainNav isCollapsed={isCollapsed} />
        </div>
      </aside>
      <div
        className={cn(
          'flex flex-col sm:gap-4 sm:py-4 transition-all duration-300 ease-in-out',
          isCollapsed ? 'sm:pl-20' : 'sm:pl-64'
        )}
      >
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <div className="flex h-16 items-center border-b px-6">
                <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
                  <Image src="/logo.png" alt="BlackBenAI Logo" width={32} height={32} className="h-8 w-8" />
                  <span>BlackBenAI</span>
                </Link>
              </div>
              <div className="py-4">
                <MainNav isCollapsed={false} />
              </div>
            </SheetContent>
          </Sheet>
          <Button
            variant="outline"
            size="icon"
            className="hidden h-8 w-8 sm:flex"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <PanelLeft className="h-4 w-4" />
            <span className="sr-only">Toggle Menu</span>
          </Button>

          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
            />
          </div>
          <UserNav />
        </header>
        <main className="flex-1 p-4 sm:px-6 sm:py-0">{children}</main>
      </div>
    </div>
  );
}
