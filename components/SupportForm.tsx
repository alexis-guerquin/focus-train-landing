"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useI18n } from "@/components/I18nProvider";

export function SupportForm() {
  const [status, setStatus] = useState("");
  const { locale, messages } = useI18n();
  const formMessages = messages.supportForm;

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = new FormData(form);
    const subject = encodeURIComponent(
      `[${data.get("category")}] ${data.get("subject")}`,
    );
    const body = encodeURIComponent(
      `${formMessages.bodyName}: ${data.get("name")}\n${formMessages.email}: ${data.get("email")}\n${formMessages.bodyApp}: ${data.get("appVersion") || formMessages.notProvided}\n${formMessages.bodyIos}: ${data.get("iosVersion") || formMessages.notProvided}\n${formMessages.bodyDevice}: ${data.get("device") || formMessages.notProvided}\n\n${formMessages.bodyDescription}:\n${data.get("description")}`,
    );
    window.location.href = `mailto:${siteConfig.supportEmail}?subject=${subject}&body=${body}`;
    setStatus(formMessages.status);
  }

  return (
    <form className="support-form" onSubmit={submit} noValidate>
      <div className="form-grid">
        <label>
          {formMessages.name}
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          {formMessages.email}
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label className="full-field">
          {formMessages.subject}
          <input name="subject" required />
        </label>
        <label className="full-field">
          {formMessages.category}
          <select
            key={locale}
            name="category"
            defaultValue={formMessages.categories[0]}
          >
            {formMessages.categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </label>
        <label>
          {formMessages.appVersion}
          <input
            name="appVersion"
            placeholder={formMessages.appVersionPlaceholder}
          />
        </label>
        <label>
          {formMessages.iosVersion}
          <input name="iosVersion" placeholder={formMessages.iosPlaceholder} />
        </label>
        <label className="full-field">
          {formMessages.device}
          <input name="device" placeholder={formMessages.devicePlaceholder} />
        </label>
        <label className="full-field">
          {formMessages.description}
          <textarea
            name="description"
            rows={6}
            required
            placeholder={formMessages.descriptionPlaceholder}
          />
        </label>
      </div>
      <p className="form-note">{formMessages.note}</p>
      <button className="primary-button" type="submit">
        <Send size={18} /> {formMessages.submit}
      </button>
      <p className="form-status" role="status">
        {status}
      </p>
    </form>
  );
}
