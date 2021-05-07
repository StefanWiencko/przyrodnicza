import { FC } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  route: string;
}
export const LandingPageNavbar: FC<NavbarProps> = ({ route }) => {
  return <Link className="link" to={route}></Link>;
};
