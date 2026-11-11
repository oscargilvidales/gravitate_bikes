import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Link, usePathname y getPathname que añaden (o no, en español) el prefijo de idioma.
export const { Link, usePathname, getPathname } = createNavigation(routing);
