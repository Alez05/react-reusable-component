import { Icon, Text } from '@myorg/atom'
import { TIconButton } from '@myorg/type'

export const IconButton = ({ href, icon, title, color, size }: TIconButton) => {
  return (
    <Text as="a" href={href} title={title}>
      <Icon color={color} size={size} icon={icon} />
    </Text>
  )
}
