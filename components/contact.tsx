"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"

const Contact = () => {
  const { t } = useLanguage()
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })

  const handleChange = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const body = `${form.message}\n\n— ${form.name} (${form.email})`
    const mailto = `mailto:${t.contact.email}?subject=${encodeURIComponent(form.subject || "Contact via portfolio")}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
  }

  return (
    <section id="contact" className="relative z-10 py-16 sm:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 max-w-[1300px]">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <h3 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-3 tracking-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
            {t.contact.title}
          </h3>
          <span
            className="text-xl sm:text-2xl lg:text-3xl font-light block mb-3 sm:mb-6"
            style={{
              background: "linear-gradient(98.88deg, #B798C5 20.15%, #B923FF 75.28%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            {t.contact.subtitle}
          </span>
          <p className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed font-light">
            {t.contact.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-white text-lg sm:text-xl font-semibold" style={{ fontFamily: "Montserrat, sans-serif" }}>
              {t.contact.infoTitle}
            </h4>

            <div className="flex flex-col gap-4">
              <a href={`mailto:${t.contact.email}`} className="flex items-start gap-3 group">
                <span className="w-9 h-9 rounded-full bg-[#B923FF]/15 border border-[#B923FF]/40 flex items-center justify-center shrink-0">✉️</span>
                <span className="text-white/80 text-sm sm:text-base group-hover:text-white transition-colors break-all">{t.contact.email}</span>
              </a>

              <a href={`tel:${t.contact.phone.replace(/\s/g, "")}`} className="flex items-start gap-3 group">
                <span className="w-9 h-9 rounded-full bg-[#B923FF]/15 border border-[#B923FF]/40 flex items-center justify-center shrink-0">📞</span>
                <span className="text-white/80 text-sm sm:text-base group-hover:text-white transition-colors">{t.contact.phone}</span>
              </a>

              <div className="flex items-start gap-3">
                <span className="w-9 h-9 rounded-full bg-[#B923FF]/15 border border-[#B923FF]/40 flex items-center justify-center shrink-0">📍</span>
                <span className="text-white/80 text-sm sm:text-base">
                  {t.contact.location}
                  <br />
                  <span className="text-white/50 text-xs sm:text-sm italic">{t.contact.locationNote}</span>
                </span>
              </div>

              <a
                href="https://portfoliobree.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <span className="w-9 h-9 rounded-full bg-[#B923FF]/15 border border-[#B923FF]/40 flex items-center justify-center shrink-0">🔗</span>
                <span className="text-white/80 text-sm sm:text-base group-hover:text-white transition-colors">{t.contact.portfolioLink}</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-white/70 text-xs sm:text-sm">{t.contact.nameLabel}</label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={handleChange("name")}
                  placeholder={t.contact.namePlaceholder}
                  className="bg-white/10 border border-white/15 rounded-lg px-4 py-2.5 text-sm sm:text-base text-white placeholder-white/30 outline-none focus:border-[#B923FF] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-white/70 text-xs sm:text-sm">{t.contact.emailLabel}</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  placeholder={t.contact.emailPlaceholder}
                  className="bg-white/10 border border-white/15 rounded-lg px-4 py-2.5 text-sm sm:text-base text-white placeholder-white/30 outline-none focus:border-[#B923FF] transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-white/70 text-xs sm:text-sm">{t.contact.subjectLabel}</label>
              <input
                type="text"
                value={form.subject}
                onChange={handleChange("subject")}
                placeholder={t.contact.subjectPlaceholder}
                className="bg-white/10 border border-white/15 rounded-lg px-4 py-2.5 text-sm sm:text-base text-white placeholder-white/30 outline-none focus:border-[#B923FF] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-white/70 text-xs sm:text-sm">{t.contact.messageLabel}</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={handleChange("message")}
                placeholder={t.contact.messagePlaceholder}
                className="bg-white/10 border border-white/15 rounded-lg px-4 py-2.5 text-sm sm:text-base text-white placeholder-white/30 outline-none focus:border-[#B923FF] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-[#e9deff] text-[#1e0044] hover:bg-[#d2c5ea] font-semibold px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base transition-all shadow-lg"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {t.contact.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
