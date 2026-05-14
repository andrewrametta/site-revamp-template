import type { ReactNode } from "react";
import { Container } from "../ui";

export type PageMastProps = {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  image: { src: string; alt: string; contain?: boolean };
  actions?: ReactNode;
};

/**
 * Inner-route hero: gradient “chrome” band + gold rule + framed photography (matches home aesthetic).
 */
export function PageMast({ eyebrow, title, lede, image, actions }: PageMastProps) {
  const frameClass = `page-mast__frame${image.contain ? " page-mast__frame--contain" : ""}`.trim();
  return (
    <header className="page-mast page-mast--editorial">
      <Container className="page-mast__wrap">
        <div className="page-mast__grid">
          <div className="page-mast__copy">
            <p className="page-mast__eyebrow">{eyebrow}</p>
            <h1 className="page-mast__title">{title}</h1>
            {lede ? <div className="page-mast__lede">{lede}</div> : null}
            {actions ? <div className="page-mast__actions">{actions}</div> : null}
          </div>
          <figure className={frameClass}>
            <img alt={image.alt} decoding="async" fetchPriority="high" height={900} loading="eager" src={image.src} width={720} />
          </figure>
        </div>
      </Container>
    </header>
  );
}
