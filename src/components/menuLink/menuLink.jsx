import "./menulink.css";

// eslint-disable-next-line react/prop-types
export default function MenuLink({ icon, text }) {
  return (
    <div className="menulink">
      {icon}
      <span className="menuLinkText">{text}</span>
      <span className="menuLinkTextName">
        {text === "Logout" && "( John )"}
      </span>
    </div>
  );
}