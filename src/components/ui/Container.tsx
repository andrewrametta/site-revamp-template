import type { HTMLAttributes, ReactNode } from "react";

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Container({ className = "", children, ...rest }: ContainerProps) {
  return (
    <div className={`ui-container ${className}`.trim()} {...rest}>
      {children}
    </div>
  );
}
