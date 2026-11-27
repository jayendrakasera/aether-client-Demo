"use client";

import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { siteConfig } from "@/content/site.config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.email("Please enter a valid email address"),
  company: z.string().optional(),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(20, "Please share a little more about your project"),
});

type ContactValues = z.infer<typeof contactSchema>;

const BUDGETS = [
  "Below ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000+",
];

/**
 * Contact form — validates the brief, then opens a pre-addressed email draft.
 * The visitor reviews the generated email and sends it from their email app.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { budget: "" },
  });

  // useWatch (not watch()) — safe with the React Compiler
  const budget = useWatch({ control, name: "budget" });

  const onSubmit = async (values: ContactValues) => {
    const subject = `Project enquiry from ${values.name}`;
    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Company: ${values.company || "Not provided"}`,
      `Budget: ${values.budget}`,
      "",
      "Project details:",
      values.message,
    ].join("\n");

    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <div aria-live="polite">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex min-h-96 flex-col items-start justify-center"
          >
            <span className="flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <Check className="size-6" />
            </span>
            <h2 className="mt-8 font-display text-4xl">
              Email draft opened<span className="text-accent">.</span>
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Your email app should open with the project brief ready to send.
              Review the details and press send to complete your enquiry.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.4 }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="space-y-10"
          >
            <div className="grid gap-10 sm:grid-cols-2">
              <div className="space-y-3">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                  {...register("name")}
                />
                {errors.name && (
                  <p role="alert" className="text-sm text-destructive">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="space-y-3">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  aria-invalid={!!errors.email}
                  {...register("email")}
                />
                {errors.email && (
                  <p role="alert" className="text-sm text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                placeholder="Optional"
                {...register("company")}
              />
            </div>

            <fieldset>
              <legend className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Budget *
              </legend>
              <div className="mt-4 flex flex-wrap gap-3">
                {BUDGETS.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() =>
                      setValue("budget", b, { shouldValidate: true })
                    }
                    aria-pressed={budget === b}
                    data-cursor="hover"
                    className={
                      budget === b
                        ? "rounded-full border border-accent bg-accent px-5 py-2 text-sm text-accent-foreground"
                        : "rounded-full border border-border px-5 py-2 text-sm text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                    }
                  >
                    {b}
                  </button>
                ))}
              </div>
              {errors.budget && (
                <p role="alert" className="mt-3 text-sm text-destructive">
                  {errors.budget.message}
                </p>
              )}
            </fieldset>

            <div className="space-y-3">
              <Label htmlFor="message">Project *</Label>
              <Textarea
                id="message"
                placeholder="What are we building? Timeline, goals, references…"
                aria-invalid={!!errors.message}
                {...register("message")}
              />
              {errors.message && (
                <p role="alert" className="text-sm text-destructive">
                  {errors.message.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              data-cursor="hover"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" /> Opening…
                </>
              ) : (
                "Send the brief"
              )}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
