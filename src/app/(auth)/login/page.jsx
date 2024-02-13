import * as components from "@/components";
import { permanentRedirect } from "next/navigation";
import { cookies } from "next/headers";

const LoginPage = () => {
  const cookiesStore = cookies();
  const token = cookiesStore.get("studentToken");
  if (token) {
    permanentRedirect("/student");
    return;
  }
  return <components.LoginPage />;
};

export default LoginPage;
