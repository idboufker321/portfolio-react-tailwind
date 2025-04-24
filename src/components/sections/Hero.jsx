// src/components/sections/Hero.jsx
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import avatar from "@/assets/avatar.webp";

export default function Hero() {
  return (
    <section
      id="hero"
      className="container mx-auto grid place-items-center gap-6 min-h-[80vh] px-6"
    >
      <motion.img
        src={avatar}
        alt="Brahim portrait"
        className="h-32 w-32 rounded-full shadow-2xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />
      <h1 className="text-center text-4xl font-bold text-white">
        Hey, I’m Brahim&nbsp;<span className="text-accent">—</span> Front-End
        Engineer
      </h1>
      <p className="max-w-xl text-center text-slate-300">
        I craft performant, accessible web experiences with React &amp;
        TypeScript.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button as="a" href="/projects">
          See my work
        </Button>
        <Button variant="secondary" as="a" href="/cv.pdf">
          Download CV
        </Button>
      </div>
    </section>
  );
}