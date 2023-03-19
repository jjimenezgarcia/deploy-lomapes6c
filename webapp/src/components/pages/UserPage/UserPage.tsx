import { SessionProvider} from "@inrupt/solid-ui-react";
import LoginForm from "../LoginPage/LoginPage";
import ProfileViewer from "../../User/ProfileViewer";
import { useSession } from "@inrupt/solid-ui-react";

const UserPage = () => {
  //With this we can control the login status for solid
  const { session } = useSession();

  return(
    <SessionProvider sessionId="sessionId">
      {(session.info.isLoggedIn) ? <LoginForm/> : <ProfileViewer/>}
    </SessionProvider>
  )
}

export default UserPage;