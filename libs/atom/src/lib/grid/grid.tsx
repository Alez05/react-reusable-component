import { SGrid } from './grid.style'
import { TGrid } from './grid.type'

export const Grid = ({
  children,
  gap,
  gtcd,
  gtcm,
  gtct,
  gtrd,
  gtrm,
  gtrt,
  padding,
  width,
}: TGrid) => {
  return (
    <SGrid
      $gap={gap}
      $gtcd={gtcd}
      $gtcm={gtcm}
      $gtct={gtct}
      $gtrd={gtrd}
      $gtrm={gtrm}
      $gtrt={gtrt}
      $padding={padding}
      $width={width}
    >
      {children}
    </SGrid>
  )
}
