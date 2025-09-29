"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/* =========================
   FancyDatePicker (inline)
   ========================= */
function pad(n) { return n.toString().padStart(2, "0"); }
function toYMD(d) { return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`; }
function sameDay(a, b) {
  return a.getFullYear()===b.getFullYear() && a.getMonth()===b.getMonth() && a.getDate()===b.getDate();
}
function startOfDay(d) { const x = new Date(d); x.setHours(0,0,0,0); return x; }

function FancyDatePicker({
  id,
  label = "Event date",
  placeholder = "Select a date",
  required = false,
  value,                 // "YYYY-MM-DD"
  onChange,              // (yyyy-mm-dd) => void
  minDateStr,            // "YYYY-MM-DD" minimum allowed date
  name,                  // optional hidden input name
}) {
  const today = useMemo(() => startOfDay(new Date()), []);
  const minDate = useMemo(() => minDateStr ? new Date(minDateStr) : today, [minDateStr, today]);
  const [open, setOpen] = useState(false);
  const initial = value ? new Date(value) : today;
  const [cursor, setCursor] = useState(startOfDay(initial));
  const popRef = useRef(null);

  useEffect(() => {
    function onDocClick(e){
      if (open && popRef.current && !popRef.current.contains(e.target)) setOpen(false);
    }
    function onKey(e){
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const grid = useMemo(() => {
    const year = cursor.getFullYear();
    const month = cursor.getMonth();
    const first = new Date(year, month, 1);
    const firstWday = (first.getDay()+6)%7; // Monday=0
    const daysInMonth = new Date(year, month+1, 0).getDate();

    const cells = [];
    for (let i=0;i<firstWday;i++) cells.push(null);
    for (let d=1; d<=daysInMonth; d++) cells.push(new Date(year, month, d));
    while (cells.length % 7 !== 0) cells.push(null);
    return cells;
  }, [cursor]);

  const selectedDate = value ? new Date(value) : null;

  const canGoPrev = useMemo(() => {
    const prevMonth = new Date(cursor.getFullYear(), cursor.getMonth()-1, 1);
    const lastDayPrev = new Date(prevMonth.getFullYear(), prevMonth.getMonth()+1, 0);
    return lastDayPrev >= minDate;
  }, [cursor, minDate]);

  const onSelect = (d) => {
    if (!d) return;
    if (startOfDay(d) < minDate) return;
    onChange?.(toYMD(d));
    setOpen(false);
  };

  return (
    <div className="relative">
      {label ? (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}{required ? <span className="text-brand"> *</span> : null}
        </label>
      ) : null}

      <button
        type="button"
        id={id}
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen((v)=>!v)}
        className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 text-left text-gray-900 focus:border-brand focus:outline-none bg-white"
      >
        <span className={value ? "" : "text-gray-400"}>
          {value
            ? new Date(value).toLocaleDateString(undefined, { year:"numeric", month:"long", day:"numeric" })
            : placeholder}
        </span>
        <span className="pointer-events-none absolute inset-y-0 right-4 top-[34px] -translate-y-1/2 flex items-center text-brand">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <path d="M16 2v4" /><path d="M8 2v4" /><path d="M3 10h18" />
          </svg>
        </span>
      </button>

      {name ? <input type="hidden" name={name} value={value || ""} /> : null}

      {open && (
        <div
          ref={popRef}
          role="dialog"
          aria-label="Choose date"
          className="absolute z-50 mt-2 w-[22rem] rounded-2xl border border-gray-200 bg-white shadow-2xl p-4"
        >
          <div className="flex items-center justify-between px-1 pb-3">
            <button
              type="button"
              onClick={() => canGoPrev && setCursor(new Date(cursor.getFullYear(), cursor.getMonth()-1, 1))}
              disabled={!canGoPrev}
              className="rounded-full p-2 hover:bg-gray-100 disabled:opacity-40"
              aria-label="Previous month"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 19l-7-7 7-7"/></svg>
            </button>
            <div className="text-sm font-semibold text-gray-900">
              {cursor.toLocaleDateString(undefined, { month: "long", year: "numeric" })}
            </div>
            <button
              type="button"
              onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth()+1, 1))}
              className="rounded-full p-2 hover:bg-gray-100"
              aria-label="Next month"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-gray-500 px-1">
            {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(d => (
              <div key={d} className="py-1">{d}</div>
            ))}
          </div>

          <div className="mt-1 grid grid-cols-7 gap-1 px-1">
            {grid.map((d, i) => {
              if (!d) return <div key={i} className="h-10" />;
              const isPast = startOfDay(d) < minDate;
              const isToday = sameDay(d, today);
              const isSelected = selectedDate && sameDay(d, selectedDate);
              return (
                <button
                  type="button"
                  key={i}
                  onClick={() => onSelect(d)}
                  disabled={isPast}
                  className={[
                    "h-10 rounded-xl text-sm transition",
                    isSelected
                      ? "bg-brand text-brand-contrast shadow-inner"
                      : isToday
                      ? "border border-brand/40"
                      : "hover:bg-gray-100",
                    isPast ? "text-gray-300 cursor-not-allowed" : "text-gray-800"
                  ].join(" ")}
                  aria-current={isToday ? "date" : undefined}
                  aria-pressed={isSelected ? "true" : "false"}
                >
                  {d.getDate()}
                </button>
              );
            })}
          </div>

          <div className="mt-3 flex items-center justify-between px-1">
            <button
              type="button"
              onClick={() => { onChange?.(toYMD(today)); setCursor(today); setOpen(false); }}
              className="text-sm underline underline-offset-2 hover:text-brand"
            >
              Today
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full border px-3 py-1.5 text-sm hover:bg-gray-50"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================
   Booking Form (inline)
   ========================= */
const baseFormState = {
  name: "",
  email: "",
  phone: "",
  eventDate: "",
  audienceSize: "",
  budget: "",
  message: "",
  packageSlug: "",
};

function normaliseInitialPackage(packages, initialPackageSlug) {
  if (!initialPackageSlug) return "";
  return packages.some((pkg) => pkg.slug === initialPackageSlug) ? initialPackageSlug : "";
}

function buildBookingConfig(service) {
  const defaults = {
    showEventDate: true,
    eventDateLabel: "Event date",
    eventDatePlaceholder: "Select a date",
    eventDateRequired: false,
    showAudience: true,
    audienceLabel: "Audience size",
    audiencePlaceholder: "e.g. 300 guests",
    audienceRequired: false,
    budgetLabel: "Budget (optional)",
    budgetPlaceholder: "\u20A6300,000",
    phoneLabel: "Phone / WhatsApp",
    messageLabel: "Share more details",
    messagePlaceholder:
      "Tell us about the flow of the day, specific requests, or anything else we should know.",
  };

  const provided = service.bookingConfig ?? {};
  return {
    ...defaults,
    ...provided,
    showEventDate: provided.showEventDate ?? defaults.showEventDate,
    eventDateRequired: Boolean(provided.eventDateRequired),
    showAudience: provided.showAudience ?? defaults.showAudience,
    audienceRequired: Boolean(provided.audienceRequired),
  };
}

export default function ServiceBookingForm({ service, packages = [], initialPackageSlug = "" }) {
  const normalisedInitialPackage = useMemo(
    () => normaliseInitialPackage(packages, initialPackageSlug),
    [packages, initialPackageSlug]
  );

  const config = useMemo(() => buildBookingConfig(service), [service]);

  const [formValues, setFormValues] = useState(() => ({
    ...baseFormState,
    packageSlug: normalisedInitialPackage,
  }));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    setFormValues((prev) => ({ ...prev, packageSlug: normalisedInitialPackage }));
  }, [normalisedInitialPackage]);

  const updateField = (field) => (event) =>
    setFormValues((prev) => ({ ...prev, [field]: event.target.value }));

  const selectedPackage =
    packages.find((pkg) => pkg.slug === formValues.packageSlug) ?? null;
  const hasPackages = packages.length > 0;

  // Allow only TODAY or FUTURE. If you want "tomorrow onward", add +1 day.
  const minDateStr = useMemo(() => {
    const d = new Date();
    // d.setDate(d.getDate() + 1); // uncomment for "tomorrow onward"
    return d.toISOString().split("T")[0];
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formValues.name || !formValues.email) {
      setStatus({ type: "error", message: "Please provide your name and email so we can reach you." });
      return;
    }
    if (hasPackages && !formValues.packageSlug) {
      setStatus({ type: "error", message: "Please select a package so we can tailor the booking to your needs." });
      return;
    }
    if (config.showEventDate && config.eventDateRequired && !formValues.eventDate) {
      setStatus({ type: "error", message: `Please provide ${config.eventDateLabel.toLowerCase()}.` });
      return;
    }
    if (config.showAudience && config.audienceRequired && !formValues.audienceSize) {
      setStatus({ type: "error", message: `Please provide ${config.audienceLabel.toLowerCase()}.` });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceTitle: service.title,
          name: formValues.name,
          email: formValues.email,
          phone: formValues.phone,
          eventDate: formValues.eventDate,
          audienceSize: formValues.audienceSize,
          budget: formValues.budget,
          message: formValues.message,
          package: selectedPackage
            ? {
                title: selectedPackage.title,
                price: selectedPackage.price,
                features: selectedPackage.features ?? [],
              }
            : null,
          fieldConfig: {
            showEventDate: config.showEventDate,
            eventDateLabel: config.eventDateLabel,
            showAudience: config.showAudience,
            audienceLabel: config.audienceLabel,
            budgetLabel: config.budgetLabel,
            messageLabel: config.messageLabel,
            phoneLabel: config.phoneLabel,
          },
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Something went wrong while sending your booking.");

      setStatus({ type: "success", message: "Thank you! Your booking has been sent. We will reach out shortly to confirm the details." });
      setFormValues({ ...baseFormState, packageSlug: normalisedInitialPackage });
    } catch (error) {
      console.error("Booking form error", error);
      setStatus({
        type: "error",
        message:
          error.message ||
          "Sorry, something went wrong while sending your booking. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-2xl bg-white shadow-xl border border-gray-200 p-8">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
        Ready to book {service.title}?
      </h2>
      <p className="text-gray-600 mb-8">
        Tell us a little about your event or project and we will revert with availability, timelines, and next steps.
      </p>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {hasPackages ? (
          <div>
            <label htmlFor="booking-package" className="block text-sm font-medium text-gray-700">
              Choose a package
            </label>
            <select
              id="booking-package"
              value={formValues.packageSlug}
              onChange={updateField("packageSlug")}
              required
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-brand focus:outline-none"
            >
              <option value="">Select your preferred package to book</option>
              {packages.map((pkg) => (
                <option key={pkg.slug} value={pkg.slug}>
                  {pkg.title} {pkg.price ? `(${pkg.price})` : ""}
                </option>
              ))}
            </select>

            {selectedPackage ? (
              <ul className="mt-4 rounded-xl border border-brand-soft/40 bg-brand-soft/10 px-4 py-3 text-sm text-gray-700 space-y-2">
                {selectedPackage.features?.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-sm text-gray-500">
                Packages bundle different levels of support. Select one to see what is included.
              </p>
            )}
          </div>
        ) : null}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="booking-name" className="block text-sm font-medium text-gray-700">
              Full name
            </label>
            <input
              id="booking-name"
              type="text"
              value={formValues.name}
              onChange={updateField("name")}
              required
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-brand focus:outline-none"
              placeholder="Jane Doe"
            />
          </div>

          <div>
            <label htmlFor="booking-email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="booking-email"
              type="email"
              value={formValues.email}
              onChange={updateField("email")}
              required
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-brand focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="booking-phone" className="block text-sm font-medium text-gray-700">
              {config.phoneLabel}
            </label>
            <input
              id="booking-phone"
              type="tel"
              value={formValues.phone}
              onChange={updateField("phone")}
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-brand focus:outline-none"
              placeholder="+234 800 000 0000"
            />
          </div>

          {config.showEventDate ? (
            <div>
              <FancyDatePicker
                id="booking-date"
                label={config.eventDateLabel + (config.eventDateRequired ? " *" : "")}
                placeholder={config.eventDatePlaceholder}
                required={config.eventDateRequired}
                name="eventDate"
                value={formValues.eventDate}
                onChange={(ymd) => setFormValues((p) => ({ ...p, eventDate: ymd }))}
                minDateStr={minDateStr} // today or future (change to tomorrow by adding +1 above)
              />
              <p className="mt-2 text-xs text-gray-500">{config.eventDatePlaceholder}</p>
            </div>
          ) : null}

          {config.showAudience ? (
            <div>
              <label htmlFor="booking-audience" className="block text-sm font-medium text-gray-700">
                {config.audienceLabel}
                {config.audienceRequired ? <span className="text-brand"> *</span> : null}
              </label>
              <input
                id="booking-audience"
                type="text"
                value={formValues.audienceSize}
                onChange={updateField("audienceSize")}
                required={config.audienceRequired}
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-brand focus:outline-none"
                placeholder={config.audiencePlaceholder}
              />
            </div>
          ) : null}

          <div>
            <label htmlFor="booking-budget" className="block text-sm font-medium text-gray-700">
              {config.budgetLabel}
            </label>
            <input
              id="booking-budget"
              type="text"
              value={formValues.budget}
              onChange={updateField("budget")}
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-brand focus:outline-none"
              placeholder={config.budgetPlaceholder}
            />
          </div>
        </div>

        <div>
          <label htmlFor="booking-message" className="block text-sm font-medium text-gray-700">
            {config.messageLabel}
          </label>
          <textarea
            id="booking-message"
            value={formValues.message}
            onChange={updateField("message")}
            rows={5}
            className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-brand focus:outline-none"
            placeholder={config.messagePlaceholder}
          />
        </div>

        {status ? (
          <div
            className={`rounded-xl px-4 py-3 text-sm font-medium ${
              status.type === "success"
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            {status.message}
          </div>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-3 text-lg font-semibold text-brand-contrast shadow-lg transition-all duration-300 hover:bg-brand-deep disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Sending..." : `Submit booking for ${service.title}`}
        </button>
      </form>
    </div>
  );
}
