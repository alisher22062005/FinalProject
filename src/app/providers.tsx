// app/providers.tsx
"use client"; // <-- required!

import { Provider } from "react-redux";
import { store } from "@/toolkit/store";

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
