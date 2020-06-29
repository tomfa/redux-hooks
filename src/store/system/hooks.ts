import { useSelector } from "react-redux";
import { RootState } from "../index";

export const useAuth = () => {
  const loggedIn = useSelector((state: RootState) => state.system.loggedIn);
  const userName = useSelector((state: RootState) => state.system.userName);

  return { loggedIn, userName };
};
