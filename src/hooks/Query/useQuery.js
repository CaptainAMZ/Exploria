import { useRouter, usePathname, useSearchParams } from "next/navigation";

export function useQueryParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // add a query param with a new value
  const addQueryParam = (name, value) => {
    // create a writable copy of the current search params
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    // append the new value for the query param
    current.append(name, value);
    // convert the search params to a string
    const search = current.toString();
    // add a question mark if there are any params
    const query = search ? `?${search}` : "";
    // push the new url to the router
    router.push(`${pathname}${query}`);
  };

  // update a query param with a new value
  const updateQueryParam = (name, value) => {
    // create a writable copy of the current search params
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    // set the new value for the query param
    current.set(name, value);
    // convert the search params to a string
    const search = current.toString();
    // add a question mark if there are any params
    const query = search ? `?${search}` : "";
    // push the new url to the router
    router.push(`${pathname}${query}`);
  };

  // delete a query param
  const deleteQueryParam = (name) => {
    // create a writable copy of the current search params
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    // delete the query param
    current.delete(name);
    // convert the search params to a string
    const search = current.toString();
    // add a question mark if there are any params
    const query = search ? `?${search}` : "";
    // push the new url to the router
    router.push(`${pathname}${query}`);
  };

  // return the custom hook functions
  return { addQueryParam, updateQueryParam, deleteQueryParam };
}
