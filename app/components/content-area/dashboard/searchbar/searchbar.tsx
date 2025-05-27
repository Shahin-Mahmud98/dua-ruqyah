import { useState } from "react";
import {
  Calculator,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";
import Image from "next/image";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

export default function SearchBar() {
  const [selected, setSelected] = useState<string | null>(null);

  const suggestions = [
    {
      label: "Duas Importance",
      icon: "/dua.png",
      value: "duas",
    },
  ];

  const duas = [
    "The servant is dependent on his Lord",
    {
      title: "The most important thing to ask Allah for",
      items: [
        "4. Allah's guidance #1",
        "5. Allah's guidance #2",
        "6. Allah's guidance #3",
        "7. Allah's guidance #4",
        "8. The servant is dependent on his Lord #1",
      ],
    },
    "Ask for paradise & protection from fire",
  ];

  return (
    <div className="space-y-4">
      {/* Search Box */}
      <Command className="bg-white rounded-xl shadow p-4 max-w-md border]">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {suggestions.map((item, index) => (
              <CommandItem
                key={item.value}
                onSelect={() => setSelected(item.value)}
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={16}
                  height={16}
                  className="w-4 h-4 mr-2"
                />
                <span>{item.label}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="">
            {/* <CommandItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem> */}
            <CommandItem>
              {/* <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut> */}
            </CommandItem>
            {/* <CommandItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem> */}
          </CommandGroup>
        </CommandList>
      </Command>

      {/* Dua Card Rendered Below */}
      {selected === "duas" && (
        <div className="bg-white rounded-xl shadow p-4 max-w-md border">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/dua.png"
              alt="Dua icon"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h2 className="font-semibold text-lg">Duas Importance</h2>
              <p className="text-sm text-gray-500">7 Subcat | 50 Duas</p>
            </div>
          </div>

          {/* Dua List with vertical dotted line */}
          <div className="relative pl-4 border-l border-dashed border-gray-300 space-y-4">
            {duas.map((item, idx) => (
              <div key={idx}>
                {typeof item === "string" ? (
                  <p className="text-gray-700 text-sm">{item}</p>
                ) : (
                  <div>
                    <p className="text-emerald-700 font-semibold text-sm">
                      {item.title}
                    </p>
                    <ul className="mt-2 space-y-2">
                      {item.items.map((subItem, subIdx) => (
                        <li
                          key={subIdx}
                          className="flex items-start text-gray-700 text-sm"
                        >
                          <span className="mr-2">↪️</span>
                          {subItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/dua.png"
              alt="Dua icon"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h2 className="font-semibold text-lg">Duas Importance</h2>
              <p className="text-sm text-gray-500">7 Subcat | 50 Duas</p>
            </div>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/dua.png"
              alt="Dua icon"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h2 className="font-semibold text-lg">Duas Importance</h2>
              <p className="text-sm text-gray-500">7 Subcat | 50 Duas</p>
            </div>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/dua.png"
              alt="Dua icon"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h2 className="font-semibold text-lg">Duas Importance</h2>
              <p className="text-sm text-gray-500">7 Subcat | 50 Duas</p>
            </div>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/dua.png"
              alt="Dua icon"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h2 className="font-semibold text-lg">Duas Importance</h2>
              <p className="text-sm text-gray-500">7 Subcat | 50 Duas</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
