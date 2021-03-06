import Script from 'next/script';

const googleAnalyticsId = '';

const GAScript = () => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
      />

      <Script strategy="lazyOnload" id="ga-script">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}', {
              page_path: window.location.pathname,
            });
        `}
      </Script>
    </>
  );
};

export default GAScript;

declare const window: any;

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const logEvent = (
  action: any,
  category: any,
  label: any,
  value: any
) => {
  window.gtag?.('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
