import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DUMMY_TEAM_MEMBERS, type TeamMember } from "@/lib/constants";
import Image from "next/image";
import { Users } from "lucide-react";

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
      <CardHeader className="items-center">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-accent mb-4">
          <Image
            src={member.imageUrl}
            alt={member.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={member.imageHint}
          />
        </div>
        <CardTitle className="text-xl">{member.name}</CardTitle>
        <CardDescription className="text-accent">{member.role}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-foreground/80">{member.bio}</p>
      </CardContent>
    </Card>
  );
}

export default function TeamPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-8">
        <Users className="mx-auto h-16 w-16 text-accent mb-4" />
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Meet Our Team
        </h1>
        <p className="mt-3 text-base text-muted-foreground sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl">
          Fahm Insights is powered by a dedicated team of researchers, engineers, and designers passionate about advancing knowledge and making complex information accessible to all.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {DUMMY_TEAM_MEMBERS.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </section>
    </div>
  );
}
