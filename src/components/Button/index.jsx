import { ContainerButton } from "./styles";

export function Button({ children, ...props }) {
  return (
    <ContainerButton
      {...props}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.96,
      }}
    >
      {children}
    </ContainerButton>
  );
}
