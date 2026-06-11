import type { MouseEventHandler } from "react";

export type SvgIconName =
  | "Book"
  | "Device"
  | "Toggle"
  | "Search"
  | "LightDark"
  | "Play"
  | "Plus"
  | "SpaceInvader"
  | "Trophy";

export type SvgIconSize =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20;

export interface SvgIconButtonProps {
  icon: SvgIconName;
  className?: string;
  onClick?: MouseEventHandler<HTMLSpanElement>;
  size?: SvgIconSize;
  variant?: unknown;
  title?: string;
}
