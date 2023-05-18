import { RouteProp } from '@react-navigation/native';

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
};

type GiftRouteProp = RouteProp<RootStackParamList, 'Gift'>;

export interface GiftScreenProps {
  route: GiftRouteProp;
}
