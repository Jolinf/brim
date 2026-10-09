import { business, gallery, heroImage, offerings } from "@/lib/storefront";
import { CtaButton } from "./CtaButton";

const wrap = "mx-auto w-full max-w-layout px-4";

export function Header() {
  return (
    <header className={`${wrap} flex min-h-tap items-center justify-between py-3`}>
      <a href="#hero" className="display inline-block py-2.5 text-xl font-semibold tracking-[0.08em]">
        {business.name}
      </a>
      <nav aria-label="Page sections">
        <ul className="flex gap-5 text-[14px] leading-5 text-ink-muted">
          <li><a className="inline-block py-3 hover:text-ink" href="#offerings">Caps</a></li>
          <li><a className="inline-block py-3 hover:text-ink" href="#gallery">Gallery</a></li>
          <li><a className="inline-block py-3 hover:text-ink" href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export function Hero() {
  const lineup = heroImage;
  return (
    <section id="hero" aria-labelledby="hero-title" className={`${wrap} grid gap-6 pb-10 pt-4 desktop:grid-cols-[5fr_7fr] desktop:items-center desktop:gap-10 desktop:pt-10`}>
      <div className="max-w-content">
        <h1 id="hero-title" className="display text-[56px] font-semibold leading-[0.95] tablet:text-[80px]">
          {business.name}
        </h1>
        <p className="display mt-3 text-2xl leading-[30px] text-brand">{business.tagline}</p>
        <p className="mt-4 text-ink-muted">{business.intro}</p>
        <div className="mt-6 flex flex-col gap-3 tablet:flex-row">
          <CtaButton ctx={{ kind: "general" }} />
          <CtaButton ctx={{ kind: "general" }} channel="INSTAGRAM_DM" variant="secondary" />
        </div>
      </div>
      <img
        src={lineup.src}
        srcSet={lineup.srcSet}
        sizes="(min-width: 1024px) 640px, 100vw"
        width={lineup.width}
        height={lineup.height}
        alt={lineup.alt}
        fetchPriority="high"
        className="h-auto w-full rounded-md"
      />
    </section>
  );
}

function SectionTitle({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <div className="dashed-rule pt-6">
      <h2 id={id} className="display text-2xl font-medium leading-[30px]">{children}</h2>
    </div>
  );
}

export function Offerings() {
  return (
    <section id="offerings" aria-labelledby="offerings-title" className={`${wrap} py-10`}>
      <SectionTitle id="offerings-title">The caps</SectionTitle>
      <p className="mt-2 text-[14px] leading-5 text-ink-muted">DM for price. Tap a cap to ask about colours and availability, or see every colour in the gallery.</p>
      <ul className="mt-6 grid gap-4 tablet:grid-cols-2 desktop:grid-cols-4">
        {offerings.map((o) => (
          <li key={o.id} className="flex flex-col overflow-hidden rounded-md border border-dashed border-line bg-surface-raised">
            <img
              src={o.image.src}
              srcSet={o.image.srcSet}
              sizes="(min-width: 1024px) 270px, (min-width: 640px) 50vw, 100vw"
              width={o.image.width}
              height={o.image.height}
              alt={o.image.alt}
              loading="lazy"
              className={`aspect-square h-auto w-full ${o.fit === "contain" ? "bg-surface-sunken object-contain" : "object-cover"}`}
            />
            <div className="flex flex-1 flex-col gap-3 p-4">
              <h3 className="display text-lg font-medium leading-6">{o.name}</h3>
              <p className="text-ink-muted">{o.description}</p>
              <p className="text-[14px] leading-5">
                <span className="text-ink-muted">Colours shown: </span>
                {o.colours.join(", ")}
              </p>
              <p className="display text-lg font-semibold leading-6">{o.price ?? "DM for price"}</p>
              <CtaButton ctx={{ kind: "product", name: o.name, price: o.price }} variant="secondary" className="mt-auto w-full" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Gallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-title" className="py-10">
      <div className={wrap}>
        <SectionTitle id="gallery-title">Gallery</SectionTitle>
        <p className="mt-2 text-[14px] leading-5 text-ink-muted">Every colour we&apos;ve shot so far. Scroll sideways to see them all.</p>
      </div>
      {gallery.map((group) => (
        <div key={group.offeringId} className="mt-8">
          <h3 className={`${wrap} display text-lg font-medium leading-6`}>
            {group.title} <span className="font-body text-[14px] normal-case tracking-normal text-ink-muted">· {group.items.length} {group.items.length === 1 ? "photo" : "photos"}</span>
          </h3>
          <ul
            tabIndex={0}
            aria-label={`${group.title} colours, scroll sideways`}
            className={`${wrap} mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [scrollbar-color:var(--color-line)_transparent]`}
          >
            {group.items.map((item) => (
              <li key={item.image.src} className="shrink-0 snap-start">
                <figure>
                  <img
                    src={item.image.src}
                    srcSet={item.image.srcSet}
                    sizes="(min-width: 1024px) 560px, 80vw"
                    width={item.image.width}
                    height={item.image.height}
                    alt={item.image.alt}
                    loading="lazy"
                    className="h-auto max-h-72 w-auto max-w-[85vw] rounded-md desktop:max-h-80 desktop:max-w-[560px]"
                  />
                  <figcaption className="mt-2 text-[14px] leading-5">{item.caption}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-brand-tint">
      <div className={`${wrap} py-10`}>
        <h2 id="contact-title" className="display text-2xl font-medium leading-[30px]">Order a cap</h2>
        <p className="mt-2 max-w-content text-ink-muted">
          Message us with the cap and colour you want. Payment and next steps are arranged in the chat.
        </p>
        <div className="mt-6 flex flex-col gap-3 tablet:flex-row">
          <CtaButton ctx={{ kind: "general" }} />
          <CtaButton ctx={{ kind: "general" }} channel="INSTAGRAM_DM" variant="secondary" />
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className={`${wrap} flex flex-col gap-4 py-8 text-[14px] leading-5 text-ink-muted tablet:flex-row tablet:items-center tablet:justify-between`}>
      <div>
        <p className="display text-base font-semibold tracking-[0.08em] text-ink">{business.name}</p>
        <p>{business.city} · WhatsApp {business.whatsappDisplay}</p>
      </div>
      <ul className="flex gap-5" aria-label="Social profiles">
        {business.socials.map((s) => (
          <li key={s.label}>
            <a className="inline-block py-3 hover:text-ink" href={s.url} target="_blank" rel="noopener noreferrer">
              {s.label} {s.handle}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
