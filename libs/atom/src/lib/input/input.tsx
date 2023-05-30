import { SInput } from './input.style'
import { TInput } from './input.type'

const Input = ({
  padding,
  size,
  as,
  click,
  color,
  describedby,
  field,
  form,
  label,
  name,
  placeholder,
  required,
  type,
}: TInput) => {
  return (
    <SInput
      required={required}
      placeholder={placeholder}
      type={type}
      aria-labelledby={label}
      aria-describedby={describedby}
      $size={size}
      $color={color}
      $padding={padding}
      onClick={click}
      {...field}
    ></SInput>
  )
}

export { Input }
