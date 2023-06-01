import { SInput } from './input.style'
import { TInput } from './input.type'

export const Input = ({
  describedBy,
  label,
  size,
  field,
  form,
  required,
  placeholder,
  type,
  color,
  padding,
  click,
}: TInput) => {
  return (
    <SInput
      required={required}
      placeholder={placeholder}
      type={type}
      aria-labelledby={label}
      aria-describedby={describedBy}
      $size={size}
      $color={color}
      $padding={padding}
      onClick={click}
      {...field}
    />
  )
}
