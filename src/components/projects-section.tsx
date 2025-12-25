import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Globe } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">My Projects</h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of the projects I've worked on.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <Card key={project.title} className="group flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <CardHeader className="p-0">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={project.imageHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col p-6">
                <CardTitle className="mb-2 text-xl font-bold">{project.title}</CardTitle>
                <p className="flex-1 text-sm text-muted-foreground">{project.description}</p>
                <div className="my-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <div className="mt-auto flex items-center gap-4">
                  {project.liveUrl && (
                    <Button asChild variant="outline" size="sm">
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Globe className="mr-2 h-4 w-4" /> Live Demo
                      </Link>
                    </Button>
                  )}
                   <Button asChild variant="ghost" size="sm">
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </Link>
                    </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
