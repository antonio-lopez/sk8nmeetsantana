import { Sheet, SheetContent, SheetTrigger } from "../ui/Sheet";
import { Button } from "../ui/ShadCNButton";
import { LucideMenu } from "lucide-react";
import MeetupPhoto from "./MeetupPhoto";
import type { NavbarLink } from "@/lib/interfaces";

const mobileLinks: Array<NavbarLink> = [
  {
    id: 0,
    route: "/",
    routeName: "Home",
  },
  {
    id: 1,
    route: "/about",
    routeName: "About Us",
  },
  {
    id: 2,
    route: "/mission",
    routeName: "Mission",
  },
  {
    id: 3,
    route: "/current-meetup",
    routeName: "Current Meetup",
  },
  {
    id: 4,
    route: "/past-meetups",
    routeName: "Past Meetups",
  },
];

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost">
          <LucideMenu />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="top">
        <ul className="mt-8 grid gap-6 p-6 text-center text-3xl text-primary">
          {mobileLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.route}>{link.routeName}</a>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 flex items-center justify-center">
          <MeetupPhoto
            smallImg="https://res.cloudinary.com/dzhengjen/image/upload/v1705266116/assets/logos/Sk8_n_meet-_Santa_Ana_log_text_only_white_sm-300w_yxuxy7.webp"
            largeImg="https://res.cloudinary.com/dzhengjen/image/upload/v1705266116/assets/logos/Sk8_n_meet-_Santa_Ana_log_text_only_white_sm-300w_yxuxy7.webp"
            alt="sk8nmeet santana logo"
            height="86"
            width="155"
            loading="eager"
            sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
