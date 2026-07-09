"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

const items = [
  ["light", Sun],
  ["dark", Moon],
] as const;

export function ThemeToggle({
  className,
  ...props
}: React.ComponentProps<"button">) {
  const { setTheme, resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const value = mounted ? resolvedTheme : null;

  return (
    <button
      type="button"
      aria-label="Toggle Theme"
      data-theme-toggle=""
      onClick={() => setTheme(value === "light" ? "dark" : "light")}
      className={cn(
        "inline-flex items-center rounded-full border border-gray-200 p-1 dark:border-gray-800 cursor-pointer",
        className,
      )}
      {...props}
    >
      {items.map(([key, Icon]) => (
        <Icon
          key={key}
          fill="currentColor"
          className={cn(
            "size-6.5 rounded-full p-1.5",
            value === key
              ? "bg-accent text-accent-foreground"
              : "text-muted-foreground",
          )}
        />
      ))}
    </button>
  );
}
