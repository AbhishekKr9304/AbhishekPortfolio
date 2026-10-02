import { contactInfo } from "@/data/contact";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10 text-sm text-muted md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Abhishek Kumar — XR Developer</p>
        <a href={`mailto:${contactInfo.email}`} className="hover:text-accent">
          {contactInfo.email}
        </a>
      </div>
    </footer>
  );
}
