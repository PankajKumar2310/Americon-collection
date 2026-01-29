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
  const [guests, setGuests] = React.useState<string>("2");
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleSearch = () => {
    console.log("Searching with:", { date, guests });
    if (isMobile) {
      setIsDrawerOpen(false);
    }
  };

  const searchForm = (
    <div className={cn("grid items-start gap-4", isMobile ? "p-4" : "grid-cols-[2fr_1fr_auto] bg-card/80 backdrop-blur-sm p-3 rounded-full shadow-2xl shadow-black/30 border border-white/10")}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"ghost"}
            className={cn(
              "w-full justify-start text-left font-normal h-14 rounded-full px-6 text-base",
              !date && "text-muted-foreground",
              isMobile && "bg-card border border-white/10"
            )}
          >
            <CalendarIcon className="mr-4 h-5 w-5" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>{translations.pages.home?.heroSearch?.pickDate || "Pick your dates"}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 bg-card border-white/10" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>

      <Select value={guests} onValueChange={setGuests}>
        <SelectTrigger className="h-14 rounded-full px-6 text-base border-0 data-[state=open]:bg-card/90 focus:ring-0 focus:ring-offset-0 bg-transparent hover:bg-card/90">
          <div className="flex items-center">
            <Users className="mr-4 h-5 w-5" />
            <SelectValue placeholder={translations.pages.home?.heroSearch?.guests || "Guests"} />
          </div>
        </SelectTrigger>
        <SelectContent className="bg-card border-white/10">
          {[...Array(12)].map((_, i) => (
            <SelectItem key={i + 1} value={`${i + 1}`}>
              {i + 1} {i === 0 ? (translations.pages.home?.heroSearch?.guestLabel || "Guest") : (translations.pages.home?.heroSearch?.guestsLabel || "Guests")}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button onClick={handleSearch} size="lg" className="h-14 rounded-full px-10 text-base font-sans uppercase tracking-widest bg-primary text-primary-foreground hover:bg-primary/90">
        {translations.pages.home?.heroSearch?.checkAvailability || "Check Availability"}
      </Button>
    </div>
  );

  if (isMobile) {
    return (
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerTrigger asChild>
          <Button size="lg" className="w-full max-w-sm bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-sans uppercase tracking-widest">
            {translations.pages.home?.heroSearch?.checkAvailability || "Check Availability"}
          </Button>
        </DrawerTrigger>
        <DrawerContent className="bg-background border-t-white/10">
          <DrawerHeader className="text-left">
            <DrawerTitle className="font-serif text-2xl">{translations.pages.home?.heroSearch?.selectStay || "Select your stay"}</DrawerTitle>
          </DrawerHeader>
          <div className="p-4">{searchForm}</div>
        </DrawerContent>
      </Drawer>
    );
  }

  return searchForm;
}