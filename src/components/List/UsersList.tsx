import { Users } from "../../api/UserApi";

export default function UserList() {
  return (
    <ul>
      {Users.filter((user) => user.first_name.toLowerCase().includes("a")).map(
        (user) => (
          <li key={user.id}>{user.first_name}</li>
        )
      )}
    </ul>
  );
}
