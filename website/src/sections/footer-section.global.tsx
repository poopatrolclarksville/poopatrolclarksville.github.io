import React from "react";

import { FOOTER_NAV_LINKS } from '@/config/footer.config';
import { Mail, PhoneCall, Facebook } from "lucide-react";

import ListNavItem from "@/components/items/list-nav-item.component";

export default function Footer() {
  return (
    <footer
      className="
        bg-gray-50
        px-4
        py-32
        tablet:px-16
      "
    >
      <div
        className="
          grid
          grid-cols-1
          laptop:grid-cols-3
          gap-y-24
          desktop:gap-y-0
          desktop:gap-16
        "
      >
        {/* Contact Info Section */}
        <article className="space-y-4">
          <p
            className="
              pb-8
              text-3xl
              font-bold
            "
          >
            Contact Information
          </p>
          <div
            className="
              flex 
              items-center 
              justify-between
            "
          >
            <PhoneCall size={28} />
            <p
              className="
                text-lg
                tablet:text-2xl
                font-extralight
                text-gray-600
              "
            >
              (931) 436-3707
            </p>
          </div>
          <div
            className="
              flex 
              items-center 
              justify-between
              py-4
            "
          >
            <Mail size={28} />
            <p
              className="
                text-lg
                tablet:text-2xl
                font-extralight
                text-gray-600
              "
            >
              poopatrolclarksville@gmail.com
            </p>
          </div>
          <div
            className="
              flex 
              items-center 
              justify-between
              py-2
            "
          >
            <a
              href="https://www.facebook.com/PooPatrolClarksvilleTN/"
              target="_blank"
              className="
                no-underline
                visited:no-underline
              "
            >
              <Facebook size={28} />
            </a>
            <p
              className="
                text-lg
                tablet:text-2xl
                font-extralight
                text-gray-600
              "
            >
              <a
                href="https://www.facebook.com/PooPatrolClarksvilleTN/"
                target="_blank"
                className="
                  no-underline
                  visited:no-underline
                  hover:font-medium
                  hover:text-gray-900
                "
              >
                PoopatrolClarksvilleTN
              </a>
            </p>
          </div>
        </article>

        {/* Navigation Links */}
        <aside
          className="
            desktop:px-8
            desktop:border-x
          "
        >
          <h2
            className="
              pb-8
              text-3xl
              font-bold
            "
          >
            Where To
          </h2>
          <ul
              className="
                grid
                h-full
                list-none
                grid-cols-1
              "
            >
              {FOOTER_NAV_LINKS.map((item) => (
                <ListNavItem navItem={item}/>
              ))}
            </ul>
        </aside>

        <aside className="pt-8">
          <article>
            <h2
              className="
              pb-8
              text-3xl
              font-bold
            "
            >
              Satisifed With Our Service?
            </h2>
            <p
              className="
                text-lg
                font-light
              "
            >
              We'd love to hear your thoughts. Click the button below to leave a review on our facebook page.
            </p>
          </article>
          <div
            className="
              mt-8
              w-full
              rounded
              bg-gray-900
              px-8
              py-2
              text-center
              font-light
              text-gray-50
              shadow-xl
            "
          >
            <a
              href="#"
              target="_blank"
              className="
                text-decoration-0
                visited:text-decoration-0
                visited:text-gray-50
              "
            >
              Leave A Review
            </a>
          </div>
        </aside>
      </div>
    </footer>
  );
}
