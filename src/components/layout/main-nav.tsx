'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  FolderKanban,
  FileText,
  Megaphone,
  CircleDollarSign,
  UserCircle,
  Bell,
  Building,
  Inbox,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/employees', label: 'Employés', icon: Building },
  { href: '/team', label: 'Équipe', icon: Users },
  { href: '/projects', label: 'Projets', icon: FolderKanban },
  { href: '/documents', label: 'Documents', icon: FileText },
  { href: '/announcements', label: 'Annonces', icon: Megaphone },
  { href: '/finances', label: 'Finances', icon: CircleDollarSign },
  { href: '/inbox', label: 'Messagerie', icon: Inbox },
  { href: '/notifications', label: 'Notifications', icon: Bell },
  { href: '/profile', label: 'Profil', icon: UserCircle },
];

export function MainNav({ isCollapsed }: { isCollapsed: boolean }) {
  const pathname = usePathname();

  const renderLink = (item: typeof navItems[0]) => {
    const isActive = pathname.startsWith(item.href);
    const linkClasses = cn(
      'flex items-center justify-start gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
      isActive && 'bg-muted text-primary'
    );
    const Icon = item.icon;

    if (isCollapsed) {
      return (
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <Link href={item.href} className={`${linkClasses} justify-center`}>
                <Icon className="h-5 w-5" />
                <span className="sr-only">{item.label}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">{item.label}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    }

    return (
      <Link href={item.href} className={linkClasses}>
        <Icon className="h-4 w-4" />
        {item.label}
      </Link>
    );
  };

  return (
    <nav className="grid items-start gap-2 text-sm font-medium">
      {navItems.map((item) => (
        <div key={item.href}>{renderLink(item)}</div>
      ))}
    </nav>
  );
}
