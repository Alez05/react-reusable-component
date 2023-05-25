import { SText } from './text.style'
import { TText } from './text.type'

export const Text = ({
  children,
  crossed,
  ellipsis,
  as,
  color,
  href,
  size,
  title,
  weight,
}: TText) => {
  return (
    <SText
      $crossed={crossed}
      $ellipsis={ellipsis}
      href={href}
      $color={color}
      $size={size}
      $weight={weight}
      as={as}
      title={title}
    >
      {children}
    </SText>
  )
}
