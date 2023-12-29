import { useRouter, usePathname, useSearchParams } from "next/navigation";

export function useQueryParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const addQueryParam = (name, value) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.append(name, value);
    const search = current.toString();
    const query = search ? `?${search}` : "";
    sessionStorage.setItem("scrollPosition", window.scrollY);
    router.push(`${pathname}${query}`);
    // window.history.pushState(null, "", `${pathname}${query}`);
  };

  const updateQueryParam = (name, value) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set(name, value);
    const search = current.toString();
    const query = search ? `?${search}` : "";
    sessionStorage.setItem("scrollPosition", window.scrollY);
    router.push(`${pathname}${query}`);
    // window.history.pushState(null, "", `${pathname}${query}`);
  };

  const deleteQueryParam = (name) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.delete(name);
    const search = current.toString();
    const query = search ? `?${search}` : "";
    sessionStorage.setItem("scrollPosition", window.scrollY);
    router.push(`${pathname}${query}`);
    // window.history.pushState(null, "", `${pathname}${query}`);
  };

  return { addQueryParam, updateQueryParam, deleteQueryParam };
}
