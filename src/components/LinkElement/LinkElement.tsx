import { FC } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  to: string;
  text: string;
}
export const LinkElement: FC<NavbarProps> = ({ to, text }) => {
  return (
    <Link className="link" to={to}>
      {text}
    </Link>
  );
};
