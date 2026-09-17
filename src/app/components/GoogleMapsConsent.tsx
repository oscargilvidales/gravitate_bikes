"use client";

import { useEffect, useState } from "react";
import {
  type ConsentStatus,
  readGoogleMapsConsent,
} from "./CookieConsent";

type GoogleMapsConsentProps = {
  title: string;
  description: string;
  acceptCookies: string;
  mapTitle: string;
};

const mapUrl =
  "https://maps.google.com/maps?q=Avenida%20Lopez%20de%20Mena%2014,%20San%20Pedro%20Alcantara,%20Marbella&t=&z=16&ie=UTF8&iwloc=&output=embed";

export function GoogleMapsConsent({
  title,
  description,
  acceptCookies,
  mapTitle,
}: GoogleMapsConsentProps) {
  const [status, setStatus] = useState<ConsentStatus>(null);

  useEffect(() => {
    setStatus(readGoogleMapsConsent());

    function handleConsent(event: Event) {
      setStatus((event as CustomEvent<ConsentStatus>).detail);
    }

    window.addEventListener("google-maps-consent", handleConsent);
    return () => window.removeEventListener("google-maps-consent", handleConsent);
  }, []);

  if (status !== "granted") {
    return (
      <div className="flex h-full min-h-[400px] items-center justify-center bg-gray-50 p-8 text-center">
        <div className="max-w-sm">
          <h2 className="text-lg font-semibold text-[#0E0E12]">{title}</h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">{description}</p>
          <p className="mt-4 text-xs text-gray-500">{acceptCookies}</p>
        </div>
      </div>
    );
  }

  return (
    <iframe
      src={mapUrl}
      width="100%"
      height="100%"
      style={{ border: 0, position: "absolute", top: 0, left: 0 }}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title={mapTitle}
    />
  );
}