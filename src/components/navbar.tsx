"use client";
import { cn } from "@/lib/utils";
import { IconChevronDown, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import React, { useState } from "react";
import {
  Navbar as NavbarContainer,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

type NavItem = {
  name: string;
  link: string;
  children?: { name: string; link: string; description?: string }[];
};

const navItems: NavItem[] = [
  {
    name: "Services",
    link: "#",
    children: [
      { name: "Développement logiciel", link: "/services/developpement", description: "Applications web et mobiles sur-mesure" },
      { name: "Automatisation IA", link: "/services/automatisation", description: "Agents IA et workflows automatisés" },
      { name: "Intégrations", link: "/services/integrations", description: "Connexion de vos outils existants" },
    ],
  },
  {
    name: "Réalisations",
    link: "/realisations",
  },
  {
    name: "Tarifs",
    link: "/tarifs",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <NavbarContainer>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems>
          <DesktopMenu navItems={navItems} />
        </NavItems>
        <div className="flex items-center gap-4">
          <AnimatedThemeToggler className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors" />
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] transition-all duration-300"
          >
            <span>Devis immédiat</span>
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <div className="flex items-center gap-2">
            <AnimatedThemeToggler className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors" />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <div key={`mobile-link-${idx}`}>
              {item.children ? (
                <MobileChildNavItems navItem={item} onClose={() => setIsMobileMenuOpen(false)} />
              ) : (
                <Link
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full mt-4 rounded-lg bg-white px-4 py-3 text-sm font-medium text-black shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] transition-all duration-300"
          >
            <span>Devis immédiat</span>
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </MobileNavMenu>
      </MobileNav>
    </NavbarContainer>
  );
};

// Desktop Menu with Dropdowns
const DesktopMenu = ({ navItems }: { navItems: NavItem[] }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="flex items-center justify-center space-x-1"
    >
      {navItems.map((item) => (
        <div key={item.name} className="relative">
          {item.children ? (
            <MenuItem
              setActive={setActive}
              active={active}
              item={item.name}
            >
              <div className="flex flex-col space-y-3">
                {item.children.map((child) => (
                  <HoveredLink key={child.name} href={child.link}>
                    <span className="font-medium">{child.name}</span>
                    {child.description && (
                      <span className="block text-xs text-neutral-500 dark:text-neutral-400">
                        {child.description}
                      </span>
                    )}
                  </HoveredLink>
                ))}
              </div>
            </MenuItem>
          ) : (
            <Link
              href={item.link}
              className="px-4 py-2 text-sm text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

// Mobile Child Nav Items with Accordion
const MobileChildNavItems = ({ navItem, onClose }: { navItem: NavItem; onClose: () => void }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-2 text-neutral-600 dark:text-neutral-300"
      >
        <span>{navItem.name}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }}>
          <IconChevronDown className="h-4 w-4" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden pl-4"
          >
            {navItem.children?.map((child) => (
              <Link
                key={child.name}
                href={child.link}
                onClick={onClose}
                className="block py-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
              >
                {child.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Dropdown Menu Item
const transition = {
  type: "spring" as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer px-4 py-2 text-sm text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_0.5rem)] left-1/2 -translate-x-1/2 pt-2">
              <motion.div
                transition={transition}
                layoutId="active"
                className="overflow-hidden rounded-xl bg-white shadow-xl border border-neutral-200 dark:border-neutral-800 dark:bg-neutral-950"
              >
                <motion.div layout className="p-4 min-w-[220px]">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

const HoveredLink = ({ children, ...rest }: React.ComponentProps<typeof Link>) => {
  return (
    <Link
      {...rest}
      className="block rounded-lg p-2 -m-2 text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800 transition-colors"
    >
      {children}
    </Link>
  );
};
