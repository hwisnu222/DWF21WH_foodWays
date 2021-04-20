//Components
import HeaderAdmin from "../component/micro/HeaderAdmin";
import Profile from "../component/macro/Profile";

export default function UserProfile() {
  return (
    <div>
      <HeaderAdmin />
      <Profile
        title="My Profile"
        history="Order"
        linkEdit="/edit-user-profile"
      />
    </div>
  );
}
