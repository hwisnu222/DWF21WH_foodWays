//Components
import HeaderAdmin from "../component/micro/HeaderAdmin";
import Profile from "../component/macro/Profile";

export default function UserProfile() {
  return (
    <div>
      <HeaderAdmin />
      <Profile
        title="My Profile"
        history="Transaction"
        linkEdit="/edit-user-profile"
      />
    </div>
  );
}
