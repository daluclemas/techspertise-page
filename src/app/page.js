import { permanentRedirect } from "next/navigation";
import { cookies } from "next/headers";

export default function Home() {
  const cookiesStore = cookies();
  const token = cookiesStore.get("studentToken");
  if (token) {
    permanentRedirect("/student");
    return;
  }
  permanentRedirect("/login");
  return <></>;
}
