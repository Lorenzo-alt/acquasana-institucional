import { GTM_ID } from "@/lib/gtm";
import Script from "next/script";

export default function ConversaoLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script id="my-script">{`gtag('event', 'conversion', {'send_to': '${GTM_ID}/EE4wCPGpqeEYEK6u39cD'});`}</Script>
      {children}
    </>
  );
}
