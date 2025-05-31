
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Toaster } from "@/components/ui/toaster";
// import {
//   SidebarProvider,
//   Sidebar,
//   SidebarHeader,
//   SidebarContent,
//   SidebarMenu,
//   SidebarMenuItem,
//   SidebarMenuButton,
//   SidebarInset,
// } from '@/components/ui/sidebar';
// import { Landmark, Stethoscope, Users, Scale } from 'lucide-react';
import { ThemeProvider } from "@/components/theme-provider";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/*
          <SidebarProvider defaultOpen={false}>
            <Sidebar side="left" collapsible="icon">
              <SidebarHeader>
                <h2 className="text-lg font-semibold text-sidebar-primary group-data-[collapsible=icon]:hidden">Categories</h2>
              </SidebarHeader>
              <SidebarContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton href="/coming-soon" tooltip="Politics">
                      <Landmark />
                      <span>Politics</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton href="/coming-soon" tooltip="Medicine">
                      <Stethoscope />
                      <span>Medicine</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton href="/coming-soon" tooltip="Society">
                      <Users />
                      <span>Society</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton href="/coming-soon" tooltip="Law">
                      <Scale />
                      <span>Law</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarContent>
            </Sidebar>
            <SidebarInset>
          */}
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow container mx-auto px-4 py-8">
                  {children}
                </main>
              </div>
          {/*
            </SidebarInset>
          </SidebarProvider>
          */}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
