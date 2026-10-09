import { messaging } from "@/lib/storefront";
import { type Channel, type TemplateContext, labelFor, linkFor, resolveChannel } from "@/lib/messaging";

interface Props {
  ctx: TemplateContext;
  channel?: Channel;
  variant?: "primary" | "secondary";
  className?: string;
}

const base =
  "inline-flex min-h-tap items-center justify-center gap-2 rounded-button px-6 font-display text-[15px] font-medium leading-5 transition-colors";
const styles = {
  primary: "bg-brand text-on-brand hover:bg-[#e6b55a]",
  secondary: "border border-line-strong text-ink hover:border-ink",
};

/** A messaging button built from the shared contract. Renders nothing when no verified channel exists. */
export function CtaButton({ ctx, channel, variant = "primary", className = "" }: Props) {
  const resolved = resolveChannel(messaging, channel);
  if (!resolved) return null;
  const label = labelFor(resolved, ctx);
  const name = ctx.kind === "product" ? `${label}: ${ctx.name}` : label;
  return (
    <a
      href={linkFor(messaging, resolved, ctx)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} (opens ${resolved === "WHATSAPP" ? "WhatsApp" : "Instagram"})`}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {label}
    </a>
  );
}
