import { Link, useLocation } from "react-router-dom";
import useDarkMode from "@/hooks/useDarkMode";
import { Moon, Sun } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const [dark, setDark] = useDarkMode();

<button
  className="rounded-full p-2 hover:bg-white/10"
  onClick={() => setDark(!dark)}
>
  {dark ? <Sun size={18} /> : <Moon size={18} />}
</button>;

export default function Header() {
  const { pathname } = useLocation();
  return (
    <header className="fixed inset-x-0 top-0 z-30 bg-brand/70 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <span className="text-lg font-bold text-white">Brahim</span>
        <ul className="flex gap-6">
          {nav.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`font-medium transition hover:text-accent ${
                  pathname === to ? "text-accent" : "text-white"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
