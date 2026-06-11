import BookIcon from "./book.icon";
import DeviceIcon from "./device.icon";
import LightDark from "./light-dark.icon";
import Play from "./play-pause.icon";
import PlusIcon from "./plus.icon";
import SearchIcon from "./search.icon";
import ToggleIcon from "./toggle.icon";
import SpaceInvaderIcon from "./space-invader.icon";
import TrophyIcon from "./trophy.icon";
import type { SvgIconButtonProps, SvgIconName, SvgIconSize } from "@/types/ui/icon";
export class Config<T> {
  public variant: Variant<T>;
  constructor(public value: T) {
    this.variant = value as Variant<T>;
  }
}
export type Variant<T> = T;

export type SvgIconProps<Config> = {
  className?: string;
  size?: SvgIconSize;
  config?: Config;
};

export const SvgIcon = ({
  icon,
  className,
  size = 5,
  variant,
  title,
  onClick,
}: SvgIconButtonProps) => {
  return (
    <span onClick={onClick} title={title}>
      {
        getSVGIcon(
          icon, size, className, variant
        )
      }
    </span>
  );
};

export default SvgIcon;

function getSVGIcon(
  icon: SvgIconName,
  size?: SvgIconSize,
  className: string = "",
  variant?: any
) {
  switch (icon) {
    case "Book":
      return <BookIcon size={size} className={className} />;
    case "Device":
      return <DeviceIcon size={size} className={className} />;
    case "Toggle":
      return (
        <ToggleIcon
          size={size}
          className={className}
          config={new Config<Variant<"on" | "off">>(variant)}
        />
      );
    case "Search":
      return <SearchIcon size={size} className={className} />;
    case "Plus":
      return <PlusIcon size={size} className={className} />;
    case "LightDark":
      return (
        <LightDark
          size={size}
          className={className}
          config={new Config<Variant<"light" | "dark">>(variant)}
        />
      );
    case "Play":
      return (
        <Play
          size={size}
          className={className}
          config={new Config<Variant<"play" | "pause">>(variant)}
        />
      );
    case "SpaceInvader":
      return <SpaceInvaderIcon size={size} className={className} />;
    case "Trophy":
      return <TrophyIcon size={size} className={className} />;

    default:
      return <></>;
  }
}
