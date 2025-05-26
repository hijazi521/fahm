
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// Removed DUMMY_TEAM_MEMBERS and TeamMember type import
// import { DUMMY_TEAM_MEMBERS, type TeamMember } from "@/lib/constants";
// Removed Image import as TeamMemberCard is removed
// import Image from "next/image";
import { Users } from "lucide-react";

// Removed TeamMemberCard component as it's no longer used
// function TeamMemberCard({ member }: { member: TeamMember }) {
//   return (
//     <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 bg-card">
//       <CardHeader className="items-center">
//         <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-accent mb-4">
//           <Image
//             src={member.imageUrl}
//             alt={member.name}
//             layout="fill"
//             objectFit="cover"
//             data-ai-hint={member.imageHint}
//           />
//         </div>
//         <CardTitle className="text-xl">{member.name}</CardTitle>
//         <CardDescription className="text-accent">{member.role}</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <p className="text-sm text-foreground/80">{member.bio}</p>
//       </CardContent>
//     </Card>
//   );
// }

export default function TeamPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-8">
        <Users className="mx-auto h-16 w-16 text-accent mb-4" />
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Meet Our Team
        </h1>
        <p className="mt-3 text-base text-muted-foreground sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl">
          Fahm is powered by a dedicated team of researchers, engineers, and designers passionate about advancing knowledge and making complex information accessible to all.
        </p>
      </section>

      <section>
        <Card className="shadow-lg">
          <CardContent className="py-12 text-center">
            <p className="text-xl text-muted-foreground">
              will be updated
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
