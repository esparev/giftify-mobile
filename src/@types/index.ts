import { RouteProp } from '@react-navigation/native';

export interface AuthContextProps {
  user: UserProps | undefined;
  token: string | undefined;
}
export interface AuthProviderProps {
  children: React.ReactNode;
}

export interface AddToCartProps {
  giftId: string;
  cartId: string;
  quantity: number;
}
export interface AddressProps {
  id: string | undefined;
  streetName: string;
  streetNumber: string;
  postalCode: string;
  city: string;
  area: string;
  locality: string | undefined;
  country: string | undefined;
  createdAt: string | undefined;
}
export interface CartItemProps {
  id: string | undefined;
  quantity: number;
  gift: GiftProps;
  createdAt: string | undefined;
}
export interface CategoryProps {
  id: string | undefined;
  slug: string;
  name: string;
  hexColor: string;
  image: string;
  createdAt: string | undefined;
}
export interface GiftProps {
  id: string | undefined;
  name: string | undefined;
  image: string | undefined;
  rating: number | undefined;
  price: number | undefined;
  description: string | undefined;
  createdAt: string | undefined;
}
export interface PaymentProps {
  id: string | undefined;
  alias: string | undefined;
  cardholderName: string | undefined;
  last4: string | undefined;
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
  addresses: AddressProps[] | undefined;
}
export interface CartItemListProps {
  cartItems: CartItemProps[] | undefined;
}
export interface CategoryListProps {
  categories: CategoryProps[];
}
export interface GiftListProps {
  gifts: GiftProps[];
}
export interface PaymentListProps {
  payments: PaymentProps[] | undefined;
}

type RootStackParamList = {
  AddAddress: { userId: string };
  AddPayment: { userId: string };
  Addresses: { userId: string };
  Cart: { userId: string };
  EditAddress: { address: AddressProps };
  EditPayment: { payment: PaymentProps };
  Gift: { id: string };
  Payments: { userId: string };
  Profile: { username: string };
  SearchResult: { category?: string; searchInput?: string };
  Settings: { username: string };
};
type AddAddressRouteProp = RouteProp<RootStackParamList, 'AddAddress'>;
type AddPaymentRouteProp = RouteProp<RootStackParamList, 'AddPayment'>;
type AddressesRouteProp = RouteProp<RootStackParamList, 'Addresses'>;
type CartRouteProp = RouteProp<RootStackParamList, 'Cart'>;
type EditAddressRouteProp = RouteProp<RootStackParamList, 'EditAddress'>;
type EditPaymentRouteProp = RouteProp<RootStackParamList, 'EditPayment'>;
type GiftRouteProp = RouteProp<RootStackParamList, 'Gift'>;
type PaymentRouteProp = RouteProp<RootStackParamList, 'Payments'>;
type ProfileRouteProp = RouteProp<RootStackParamList, 'Profile'>;
type SearchRouteProp = RouteProp<RootStackParamList, 'SearchResult'>;
type SettingsRouteProp = RouteProp<RootStackParamList, 'Settings'>;
export interface GiftScreenProps {
  route: GiftRouteProp;
}
export interface ProfileScreenProps {
  route: ProfileRouteProp | SettingsRouteProp;
}
export interface EditAddressScreenProps {
  route: EditAddressRouteProp;
}
export interface EditPaymentScreenProps {
  route: EditPaymentRouteProp;
}
export interface SearchScreenProps {
  route: SearchRouteProp;
}
export interface UserIdProps {
  route:
    | AddAddressRouteProp
    | AddPaymentRouteProp
    | AddressesRouteProp
    | CartRouteProp
    | PaymentRouteProp;
}
