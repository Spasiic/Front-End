import { CustomButtonLanding } from "./styles";
import { Link } from "react-router-dom";

type TextButton = {
  text: string;
  route: string;
};

export function LandingButton({ text, route }: TextButton) {
  return (
    <CustomButtonLanding>
      <Link to={route}>{text}</Link>
    </CustomButtonLanding>
  );
}
