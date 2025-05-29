
import Link from 'next/link';
import { BookOpen, LayoutGrid, Handshake, Mail, UploadCloud, Users, MessageSquare } from 'lucide-react';

const navItems = [
  { href: '/mission', label: 'Mission', icon: <BookOpen className="h-5 w-5" /> },
  { href: '/publishments', label: 'Publishments', icon: <LayoutGrid className="h-5 w-5" /> },
  { href: '/partners', label: 'Partners', icon: <Handshake className="h-5 w-5" /> },
  { href: '/submit', label: 'Submit', icon: <UploadCloud className="h-5 w-5" /> },
  { href: '/contact', label: 'Connect', icon: <Users className="h-5 w-5" /> }, // Changed label and icon
];

export function Header() {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-primary hover:text-accent transition-colors" aria-label="Fahm Homepage">
            Fahm
          </Link>
          <nav className="flex items-center space-x-1 sm:space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center space-x-2 px-2 sm:px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label={item.label}
              >
                {item.icon}
                <span className="hidden sm:inline whitespace-nowrap">{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
