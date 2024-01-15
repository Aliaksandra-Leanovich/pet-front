import { useDispatch } from "react-redux";
import { unsetUser } from "../store/slices/userSlice";

export const useLogOut = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(unsetUser());
  };

  return handleLogout;
};
