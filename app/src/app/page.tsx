import styles from "./page.module.css";

type Scene = {
  id: string;
  label: string;
  narration: string;
  visual: string;
  duration: string;
};

const scenes: Scene[] = [
  {
    id: "hook",
    label: "Hook",
    narration:
      "Stop what you’re doing! These 5 AI tools are so powerful, they almost feel illegal — but you can use them right now!",
    visual:
      "Fast punch-in on a creator snapping their fingers; high-energy glitch overlay and bold typography flying in.",
    duration: "0:00 - 0:04",
  },
  {
    id: "scene-chatgpt",
    label: "1 · ChatGPT",
    narration:
      "Number one — ChatGPT. It writes, codes, and even teaches you anything instantly.",
    visual:
      "Split screen of code auto-completing and a chat bubble animating answers in real time.",
    duration: "0:04 - 0:08",
  },
  {
    id: "scene-runway",
    label: "2 · Runway AI",
    narration:
      "Number two — Runway AI. Turn simple text prompts into cinematic videos.",
    visual:
      "Text prompt morphs into a stylized cinematic shot with smooth dolly movement.",
    duration: "0:08 - 0:12",
  },
  {
    id: "scene-jasper",
    label: "3 · Jasper AI",
    narration:
      "Number three — Jasper AI. It creates viral ads and captions like a pro marketer.",
    visual:
      "Swipe through eye-catching social posts with engagement counters blasting upward.",
    duration: "0:12 - 0:16",
  },
  {
    id: "scene-notion",
    label: "4 · Notion AI",
    narration:
      "Number four — Notion AI. It organizes your whole life automatically.",
    visual:
      "Dashboard tiles rearrange themselves on their own while checklists complete in sync with the beat.",
    duration: "0:16 - 0:20",
  },
  {
    id: "scene-synthesia",
    label: "5 · Synthesia",
    narration:
      "And number five — Synthesia. It creates talking AI avatars for your videos.",
    visual:
      "AI avatar comes to life on a virtual stage with customizable backgrounds swapping in.",
    duration: "0:20 - 0:24",
  },
  {
    id: "cta",
    label: "CTA",
    narration:
      "Follow AutomateIQ — we drop new AI tools every week that feel too good to be real.",
    visual:
      "Logo lockup with a bold subscribe button pulsing; confetti burst as the video ends.",
    duration: "0:24 - 0:28",
  },
];

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <main className={styles.frame}>
        <header className={styles.header}>
          <span className={styles.badge}>Sora AI Motion Script</span>
          <h1 className={styles.title}>
            Stop what you’re doing! These 5 AI tools feel illegal.
          </h1>
          <p className={styles.subtitle}>
            Ready-to-render video blueprint for your next viral Sora AI clip.
            Every beat, shot, and line is mapped out for a 28-second banger.
          </p>
        </header>

        <section className={styles.timeline}>
          {scenes.map((scene) => (
            <article key={scene.id} className={styles.card}>
              <div className={styles.cardMeta}>
                <span className={styles.timecode}>{scene.duration}</span>
                <span className={styles.label}>{scene.label}</span>
              </div>
              <p className={styles.narration}>{scene.narration}</p>
              <p className={styles.visual}>
                <span className={styles.visualLabel}>Visual Direction</span>
                {scene.visual}
              </p>
            </article>
          ))}
        </section>

        <section className={styles.ctaBlock}>
          <div className={styles.ctaCopy}>
            <h2>Cut. Export. Upload.</h2>
            <p>
              Drop this script into Sora, render each beat, and stitch with the
              pacing above. When the video hits, tag{" "}
              <strong>@AutomateIQ</strong> and we’ll feature your edit.
            </p>
          </div>
          <a
            className={styles.ctaButton}
            href="https://www.tiktok.com/@automateiq"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow AutomateIQ
          </a>
        </section>

        <footer className={styles.footer}>
          <span className={styles.footerPulse} aria-hidden="true" />
          Rendered for Sora • upbeat trap beat • 24 fps • 9:16 vertical
        </footer>
      </main>
      <div className={styles.gradientGlow} aria-hidden="true" />
      <div className={styles.noiseLayer} aria-hidden="true" />
    </div>
  );
}
