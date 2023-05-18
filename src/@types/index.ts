import { RouteProp } from '@react-navigation/native';

export interface AuthContextProps {
  user: UserProps | undefined;
  token: string | undefined;
}
export interface AuthProviderProps {
  children: React.ReactNode;
}

export interface AddressProps {
  id: string | undefined
  streetName: string;
  streetNumber: string;
  postalCode: string;
  city: string;
  area: string;
  locality: string | undefined;
  country: string | undefined;
  createdAt: string | undefined;
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
export interface PaymentProps {
  id: string | undefined;
  alias: string | undefined;
  cardholderName: string;
  last4: string;
  network: string | undefined;
  expiryMonth: number | undefined;
  expiryYear: number | undefined;
  createdAt: string | undefined;
}
export interface UserProps {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  avatar: string;
}

export interface AddressListProps {
  addresses: AddressProps[];
}
export interface GiftListProps {
  gifts: GiftProps[];
}
export interface PaymentListProps {
  payments: PaymentProps[];
}

type RootStackParamList = {
  AddAddress: { userId: string };
  Addresses: { userId: string };
  Gift: { id: string };
  Payments: { userId: string };
  Profile: { username: string };
  Settings: { username: string };
};
type AddAddressRouteProp = RouteProp<RootStackParamList, 'AddAddress'>;
type AddressRouteProp = RouteProp<RootStackParamList, 'Addresses'>;
type GiftRouteProp = RouteProp<RootStackParamList, 'Gift'>;
type PaymentRouteProp = RouteProp<RootStackParamList, 'Payments'>;
type ProfileRouteProp = RouteProp<RootStackParamList, 'Profile'>;
type SettingsRouteProp = RouteProp<RootStackParamList, 'Settings'>;
export interface GiftScreenProps {
  route: GiftRouteProp;
}
export interface ProfileScreenProps {
  route: ProfileRouteProp | SettingsRouteProp;
}
export interface UserIdProps {
  route: AddAddressRouteProp | AddressRouteProp | PaymentRouteProp;
}
