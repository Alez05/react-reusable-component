import { SBox } from './box.style'
import { TBox, TExtraProps } from './box.type'

const Box = ({
  align,
  as,
  bgColor,
  bgImage,
  children,
  color,
  dark,
  describedBy,
  fill,
  gap,
  gray,
  height,
  hidden,
  inline,
  inset,
  justify,
  label,
  light,
  padding,
  pointer,
  position,
  radius,
  size,
  testId,
  vertical,
  width,
  wrap,
}: TBox) => {
  const extraProps: TExtraProps = {}

  if (describedBy) {
    extraProps['aria-describedby'] = describedBy
  }

  return (
    <SBox
      as={as}
      $gray={gray}
      $color={color}
      $bgColor={bgColor}
      $gap={gap}
      $fill={fill}
      $inline={inline}
      $vertical={vertical}
      $light={light}
      $dark={dark}
      $size={size}
      $radius={radius}
      $bgImage={bgImage}
      $wrap={wrap}
      $hidden={hidden}
      $pointer={pointer}
      $inset={inset}
      $padding={padding}
      $width={width}
      $height={height}
      $align={align}
      $position={position}
      $justify={justify}
      aria-label={label}
      data-testid={testId}
      {...extraProps}
    >
      {children}
    </SBox>
  )
}

export { Box }
