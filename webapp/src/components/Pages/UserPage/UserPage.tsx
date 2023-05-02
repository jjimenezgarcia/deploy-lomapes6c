
import ProfileViewer from "../../Solid/User/ProfileViewer";
import { useSession } from "@inrupt/solid-ui-react";
import LoginForm from "../LoginPage/LoginPage";

const UserPage = () => {
  //With this we can control the login status for solid
  const { session } = useSession();

  return <>{!session.info.isLoggedIn ? <LoginForm /> : <ProfileViewer />}</>;
};

export default UserPage;
