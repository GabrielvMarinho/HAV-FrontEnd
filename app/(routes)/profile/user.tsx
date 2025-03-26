interface User {
    name: string;
    role: "Administrator" | "Editor" | "Corretor" | "Cliente";
  }
  
  export default function Profile(props: { user: User }) {
    return (
      <div className="Profile" style={{ display: "flex", flexDirection: "column" }}>
        <div className="personName">
          <p>{props.user.name}</p>
        </div>
        <div className="userType">
          <p>{props.user.role}</p>
        </div>
      </div>
    );
  }
  