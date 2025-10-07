import { useEffect } from "react";

// Google Analytics 4 implementation
const GA_TRACKING_ID = "G-XXXXXXXXXX"; // Replace with your actual GA4 tracking ID

export const initGA = () => {
  if (typeof window !== "undefined" && GA_TRACKING_ID) {
    // Load Google Analytics script
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Track page views
export const trackPageView = (url) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = (action, category, label, value) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Analytics component
export default function Analytics() {
  useEffect(() => {
    // Initialize Google Analytics
    initGA();

    // Track page view on mount
    trackPageView(window.location.pathname);

    // Track page views on route changes (for SPA)
    const handleRouteChange = () => {
      trackPageView(window.location.pathname);
    };

    // Listen for popstate events (back/forward navigation)
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  return null; // This component doesn't render anything
}

// Hook for tracking custom events
export const useAnalytics = () => {
  const trackContactFormSubmit = () => {
    trackEvent("form_submit", "contact", "contact_form", 1);
  };

  const trackButtonClick = (buttonName) => {
    trackEvent("click", "button", buttonName, 1);
  };

  const trackDownload = (fileName) => {
    trackEvent("download", "file", fileName, 1);
  };

  return {
    trackContactFormSubmit,
    trackButtonClick,
    trackDownload,
  };
};
