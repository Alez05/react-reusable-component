import { Aspect, Button, Global, Icon, Text } from '@myorg/atom'

const LandingPage = () => {
  return (
    <div>
      <Aspect>
        <h1>Welcome to landing!</h1>

        <Icon icon="smile" size="md" />
        <Icon icon="earth" size="lg" />
        <Icon icon="bug" size="xl" />
        <Icon icon="pacman" size="xxl" />
        <Icon icon="briefcase" size="xxxl" />

        <Button size="xs" radius="normal">
          Button1
        </Button>
        <Button size="sm" radius="pill">
          Button2
        </Button>
        <Button size="md" radius="normal">
          Button3
        </Button>
        <Button size="lg" radius="pill">
          Button4
        </Button>
        <Button size="massive">Button5 no radius</Button>
        {/* just to see if it s right */}
        <Text size="xs" weight="lighter" color="danger" title="esti gay">
          ceva frumos
        </Text>
        <Text size="sm" weight="100" color="active" as="h1">
          ceva frumos
        </Text>
        <Text size="md" weight="300" color="darkBorder" as="h2">
          ceva frumos
        </Text>
        <Text size="lg" weight="600" color="hover" as="h3">
          ceva frumos
        </Text>
        <Text size="xl" weight="bold" color="lightGray" as="h4">
          ceva frumos
        </Text>
      </Aspect>
    </div>
  )
}
export default LandingPage
