import { contactInfo } from "@/data/contact";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10 text-sm text-muted md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Abhishek Kumar — XR Developer</p>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
          <a href={`mailto:${contactInfo.email}`} className="hover:text-accent">
            {contactInfo.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
