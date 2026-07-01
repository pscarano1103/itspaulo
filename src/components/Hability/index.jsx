import { Hability } from "./styles";

export function Button({ children, ...props }) {
  return <Hability {...props}>{children}</Hability>;
}
