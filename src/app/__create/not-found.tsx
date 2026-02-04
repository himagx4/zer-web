import type { Route } from "./+types/not-found";

export default function NotFound(_props: Route.ComponentProps) {
  return (
    <div style={{ padding: 24 }}>
      <h1>404 - Sayfa bulunamadı</h1>
      <p>Aradığınız sayfa mevcut değil.</p>
    </div>
  );
}
