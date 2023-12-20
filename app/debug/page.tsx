import { setUser } from "@/actions/user.action";
import { userType } from "@/constants";

export default async function debug(
) {
    const debug_user: userType = {
        id: "debugger",
        name: "",
        affiliation: ["debug_lab"],
        field: [],
        role: "",
        works: [],
      };

    await setUser(debug_user);
  return (
    <div>
     Debug Page
    </div>
  )
}
