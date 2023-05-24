import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useMutation } from '@apollo/client';
import { UserIdProps } from '../@types';
import getCart from '../api/getCart';
import useCartByUser from '../graphql/useCart';
import {
  addToCartMutation,
  removeFromCartMutation,
} from '../graphql/cartMutation';
import { getData } from '../storage';
import { TextRegular, TextSemiBold } from '../components/CustomText';
import Header from '../components/Header';
import CartList from '../components/Lists/CartList';
import Checkout from '../modals/Checkout';
import cartStyle from './styles/cart';
import CartSkeleton from '../skeletons/CartSkeleton';

const emptyCart = '../assets/icons/basket.png';

let userUsername: string;

(async () => {
  const userData = await getData();
  userUsername = userData.user.username;
})();

const Cart = (props: UserIdProps) => {
  const { route: { params: { userId } } } = props; // prettier-ignore
  const isFocused = useIsFocused();
  const [cartItems, setCartItems] = useState();
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [isEmptyCart, setIsEmptyCart] = useState(false);
  const [total, setTotal] = useState<number>(0);
  const { data } = useCartByUser(userUsername);
  const [addToCart] = useMutation(addToCartMutation);
  const [removeFromCart] = useMutation(removeFromCartMutation);
  const cartId = data?.user?.cart?.id;

  const handleAddToCart = (giftId?: string, qty?: number, price?: number) => {
    const data = { giftId: giftId, cartId: cartId, quantity: qty };
    setTotal(Number(total) + price!);
    addToCart({ variables: { data: data } });
  };

  const handleRemoveFromCart = (
    giftId?: string,
    qty?: number,
    price?: number,
  ) => {
    const data = { giftId: giftId, cartId: cartId, quantity: qty };
    setTotal(Number(total) - price!);
    removeFromCart({ variables: { data: data } });
  };

  const loadData = async () => {
    try {
      let token: string;

      const userData = await getData();
      token = userData.token;

      const cart = await getCart(userId, token);
      setCartItems(cart.cartItems);
      setIsEmptyCart(cart.cartItems.length === 0);
      setTotal(cart.total.toFixed(2));
      setLoading(false);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    (async () => {
      await loadData();
    })();
  }, [isFocused]);

  return (
    <View>
      {isEmptyCart ? (
        <View style={cartStyle.main}>
          <Header title="Carrito" isNestedScreen={true} />
          <View style={cartStyle.emptyCart}>
            <Image source={require(emptyCart)} style={cartStyle.emptyCartImg} />
            <View style={cartStyle.emptyInfo}>
              <TextSemiBold style={cartStyle.emptyCartTitle}>
                Tu carrito está vacío
              </TextSemiBold>
              <TextRegular style={cartStyle.emptyCartText}>
                Agrega productos para continuar
              </TextRegular>
            </View>
          </View>
        </View>
      ) : (
        <View>
          {loading ? (
            <View style={cartStyle.skeletonMain}>
              <Header title="Carrito" isNestedScreen={true} />
              <CartSkeleton />
            </View>
          ) : (
            <View style={cartStyle.main}>
              <View style={cartStyle.container}>
                <Header title="Carrito" isNestedScreen={true} />
                <CartList
                  cartItems={cartItems}
                  onAddToCart={handleAddToCart}
                  onRemoveFromCart={handleRemoveFromCart}
                />
              </View>
              {/* Checkout */}
              <View style={cartStyle.checkout}>
                <View style={cartStyle.checkoutInfo}>
                  <TextRegular style={cartStyle.checkoutText}>
                    Total:
                  </TextRegular>
                  <TextSemiBold style={cartStyle.checkoutPrice}>
                    ${total}
                  </TextSemiBold>
                </View>
                {/* Checkout Button */}
                <TouchableOpacity
                  style={cartStyle.checkoutButton}
                  onPress={() => setModalVisible(true)}>
                  <TextRegular style={cartStyle.checkoutButtonText}>
                    Proceder al pago
                  </TextRegular>
                </TouchableOpacity>
              </View>
            </View>
          )}

          {/* Checkout Modal */}
          <Checkout
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        </View>
      )}
    </View>
  );
};

export default Cart;
