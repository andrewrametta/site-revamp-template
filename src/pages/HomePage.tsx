import { Button, Container, Section } from "../components/ui";

export function HomePage() {
  return (
    <>
      <Section>
        <Container>
          <p
            style={{
              margin: 0,
              fontSize: "var(--text-sm)",
              fontWeight: 600,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "var(--color-text-muted)",
            }}
          >
            Template
          </p>
          <h1
            style={{
              margin: "var(--space-2) 0 var(--space-4)",
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-3xl)",
              lineHeight: "var(--leading-tight)",
            }}
          >
            Site revamp starter
          </h1>
          <p
            style={{
              margin: 0,
              maxWidth: "42rem",
              fontSize: "var(--text-lg)",
              color: "var(--color-text-muted)",
              lineHeight: "var(--leading-relaxed)",
            }}
          >
            Replace this page during a revamp. Use shared UI primitives and
            theme tokens only—see <code>.cursor/skills/site-revamp/</code> for
            the workflow your team runs in Cursor.
          </p>
          <div style={{ marginTop: "var(--space-8)", display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
            <Button type="button">Primary</Button>
            <Button type="button" variant="secondary">
              Secondary
            </Button>
            <Button type="button" variant="ghost">
              Ghost
            </Button>
          </div>
        </Container>
      </Section>
      <Section surface>
        <Container>
          <h2
            style={{
              margin: "0 0 var(--space-3)",
              fontSize: "var(--text-2xl)",
              fontFamily: "var(--font-display)",
            }}
          >
            Theming
          </h2>
          <p style={{ margin: 0, color: "var(--color-text-muted)", maxWidth: "40rem" }}>
            Set <code>VITE_SITE_THEME=client-example</code> to preview the example
            dark palette. Add new themes under <code>src/themes/</code> and register
            them in <code>src/lib/applyTheme.ts</code>.
          </p>
        </Container>
      </Section>
    </>
  );
}
