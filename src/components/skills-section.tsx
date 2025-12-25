import { SKILLS } from "@/lib/data";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Skills & Technologies</h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A glimpse into the technologies I work with to create modern, scalable solutions.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 py-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 sm:gap-6">
          {SKILLS.map((skill) => (
            <Card key={skill.name} className="flex flex-col items-center justify-center p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-card/90">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 mb-4">
                <skill.icon className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="text-sm font-medium">{skill.name}</CardTitle>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
