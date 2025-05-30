
import Link from 'next/link';
import React from 'react';
import { Home, LayoutGrid, UploadCloud, Users, ChevronDown, Info, Menu, BookOpen, Handshake } from 'lucide-react';
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

// Items for the "About" dropdown menu (desktop) - No icons
const aboutDropdownDesktopItems = [
  { href: '/mission', label: 'Our Mission' },
  { href: '/partners', label: 'Our Partners' },
  { href: '/team', label: 'Our Team' },
];

// Items for the mobile navigation sheet
const allMobileNavItems = [
  { type: 'link' as const, href: '/', label: 'Home', icon: <Home className="h-5 w-5" /> },
  { type: 'link' as const, href: '/publishments', label: 'Publishments', icon: <LayoutGrid className="h-5 w-5" /> },
  { type: 'link' as const, href: '/submit', label: 'Submit', icon: <UploadCloud className="h-5 w-5" /> },
  { type: 'link' as const, href: '/contact', label: 'Connect', icon: <Users className="h-5 w-5" /> },
  { type: 'separator' as const },
  { type: 'link' as const, href: '/mission', label: 'Our Mission', icon: <BookOpen className="h-5 w-5" /> },
  { type: 'link' as const, href: '/partners', label: 'Our Partners', icon: <Handshake className="h-5 w-5" /> },
  { type: 'link' as const, href: '/team', label: 'Our Team', icon: <Users className="h-5 w-5" /> }, // Users icon can represent team
];


export function Header() {
  return (
    <header className="bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="text-3xl md:text-4xl font-bold text-primary hover:text-accent transition-colors" aria-label="Fahm Homepage">
            Fahm
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {mainNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="bg-card text-card-foreground shadow-md flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ease-in-out whitespace-nowrap"
                aria-label={item.label}
              >
                {item.icon}
                <span className={item.hideLabelOnSm ? 'hidden sm:inline' : 'sm:inline'}>{item.label}</span>
              </Link>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="bg-card text-card-foreground shadow-md flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ease-in-out whitespace-nowrap"
                  aria-label="About Fahm"
                >
                  <Info className="h-5 w-5" />
                  <span className="sm:inline">About</span>
                  <ChevronDown className="h-4 w-4 opacity-70 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                sideOffset={8} // Adjusted sideOffset
                className="bg-popover text-popover-foreground w-64 p-3 shadow-xl rounded-lg"
              >
                <div className="grid gap-1">
                  {aboutDropdownDesktopItems.map((item) => (
                    <DropdownMenuItem key={item.label} asChild className="cursor-pointer p-0 rounded-md">
                      <Link
                        href={item.href}
                        className="block px-3 py-2.5 text-sm w-full rounded-md hover:bg-muted/20 focus:bg-muted/20 focus:outline-none transition-colors duration-150"
                      >
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile Navigation Trigger */}
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
              <SheetContent side="right" className="w-[280px] sm:w-[320px] bg-card p-0 text-card-foreground">
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
