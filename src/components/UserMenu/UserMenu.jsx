import { useDispatch } from 'react-redux';
import { Badge, Flex, Text } from '@chakra-ui/react';
import { LogoutBTN } from '../Buttons/Buttons';
import { useAuth } from '../../hooks';
import { logOut } from '../../redux/auth/operations';
import { Link } from 'react-router-dom'

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Flex name="userMenu" align="center" gap={'12px'}>
    <Text ml={2} fontWeight="bold">
      Welcome
      <Badge ml="1" fontSize="1em" variant="subtle" 
          style={{
            color: 'var(--chakra-colors-blue-500)'
          }}>
        {user.name}{' '}{

        } 
      </Badge>
    </Text>
    <Link to= '/profile'>see profile</Link>
    <LogoutBTN handleLogOut={() => dispatch(logOut())} />
  </Flex>
  );
};
