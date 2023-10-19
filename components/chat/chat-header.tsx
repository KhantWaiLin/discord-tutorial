import { Hash } from "lucide-react";
import { MobileToggle } from "../modbile-toggle";
import UserAvatar from "@/components/user-avatar";

interface ChatHeaderProps {
  serverId: string;
  type: "channel" | "conversation";
  name: string;
  imageUrl?: string;
}

export const ChatHeader = ({
  serverId,
  type,
  name,
  imageUrl,
}: ChatHeaderProps) => {
  return (
    <div
      className="text-md font-semibold px-3 flex items-center h-12 border-neutral-200
    border-neutral-800 border-b-2"
    >
      <MobileToggle serverId={serverId} />
      {type === "channel" && (
        <Hash className="w-5 h-5 text-zinc-500 dark:text-zinc-400 mr-2" />
      )}
      {type === "conversation" && (
        <UserAvatar src={imageUrl} className="w-8 h-8 md:w-8 md:h-8 mr-2" />
      )}
      <p className="font-semibold text-md text-black dark:text-white">{name}</p>
    </div>
  );
};
