import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { PROFILE_DATA } from "@/lib/data";

export function HeroSection() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'hero-profile');

  return (
    <section id="home" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline text-primary">
                {PROFILE_DATA.name}
              </h1>
              <p className="text-2xl text-accent font-semibold">{PROFILE_DATA.title}</p>
              <p className="max-w-[600px] text-foreground/80 md:text-xl">
                Building tomorrow's web with precision, passion, and performance.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            {profileImage && (
              <div className="relative group">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <Card className="relative rounded-full overflow-hidden border-4 border-accent/50 shadow-2xl w-[250px] h-[250px] md:w-[350px] md:h-[350px]">
                  <CardContent className="p-0">
                    <Image
                      src={profileImage.imageUrl}
                      alt={profileImage.description}
                      width={600}
                      height={600}
                      className="aspect-square object-cover"
                      data-ai-hint={profileImage.imageHint}
                      priority
                    />
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
