import type { SvgIconName } from "@/types/ui/icon";

export interface NavigationItem {
  href: string;
  label: string;
  title: string;
  icon: SvgIconName;
}
