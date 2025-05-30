
import Link from 'next/link';
import { Home, BookOpen, LayoutGrid, Handshake, UploadCloud, Users, ChevronDown, Info } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button"; // Import Button for DropdownMenuTrigger styling

const mainNavItems = [
  { href: '/', label: 'Home', icon: <Home className="h-5 w-5" />, hideLabelOnSm: true },
  { href: '/publishments', label: 'Publishments', icon: <LayoutGrid className="h-5 w-5" /> },
  { href: '/submit', label: 'Submit', icon: <UploadCloud className="h-5 w-5" /> },
  { href: '/contact', label: 'Connect', icon: <Users className="h-5 w-5" /> },
];

const aboutDropdownItems = [
  { href: '/mission', label: 'Our Mission', icon: <BookOpen className="h-5 w-5" /> },
  { href: '/partners', label: 'Our Partners', icon: <Handshake className="h-5 w-5" /> },
  { href: '/team', label: 'Our Team', icon: <Users className="h-5 w-5" /> },
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
            {mainNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center space-x-2 px-2 sm:px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors whitespace-nowrap"
                aria-label={item.label}
              >
                {item.icon}
                <span className={item.hideLabelOnSm ? 'hidden sm:inline' : 'sm:inline'}>{item.label}</span>
              </Link>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center space-x-2 px-2 sm:px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors whitespace-nowrap"
                  aria-label="About Fahm"
                >
                  <Info className="h-5 w-5" />
                  <span className="sm:inline">About</span>
                  <ChevronDown className="h-4 w-4 opacity-70 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-card border-border">
                {aboutDropdownItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild className="cursor-pointer hover:bg-accent hover:text-accent-foreground">
                    <Link href={item.href} className="flex items-center space-x-2 w-full">
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>
    </header>
  );
}
