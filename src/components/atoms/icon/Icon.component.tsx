import { Icon as IconifyIcon } from "@iconify/react";
import { IconProps } from "./Icon.interface";

export const Icon: React.FC<IconProps> = ({ icon, ...rest }: IconProps) => {
  return <IconifyIcon icon={icon} fontSize="1.5rem" {...rest} />;
};
