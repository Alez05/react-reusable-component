import { Aspect, Button, Global, Icon } from '@myorg/atom'

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
      </Aspect>
    </div>
  )
}
export default LandingPage
