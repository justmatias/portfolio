import { Button } from '@/components/ui/button';
import { HamburgerMenuIcon, Cross2Icon } from '@radix-ui/react-icons';

interface MenuButtonProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuButton: React.FC<MenuButtonProps> = ({ show, setShow }) => {
  if (show) {
    return (
      <Button
        className='md:hidden text-blue-500'
        onClick={() => setShow(false)}
        variant='ghost'
      >
        <Cross2Icon />
      </Button>
    );
  }

  return (
    <Button className='md:hidden' onClick={() => setShow(true)} variant='ghost'>
      <HamburgerMenuIcon />
    </Button>
  );
};
