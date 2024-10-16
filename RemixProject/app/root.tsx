/* eslint-disable import/no-unresolved */
import { LiveReload, Outlet, Links } from "@remix-run/react";
import type {LinksFunction} from "@remix-run/node";

import globalLargeStylesUrl from "./styles/global-large.css";
import globalMediumStylesUrl from "./styles/global-meduium.css";
import globalStylesUrl from "./styles/global.css";

export const links: LinksFunction = () => [
  {rel: "stylesheet", href: globalStylesUrl},
  {
    rel: "stylesheet",
    href: globalMediumStylesUrl,
    media: "print, (min-width: 640px)",
  },
  {
    rel: "stylesheet",
    href: globalLargeStylesUrl,
    media: "screen and (min-width: 1024px)",
  },
];
export default function App(){
  return (
    <html lang = "en">
      <head>
        <meta charSet = "utf-8" />
        <meta
          name = "viewport"
          content =  "width=device-width, initial-scale=1"
          />
          <Links />
          <title>Remix: So great, it&apos;s funny!</title>
      </head>
      <body>
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}