"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { siteConfig } from "@/config/site";

export function SupportForm() {
  const [status, setStatus] = useState("");

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
      `Nom : ${data.get("name")}\nE-mail : ${data.get("email")}\nVersion de l’app : ${data.get("appVersion") || "Non renseignée"}\nVersion iOS : ${data.get("iosVersion") || "Non renseignée"}\nModèle d’iPhone : ${data.get("device") || "Non renseigné"}\n\nDescription :\n${data.get("description")}`,
    );
    window.location.href = `mailto:${siteConfig.supportEmail}?subject=${subject}&body=${body}`;
    setStatus(
      "Ton application e-mail va s’ouvrir avec les informations saisies.",
    );
  }

  return (
    <form className="support-form" onSubmit={submit} noValidate>
      <div className="form-grid">
        <label>
          Nom
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          Adresse e-mail
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label className="full-field">
          Sujet
          <input name="subject" required />
        </label>
        <label className="full-field">
          Catégorie
          <select name="category" defaultValue="Sessions">
            <option>Sessions</option>
            <option>Progression et collection</option>
            <option>Multijoueur</option>
            <option>Compte et données</option>
            <option>Problème technique</option>
            <option>Autre</option>
          </select>
        </label>
        <label>
          Version de l’application
          <input name="appVersion" placeholder="Ex. 1.0.0" />
        </label>
        <label>
          Version d’iOS
          <input name="iosVersion" placeholder="Ex. iOS 18" />
        </label>
        <label className="full-field">
          Modèle d’iPhone
          <input name="device" placeholder="Ex. iPhone 15" />
        </label>
        <label className="full-field">
          Description
          <textarea
            name="description"
            rows={6}
            required
            placeholder="Décris précisément ce qui se passe et les étapes pour reproduire le problème."
          />
        </label>
      </div>
      <p className="form-note">
        Pour joindre une capture, ajoute-la dans ton application e-mail après
        ouverture du message.
      </p>
      <button className="primary-button" type="submit">
        <Send size={18} /> Préparer l’e-mail
      </button>
      <p className="form-status" role="status">
        {status}
      </p>
    </form>
  );
}
