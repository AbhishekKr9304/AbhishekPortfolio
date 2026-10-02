import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-[var(--duration-base)] focus-visible:outline-2";

const variants = {
  primary: "bg-accent text-background hover:bg-accent-strong",
  secondary: "border border-border text-foreground hover:border-accent hover:text-accent",
};

type Variant = keyof typeof variants;

export function ButtonLink({
  href,
  variant = "primary",
  className = "",
  children,
  ...rest
}: { href: string; variant?: Variant } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const classes = `${baseStyles} ${variants[variant]} ${className}`;
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={classes} {...rest}>
      {children}
    </a>
  );
}

export function Button({
  variant = "primary",
  className = "",
  children,
  ...rest
}: { variant?: Variant } & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}
