
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
  description: 'Publishing research papers and articles takes much time and money. Fahm makes research publishing effortless and free for everyone. A mix of our writing and independent submissions. We cover social issues and more.',
  keywords: [
    "Fahm", "Fahm Insights", "research papers", "articles", "publications", 
    "AI summarization", "paper summary", "research summary", "partner program", 
    "research", "insights", "academia", "knowledge", "academic articles", 
    "scientific papers", "literature review", "AI-powered summarization", 
    "natural language processing", "scholarly articles", "join partner program", 
    "submit research", "read research papers", "find academic articles", 
    "summarize academic papers", "AI tools for research", "Research platform", 
    "Academic platform", "Scientific research", "Summarize articles", 
    "Summarize publications", "Research highlights", "Key findings", 
    "AI for research", "AI research assistant", "Research technology", 
    "Computational science", "Information management", "Knowledge sharing", 
    "AI summary generator", "Paper analysis", "Literature summarization", 
    "Research abstracts", "Academic search", "Scientific literature", 
    "AI content summarization", "Research insights platform", 
    "Digital research tools", "Innovation in research", "Access academic papers", 
    "Understand complex research", "Simplify research papers", 
    "Efficient research reading", "Research analysis", "Quick paper summary", 
    "Academic knowledge", "Team", "Our Team", "Lead Researcher", 
    "Head of Engineering", "Chief Design Officer", "Dr. Aris Thorne", 
    "Samira Elara", "Kenji Tanaka", "Partner Program Application", 
    "Collaboration opportunities", "student exclusive platform", 
    "empower young minds", "professional publishing space", "opinion pieces", 
    "medicine research", "social issues research", "economics research", 
    "academic publishing for students", "non-profit initiative", 
    "free for students", "academic expression", "academic recognition", 
    "trusted outlet", "credible outlet", "showcase student research", 
    "modern global issues", "pressing global issues", "student recognition", 
    "publication process guidance", "experienced advisors", "academic integrity", 
    "in-house research", "high-definition display", "clean article display", 
    "website navigation links", "survey-style form"
  ],
  openGraph: {
    title: 'Fahm',
    description: 'Publishing research papers and articles takes much time and money. Fahm makes research publishing effortless and free for everyone. A mix of our writing and independent submissions. We cover social issues and more.',
    url: 'https://your-actual-domain.com', // TODO: Replace with your actual domain
    siteName: 'Fahm',
    images: [
      {
        url: '/fahm-social-preview.png', // Path relative to the public folder
        width: 1080,
        height: 1080,
        alt: 'Fahm - Free Research Publishing, Worldwide',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fahm',
    description: 'Publishing research papers and articles takes much time and money. Fahm makes research publishing effortless and free for everyone. A mix of our writing and independent submissions. We cover social issues and more.',
    images: ['/fahm-social-preview.png'], // Path relative to the public folder
    // TODO: You can add your Twitter handle here if you have one, e.g., creator: '@fahmsite',
  },
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
          // disableTransitionOnChange // Removed this line to default to false
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
