import { PROFILE_DATA } from "@/lib/data";

export function Footer() {
  return (
    <footer className="w-full bg-secondary/50 py-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} {PROFILE_DATA.name}. All rights reserved.</p>
          <p>Crafted with passion in Indore, India.</p>
        </div>
      </div>
    </footer>
  );
}
