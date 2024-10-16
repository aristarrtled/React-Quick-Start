import type {LinksFunction} from "@remix-run/node";
import stylesUrl from "../styles/index.css";

export const limks: LinksFunction = () => [
    {rel: "stylesheet", href: stylesUrl},
];
export default function IndexRoute(){
    return (
        <h1>Hello Index Route</h1>
    );
}