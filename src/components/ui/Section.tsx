import type { HTMLAttributes, ReactNode } from "react";

export type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  /** Visually distinct background using theme surface token */
  surface?: boolean;
};

export function Section({
  className = "",
  surface = false,
  children,
  ...rest
}: SectionProps) {
  const surfaceClass = surface ? "ui-section--surface" : "";
  return (
    <section className={`ui-section ${surfaceClass} ${className}`.trim()} {...rest}>
      {children}
    </section>
  );
}
