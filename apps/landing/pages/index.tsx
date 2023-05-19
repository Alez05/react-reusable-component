import { Aspect, Global, Icon } from '@myorg/atom'

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
      </Aspect>
    </div>
  )
}
export default LandingPage
