"use client";

import { motion } from "framer-motion";
import { ShieldCheck, UserRound } from "lucide-react";

const teamMembers = [
  {
    name: "Prem Patil",
    role: "Founder & CEO",
    department: "Leadership",
    linkedin: "https://linkedin.com/in/prempatil2608",
    accent: "cyan",
  },
  {
    name: "Tejesh Patil",
    role: "COO",
    department: "Leadership",
    accent: "purple",
  },
  {
    name: "Jiya Thakur",
    role: "Web Development & Product Intern",
    department: "Engineering",
    accent: "cyan",
  },
  {
    name: "Tirtha Thale",
    role: "Operations Lead",
    department: "Operations",
    accent: "purple",
  },
  {
    name: "Rayya Rabbani",
    role: "Social Media Manager Intern",
    department: "Marketing",
    accent: "cyan",
  },
  {
    name: "Bhavkirat Kaur",
    role: "Cybersecurity Analyst Intern",
    department: "Security",
    accent: "purple",
  },
  {
    name: "Bidisha De",
    role: "Cybersecurity Analyst Intern",
    department: "Security",
    accent: "cyan",
  },
];

export default function Team() {
  return (
    <div className="relative min-h-screen overflow-hidden pb-20">
      <div className="grid-bg absolute inset-0 opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

      <section className="relative px-6 pb-14 pt-16 text-center">
        <div className="relative z-10 mx-auto max-w-3xl">
          <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10"
          >
            <UsersIcon className="h-6 w-6 text-primary" />
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Meet the <span className="text-primary glow-cyan">Team</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base"
          >
            Meet the team behind RedDoraLabs — cybersecurity researchers,
            engineers, and innovators.
          </motion.p>
        </div>
      </section>

      <section className="relative border-t border-[#1e1e2f]/20 px-6 py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => {
            const isPurple = member.accent === "purple";

            return (
              <motion.article
                key={member.name}
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass group relative overflow-hidden rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 ${
                  isPurple
                    ? "border-secondary/20 hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]"
                    : "border-primary/20 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,212,255,0.12)]"
                }`}
              >
                <div
                  className={`absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl transition-opacity group-hover:opacity-100 ${
                    isPurple ? "bg-secondary/10" : "bg-primary/10"
                  }`}
                />

                <div
                  className={`relative mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border ${
                    isPurple
                      ? "border-secondary/30 bg-secondary/10"
                      : "border-primary/30 bg-primary/10"
                  }`}
                >
                  <UserRound
                    className={`h-7 w-7 ${
                      isPurple ? "text-secondary" : "text-primary"
                    }`}
                  />
                </div>

                <div className="relative">
                  <p
                    className={`mb-3 inline-block rounded-full border px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.15em] ${
                      isPurple
                        ? "border-secondary/30 bg-secondary/10 text-secondary"
                        : "border-primary/30 bg-primary/10 text-primary"
                    }`}
                  >
                    {member.department}
                  </p>

                  <h2 className="text-xl font-bold text-white">
                    {member.name}
                  </h2>

                  <p className="mt-2 min-h-12 text-sm leading-relaxed text-zinc-400">
                    {member.role}
                  </p>

                  {member.linkedin ? (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${member.name}'s LinkedIn profile`}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition-colors hover:text-primary"
                    >
                      <LinkedInIcon className="h-4 w-4" />
                      LinkedIn Profile
                      <span aria-hidden="true" className="text-xs">↗</span>
                    </a>
                  ) : (
                    <div className="mt-6 h-5" aria-hidden="true" />
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="relative border-t border-[#1e1e2f]/20 px-6 pt-12 text-center">
        <div className="mx-auto flex max-w-2xl flex-col items-center">
          <ShieldCheck className="mb-4 h-6 w-6 text-secondary" />
          <p className="text-sm leading-relaxed text-zinc-400">
            Different disciplines, one mission: securing the digital frontier
            and empowering teams through intelligent technology.
          </p>
        </div>
      </section>
    </div>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
      />
      <circle cx="9" cy="7" r="4" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
      />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}