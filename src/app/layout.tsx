
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Toaster } from "@/components/ui/toaster";
import { SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset } from '@/components/ui/sidebar';
import Link from 'next/link';
import { Landmark, HeartPulse, Users, Scale, LayoutGrid } from 'lucide-react';
import React from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Fahm',
  description: 'Research papers and articles, summarized by AI.',
};

const categories = [
  { name: 'Politics', href: '/coming-soon', icon: <Landmark /> },
  { name: 'Medicine', href: '/coming-soon', icon: <HeartPulse /> },
  { name: 'Society', href: '/coming-soon', icon: <Users /> },
  { name: 'Law', href: '/coming-soon', icon: <Scale /> },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SidebarProvider defaultOpen={false}>
          <Sidebar side="left" variant="sidebar" collapsible="icon" className="border-r border-sidebar-border hidden md:flex"> {/* hidden on mobile, mobile uses sheet */}
            <SidebarHeader className="p-4 border-b border-sidebar-border flex items-center justify-between h-16 md:h-20">
              {/* When expanded, show title */}
              <h2 className="text-xl font-semibold text-sidebar-primary group-data-[state=expanded]:block group-data-[state=collapsed]:hidden">Categories</h2>
              {/* When collapsed, show main icon */}
              <div className="group-data-[state=collapsed]:flex group-data-[state=expanded]:hidden mx-auto">
                <LayoutGrid className="h-7 w-7 text-sidebar-primary" />
              </div>
            </SidebarHeader>
            <SidebarContent className="p-2">
              <SidebarMenu>
                {categories.map((category) => (
                  <SidebarMenuItem key={category.name}>
                    <SidebarMenuButton 
                      asChild 
                      tooltip={{ content: category.name, side: 'right', align: 'center' }} 
                      size="default" 
                      className="group-data-[state=collapsed]:justify-center group-data-[state=collapsed]:w-10 group-data-[state=collapsed]:h-10"
                    >
                      <Link href={category.href} className="flex items-center">
                        {React.cloneElement(category.icon, { className: "h-5 w-5 flex-shrink-0" })}
                        <span className="ml-3 group-data-[state=collapsed]:hidden">{category.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarContent>
          </Sidebar>
          
          <SidebarInset className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                 {children}
            </main>
          </SidebarInset>
          
          <Toaster />
        </SidebarProvider>
      </body>
    </html>
  );
}
