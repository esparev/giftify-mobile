import { RouteProp } from '@react-navigation/native';

export interface UserProps {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  avatar: string;
}

export interface AuthContextProps {
  user: UserProps | undefined;
  token: string | undefined;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}

export interface GiftProps {
  id: string | undefined;
  name: string;
  image: string;
  rating: number;
  price: number;
  description: string | undefined;
  createdAt: string | undefined;
}

export interface GiftListProps {
  gifts: GiftProps[];
}

type RootStackParamList = {
  Gift: { id: string };
  Profile: {username: string};
  Settings: {username: string};
};

type GiftRouteProp = RouteProp<RootStackParamList, 'Gift'>;
type ProfileRouteProp = RouteProp<RootStackParamList, 'Profile'>;
type SettingsRouteProp = RouteProp<RootStackParamList, 'Settings'>;

export interface GiftScreenProps {
  route: GiftRouteProp;
}
export interface ProfileScreenProps {
  route: ProfileRouteProp | SettingsRouteProp;
}
