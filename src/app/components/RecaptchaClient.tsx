"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
      render: (container: string | HTMLElement, parameters: any) => string | number;
    };
  }
}


export default function RecaptchaClient() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="g-recaptcha"
      data-sitekey="6Lc1ecUrAAAAADtyW486mQgiwHddT9TrPydR5ks4"
    ></div>
  );
}
