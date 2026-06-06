"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Calculator, Calendar, CreditCard, Settings, Smile, User, Code, Mail, Home, Briefcase, Zap, FileText } from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command"

import { projects, skills, experiences } from "../data/portfolio"

export function CommandPalette() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search (e.g. Next.js, projects, theme)..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          
          <CommandGroup heading="Navigation">
            <CommandItem value="Home" onSelect={() => runCommand(() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }))}>
              <Home className="mr-2 h-4 w-4" />
              <span>Home</span>
            </CommandItem>
            <CommandItem value="About" onSelect={() => runCommand(() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }))}>
              <User className="mr-2 h-4 w-4" />
              <span>About</span>
            </CommandItem>
            <CommandItem value="Projects Portfolio Work" onSelect={() => runCommand(() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }))}>
              <Code className="mr-2 h-4 w-4" />
              <span>Projects</span>
            </CommandItem>
            <CommandItem value="Skills Arsenal Technologies" onSelect={() => runCommand(() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" }))}>
              <Zap className="mr-2 h-4 w-4" />
              <span>Skills</span>
            </CommandItem>
            <CommandItem value="Experience Career History" onSelect={() => runCommand(() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" }))}>
              <Briefcase className="mr-2 h-4 w-4" />
              <span>Experience</span>
            </CommandItem>
            <CommandItem value="Blog Articles Tutorials" onSelect={() => runCommand(() => document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" }))}>
              <FileText className="mr-2 h-4 w-4" />
              <span>Blog</span>
            </CommandItem>
            <CommandItem value="Contact Email Let's Talk" onSelect={() => runCommand(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }))}>
              <Mail className="mr-2 h-4 w-4" />
              <span>Contact</span>
            </CommandItem>
          </CommandGroup>
          
          <CommandSeparator />

          <CommandGroup heading="Projects">
            {projects.map(project => (
              <CommandItem 
                key={project.id} 
                value={`${project.title} ${project.technologies.join(" ")} ${project.description}`}
                onSelect={() => runCommand(() => {
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                })}
              >
                <Code className="mr-2 h-4 w-4" />
                <div className="flex flex-col">
                  <span>{project.title}</span>
                  <span className="text-xs text-muted-foreground">{project.technologies.slice(0, 3).join(", ")}</span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Skills">
            {skills.flatMap(g => g.skills).map(skill => (
              <CommandItem 
                key={skill.name} 
                value={skill.name}
                onSelect={() => runCommand(() => {
                  document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })
                })}
              >
                <Zap className="mr-2 h-4 w-4" />
                <span>{skill.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Experience">
            {experiences.map((exp, idx) => (
              <CommandItem 
                key={idx} 
                value={`${exp.title} ${exp.company} ${exp.technologies?.join(" ")}`}
                onSelect={() => runCommand(() => {
                  document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })
                })}
              >
                <Briefcase className="mr-2 h-4 w-4" />
                <div className="flex flex-col">
                  <span>{exp.title}</span>
                  <span className="text-xs text-muted-foreground">{exp.company}</span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Theme">
            <CommandItem value="Dark Theme Mode" onSelect={() => runCommand(() => document.documentElement.classList.add("dark"))}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Dark Theme</span>
            </CommandItem>
            <CommandItem value="Light Theme Mode" onSelect={() => runCommand(() => document.documentElement.classList.remove("dark"))}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Light Theme</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
