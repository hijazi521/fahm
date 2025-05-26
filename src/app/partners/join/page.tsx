import { PartnerProgramForm } from "@/components/forms/partner-program-form";
import { Users } from "lucide-react";

export default function JoinPartnerProgramPage() {
  return (
    <div className="space-y-8">
      <section className="text-center py-8">
        <Users className="mx-auto h-16 w-16 text-accent mb-4" />
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Join Our Partner Program
        </h1>
        <p className="mt-3 text-base text-muted-foreground sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl">
          We are excited to explore collaboration opportunities. Please fill out the form below to express your interest.
        </p>
      </section>
      
      <PartnerProgramForm />
    </div>
  );
}
