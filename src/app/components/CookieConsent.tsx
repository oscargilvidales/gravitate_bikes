"use client";

import { useEffect, useState } from "react";

export const GOOGLE_MAPS_CONSENT_KEY = "gravitate-google-maps-consent";
export type ConsentStatus = "granted" | "denied" | null;

export type CookieConsentCopy = {
  title: string;
  description: string;
  accept: string;
  reject: string;
};

export function readGoogleMapsConsent(): ConsentStatus {
  if (typeof window === "undefined") return null;

  const value = window.localStorage.getItem(GOOGLE_MAPS_CONSENT_KEY);
  return value === "granted" || value === "denied" ? value : null;
}

export function CookieConsent({ copy }: { copy: CookieConsentCopy }) {
  const [status, setStatus] = useState<ConsentStatus>(null);

  useEffect(() => {
    setStatus(readGoogleMapsConsent());
  }, []);

  function saveConsent(nextStatus: Exclude<ConsentStatus, null>) {
    window.localStorage.setItem(GOOGLE_MAPS_CONSENT_KEY, nextStatus);
    setStatus(nextStatus);
    window.dispatchEvent(new CustomEvent("google-maps-consent", { detail: nextStatus }));
  }

  if (status) return null;

  return (
    <aside
      role="dialog"
      aria-label={copy.title}
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-xl border border-gray-200 bg-white p-5 shadow-xl sm:inset-x-6 sm:p-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <div>
          <h2 className="text-base font-semibold text-[#0E0E12]">{copy.title}</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">{copy.description}</p>
        </div>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => saveConsent("denied")}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-gray-500 hover:text-[#0E0E12]"
          >
            {copy.reject}
          </button>
          <button
            type="button"
            onClick={() => saveConsent("granted")}
            className="rounded-lg bg-[#0E0E12] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#2b2b32]"
          >
            {copy.accept}
          </button>
        </div>
      </div>
    </aside>
  );
}