import {
  Aspect,
  Box,
  Button,
  Icon,
  Image,
  Input,
  Modal,
  Text,
} from '@myorg/atom'

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
        <Button size="s" radius="pill">
          Button2
        </Button>
        <Button size="m" radius="normal">
          Button3
        </Button>
        <Button size="l" radius="pill">
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
        <Text size="md" weight="300" color="secondary" as="h2">
          ceva frumos
        </Text>
        <Text size="lg" weight="600" color="hover" as="h3">
          ceva frumos
        </Text>
        <Text size="xl" weight="bold" color="lightGray" as="h4">
          ceva frumos
        </Text>
        <Input name="cv" describedBy="cv" as="h2">
          cv
        </Input>
        <Box justify="space-between" vertical color="danger">
          <Text as="h2">Ceva Frumos</Text>
          <Text as="h2">Ceva Frumos</Text>
          <Text as="h2">Ceva Frumos</Text>
          <Text as="h2">Ceva Frumos</Text>
          <Image
            alt="ceva"
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Flandscapes&psig=AOvVaw0DFVfZDKgSFF7_3xZmc7_J&ust=1685806434903000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNiX_9f0pP8CFQAAAAAdAAAAABAR"
          />
        </Box>

        <Box justify="space-between" vertical color="danger">
          <Modal>ceva frumos</Modal>
        </Box>
      </Aspect>
    </div>
  )
}
export default LandingPage
