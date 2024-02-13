import { cookies } from "next/headers";
import { permanentRedirect } from "next/navigation";

export function withPageAuth(gssp) {
  return async (context) => {
    const cookieStore = cookies();
    const token = cookieStore.get("studentToken")?.value;

    if (!token) {
      // Redirect to login page
      permanentRedirect("/login");
    }

    return await gssp(context); // Continue on to call `getServerSideProps` logic
  };
}
