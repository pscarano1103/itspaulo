import * as S from "./styles";

export default function Background() {
  return (
    <S.Container>
      <S.BlobOne
        animate={{
          x: [0, 120, -40, 0],

          y: [0, 80, 40, 0],
        }}
        transition={{
          duration: 18,

          repeat: Infinity,

          ease: "easeInOut",
        }}
      />

      <S.BlobTwo
        animate={{
          x: [0, 120, -40, 0],

          y: [0, 80, 40, 0],
        }}
        transition={{
          duration: 18,

          repeat: Infinity,

          ease: "easeInOut",
        }}
      />

      <S.Grid />

      <S.Noise />
    </S.Container>
  );
}
