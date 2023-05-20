import React, { useState } from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { UserIdProps } from '../@types';
import useUserCart from '../graphql/useUserCart';
import { TextRegular, TextSemiBold } from '../components/CustomText';
import Header from '../components/Header';
import Checkout from '../modals/Checkout';
import cart from './styles/cart';
import CartList from '../components/Lists/CartList';

const emptyCart = '../assets/icons/basket.png';

const Cart = (props: UserIdProps) => {
  const { route: { params: { userId } } } = props; // prettier-ignore
  const [modalVisible, setModalVisible] = useState(false);
  const { data, loading, error } = useUserCart(userId);
  const isEmptyCart = data?.userCart.length === 0;
  const total = data?.userCart?.total as number;
  const fixedTotal = total?.toFixed(2);

  return (
    <View>
      {isEmptyCart ? (
        <View style={cart.main}>
          <Header title="Carrito" isNestedScreen={true} />
          <View style={cart.emptyCart}>
            <Image source={require(emptyCart)} style={cart.emptyCartImg} />
            <View style={cart.emptyInfo}>
              <TextSemiBold style={cart.emptyCartTitle}>
                Tu carrito está vacío
              </TextSemiBold>
              <TextRegular style={cart.emptyCartText}>
                Agrega productos para continuar
              </TextRegular>
            </View>
          </View>
        </View>
      ) : (
        <View>
          <View style={cart.main}>
            <View style={cart.container}>
              <Header title="Carrito" isNestedScreen={true} />
              <CartList cartItems={data?.userCart?.cartItems} />
            </View>
            {/* Checkout */}
            <View style={cart.checkout}>
              <View style={cart.checkoutInfo}>
                <TextRegular style={cart.checkoutText}>Total:</TextRegular>
                <TextSemiBold style={cart.checkoutPrice}>${fixedTotal}</TextSemiBold>
              </View>
              {/* Checkout Button */}
              <TouchableOpacity
                style={cart.checkoutButton}
                onPress={() => setModalVisible(true)}>
                <TextRegular style={cart.checkoutButtonText}>
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
