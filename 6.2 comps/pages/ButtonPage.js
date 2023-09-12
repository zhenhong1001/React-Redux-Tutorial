import Button from '../components/Button';
import { GoBell } from 'react-icons/go';

function ButtonPage() {
  const handleClick = () => {
    console.log('Click!');
  };

  return (
    <div>
      <div>
        <Button secondary outline rounded onClick={handleClick} className='mb-5'>
          <GoBell/>
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>See Deal!</Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
