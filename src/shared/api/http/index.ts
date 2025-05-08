// src/shared/httpClient.ts
export async function httpClient<T>(
  endpoint: string,
  options: RequestOptions = {},
): Promise<T> {
  const { method = "GET", headers, withAuth, ...rest } = options;
  const finalHeaders = new Headers({
    "Content-Type": "application/json",
    ...headers,
  });

  if (withAuth) {
    const token = localStorage.getItem("token");
    if (token) {
      finalHeaders.set("Authorization", `Bearer ${token}`);
    }
  }

  const response = await fetch(`${import.meta.env.VITE_API_URL}${endpoint}`, {
    method,
    headers: finalHeaders,
    credentials: "include",
    ...rest,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || "Ошибка запроса");
  }

  return response.json();
}
