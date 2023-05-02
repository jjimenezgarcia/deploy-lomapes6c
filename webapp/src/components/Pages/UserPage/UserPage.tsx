
import ProfileViewer from "../../Solid/User/ProfileViewer";
import { useSession } from "@inrupt/solid-ui-react";

const UserPage = () => {
  //With this we can control the login status for solid
  const { session } = useSession();

  return <>{!session.info.isLoggedIn ? <h1>Not logged in</h1> : <ProfileViewer />}</>;
};

export default UserPage;
