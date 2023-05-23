import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { CartItemListProps, UserIdProps } from '../@types';
import useUserCart from '../graphql/useUserCart';
import getCart from '../api/getCart';
import { getData } from '../storage';
import { TextRegular, TextSemiBold } from '../components/CustomText';
import Header from '../components/Header';
import Checkout from '../modals/Checkout';
import cartStyle from './styles/cart';
import CartList from '../components/Lists/CartList';

const emptyCart = '../assets/icons/basket.png';

const Cart = (props: UserIdProps) => {
  const { route: { params: { userId } } } = props; // prettier-ignore
  const isFocused = useIsFocused();
  const [cart, setCart] = useState<CartItemListProps>();
  const [cartItems, setCartItems] = useState();
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [isEmptyCart, setIsEmptyCart] = useState(false);
  const [total, setTotal] = useState(0);
  // const { data, loading, error } = useUserCart(userId);
  // const isEmptyCart = data?.userCart.length === 0;
  // const total = data?.userCart?.total as number;
  // const fixedTotal = total?.toFixed(2);

  const loadData = async () => {
    try {
      let token: string;

      const userData = await getData();
      token = userData.token;

      const cart = await getCart(userId, token);
      setCart(cart);
      setCartItems(cart.cartItems);
      setIsEmptyCart(cart.length === 0);
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
          <View style={cartStyle.main}>
            <View style={cartStyle.container}>
              <Header title="Carrito" isNestedScreen={true} />
              <CartList cartItems={cartItems} />
            </View>
            {/* Checkout */}
            <View style={cartStyle.checkout}>
              <View style={cartStyle.checkoutInfo}>
                <TextRegular style={cartStyle.checkoutText}>Total:</TextRegular>
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
