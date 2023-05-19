import { Aspect, Global, Icon } from '@myorg/atom';

const LandingPage = () => {
  return (
    <div>
      <Aspect>
        <h1>Welcome to landing!</h1>
      </Aspect>
      <div>
        <Icon icon="address-book" />
      </div>
    </div>
  );
};
export default LandingPage;
