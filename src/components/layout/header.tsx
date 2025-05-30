
import Link from 'next/link';
import React from 'react';
import { Home, BookOpen, LayoutGrid, Handshake, UploadCloud, Users, ChevronDown, Info, Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const mainNavItems = [
  { href: '/', label: 'Home', icon: <Home className="h-5 w-5" />, hideLabelOnSm: true },
  { href: '/publishments', label: 'Publishments', icon: <LayoutGrid className="h-5 w-5" /> },
  { href: '/submit', label: 'Submit', icon: <UploadCloud className="h-5 w-5" /> },
  { href: '/contact', label: 'Connect', icon: <Users className="h-5 w-5" /> },
];

const aboutDropdownDesktopItems = [
  { href: '/mission', label: 'Our Mission', icon: <BookOpen className="h-5 w-5" /> },
  { href: '/partners', label: 'Our Partners', icon: <Handshake className="h-5 w-5" /> },
  { href: '/team', label: 'Our Team', icon: <Users className="h-5 w-5" /> },
];

const allMobileNavItems = [
  { type: 'link' as const, href: '/', label: 'Home', icon: <Home className="h-5 w-5" /> },
  { type: 'link' as const, href: '/publishments', label: 'Publishments', icon: <LayoutGrid className="h-5 w-5" /> },
  { type: 'link' as const, href: '/submit', label: 'Submit', icon: <UploadCloud className="h-5 w-5" /> },
  { type: 'link' as const, href: '/contact', label: 'Connect', icon: <Users className="h-5 w-5" /> },
  { type: 'separator' as const },
  { type: 'link' as const, href: '/mission', label: 'Our Mission', icon: <BookOpen className="h-5 w-5" /> },
  { type: 'link' as const, href: '/partners', label: 'Our Partners', icon: <Handshake className="h-5 w-5" /> },
  { type: 'link' as const, href: '/team', label: 'Our Team', icon: <Users className="h-5 w-5" /> },
];

export function Header() {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary hover:text-accent transition-colors" aria-label="Fahm Homepage">
            Fahm
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 sm:space-x-2">
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
                {aboutDropdownDesktopItems.map((item) => (
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

          {/* Mobile Navigation Trigger (Hamburger) */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-foreground hover:bg-accent hover:text-accent-foreground"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px] bg-card p-0 text-foreground">
                <SheetHeader className="p-4 border-b border-border">
                  <SheetTitle className="text-xl text-primary">Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-1 p-4">
                  {allMobileNavItems.map((item, index) => {
                    if (item.type === 'separator') {
                      return <Separator key={`sep-${index}`} className="my-2 bg-border" />;
                    }
                    return (
                      <SheetClose asChild key={item.label}>
                        <Link
                          href={item.href}
                          className="flex items-center space-x-3 px-3 py-3 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                          aria-label={item.label}
                        >
                          {item.icon && React.cloneElement(item.icon as React.ReactElement, { className: "h-6 w-6" })}
                          <span>{item.label}</span>
                        </Link>
                      </SheetClose>
                    );
                  })}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
