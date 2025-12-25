import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { PROFILE_DATA } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: PROFILE_DATA.email,
    href: `mailto:${PROFILE_DATA.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: PROFILE_DATA.phone,
    href: `tel:${PROFILE_DATA.phone}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: PROFILE_DATA.location,
    href: PROFILE_DATA.locationLink,
    target: "_blank",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Get In Touch</h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm open to discussing new projects and opportunities. Feel free to reach out.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-4xl gap-6 py-12 sm:grid-cols-1 md:grid-cols-3">
          {contactInfo.map((item) => (
            <Card key={item.label} className="group text-center hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <Link href={item.href} target={item.target} rel="noopener noreferrer" className="flex flex-col items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground group-hover:bg-accent transition-colors duration-300">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg">{item.label}</h3>
                    <p className="text-sm text-muted-foreground break-all group-hover:text-accent transition-colors duration-300">{item.value}</p>
                  </div>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
