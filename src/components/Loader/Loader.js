import { ThreeDots } from 'react-loader-spinner';
import { Loader } from './Loader.styled';

const Spinner = () => {
  return (
    <Loader>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="rgb(24, 6, 94)"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Loader>
  );
};

export default Spinner;
