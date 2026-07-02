import { Item } from "./styles";

export function Hability({ children, ...props }) {
  return <Item {...props}>{children}</Item>;
}
