interface GiftProps {
  id: string | undefined;
  name: string;
  image: string;
  rating: number;
  price: number;
  description: string | undefined;
  createdAt: string | undefined;
}

interface GiftListProps {
  gifts: GiftProps[];
}
