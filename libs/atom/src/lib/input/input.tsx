import { Box } from '../box'
import { Text } from '../text'
import { SInput } from './input.style'
import { TInput } from './input.type'

const Input = ({
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
  const { [field?.name as string]: errorMessage }: any = form?.errors || {}

  return (
    <Box vertical width={'fit-content'} gap="xs">
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

      {errorMessage && (
        <Box fill="full" light color="danger" padding="m" size="s">
          <Text color="danger">{errorMessage}</Text>
        </Box>
      )}
    </Box>
  )
}

export { Input }
