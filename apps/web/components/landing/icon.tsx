import {
  Ban,
  Bell,
  CalendarDays,
  Check,
  CheckCircle,
  ClipboardCheck,
  Download,
  Lock,
  MessageSquare,
  Mic,
  MinusCircle,
  Package,
  Send,
  Shield,
  ShoppingCart,
  Sparkles,
  Sunrise,
  Users,
  Utensils,
  XCircle,
  type LucideIcon,
} from "lucide-react";

/**
 * Explicit map rather than a dynamic `lucide-react` lookup: content files refer
 * to icons by name, and this keeps the bundle to the icons actually used while
 * making an unknown name a type error instead of a runtime blank.
 */
const ICONS = {
  Ban,
  Bell,
  CalendarDays,
  Check,
  CheckCircle,
  ClipboardCheck,
  Download,
  Lock,
  MessageSquare,
  Mic,
  MinusCircle,
  Package,
  Send,
  Shield,
  ShoppingCart,
  Sparkles,
  Sunrise,
  Users,
  Utensils,
  XCircle,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof ICONS;

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Component = ICONS[name as IconName];
  if (!Component) return null;
  // Decorative by default; the surrounding text carries the meaning.
  return (
    <Component className={className} aria-hidden="true" strokeWidth={1.75} />
  );
}
