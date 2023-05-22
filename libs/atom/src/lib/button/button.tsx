import { SButton } from './button.style'
import type { TButton } from './button.type'

export const Button = ({
  children,
  gap,
  size,
  type,
  width,
  radius,
  padding,
}: TButton) => {
  return (
    <SButton
      $gap={gap}
      $size={size}
      type={type}
      $width={width}
      $radius={radius}
      $padding={padding}
    >
      {children}
    </SButton>
  )
}
