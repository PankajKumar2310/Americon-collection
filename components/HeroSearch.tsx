"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Users } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/translations/LanguageProvider";

export function HeroSearch() {
  const { translations } = useLanguage();
  const isMobile = useIsMobile();

  const [date, setDate] = React.useState<DateRange | undefined>();
  const [guests, setGuests] = React.useState("2");
  const [open, setOpen] = React.useState(false);

  // 🔗 HOSTAWAY SEARCH
  const handleSearch = () => {
    if (!date?.from || !date?.to) {
      alert("Please select start and end dates");
      return;
    }

    const start = format(date.from, "yyyy-MM-dd");
    const end = format(date.to, "yyyy-MM-dd");

    const url = `https://www.americancollectionkc.com/search?start=${start}&end=${end}&numberOfGuests=${guests}`;

    window.open(url, "_blank");

    if (isMobile) setOpen(false);
  };

  const Form = (
    <div
      className={cn(
        "grid gap-3 w-full",
        isMobile
          ? "p-4"
          : "grid-cols-[2fr_1fr_auto] bg-card/80 backdrop-blur-md p-3 rounded-full border border-white/10 shadow-xl"
      )}
    >
      {/* DATE */}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              "h-14 w-full justify-start rounded-full px-6 text-base font-normal",
              !date && "text-muted-foreground",
              isMobile && "bg-card border"
            )}
          >
            <CalendarIcon className="mr-3 h-5 w-5" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "MMM dd, yyyy")} -{" "}
                  {format(date.to, "MMM dd, yyyy")}
                </>
              ) : (
                format(date.from, "MMM dd, yyyy")
              )
            ) : (
              translations.pages.home?.heroSearch?.pickDate ||
              "Pick your dates"
            )}
          </Button>
        </PopoverTrigger>

        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="range"
            selected={date}
            onSelect={setDate}
            numberOfMonths={isMobile ? 1 : 2}
            initialFocus
          />
        </PopoverContent>
      </Popover>

      {/* GUESTS */}
      <Select value={guests} onValueChange={setGuests}>
        <SelectTrigger className="h-14 rounded-full px-6">
          <div className="flex items-center">
            <Users className="mr-3 h-5 w-5" />
            <SelectValue
              placeholder={
                translations.pages.home?.heroSearch?.guests || "Guests"
              }
            />
          </div>
        </SelectTrigger>

        <SelectContent>
          {[...Array(12)].map((_, i) => (
            <SelectItem key={i + 1} value={`${i + 1}`}>
              {i + 1}{" "}
              {i === 0
                ? translations.pages.home?.heroSearch?.guestLabel || "Guest"
                : translations.pages.home?.heroSearch?.guestsLabel || "Guests"}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* BUTTON */}
      <Button
        onClick={handleSearch}
        className="h-14 rounded-full px-10 uppercase tracking-wider"
      >
        {translations.pages.home?.heroSearch?.checkAvailability ||
          "Check Availability"}
      </Button>
    </div>
  );

  /* ---------------- MOBILE DRAWER ---------------- */

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button className="w-full max-w-sm mx-auto rounded-full py-6 uppercase">
            {translations.pages.home?.heroSearch?.checkAvailability ||
              "Check Availability"}
          </Button>
        </DrawerTrigger>

        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="text-xl">
              {translations.pages.home?.heroSearch?.selectStay ||
                "Select your stay"}
            </DrawerTitle>
          </DrawerHeader>

          {Form}
        </DrawerContent>
      </Drawer>
    );
  }

  /* ---------------- DESKTOP ---------------- */

  return (
    <div className="max-w-4xl mx-auto w-full">
      {Form}
    </div>
  );
}
