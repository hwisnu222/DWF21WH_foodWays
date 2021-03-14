//Components
import HeaderPartner from "../component/micro/HeaderPartner";
import Profile from "../component/macro/Profile";

export default function PartProfile() {
  return (
    <div>
      <HeaderPartner />
      <Profile
        title="Profile Partner"
        history="Order"
        linkEdit="/edit-partner-profile"
      />
    </div>
  );
}
