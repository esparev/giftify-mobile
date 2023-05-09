import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { TextRegular, TextSemiBold } from '../components/CustomText';
import Header from '../components/Header';
import CartItem from '../components/Items/CartItem';
import Checkout from '../modals/Checkout';
import cart from './styles/cart';

const Cart = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <View style={cart.main}>
        <View style={cart.container}>
          <Header title="Carrito" isNestedScreen={true} />
          <CartItem />
          <CartItem />
          <CartItem />
        </View>
        {/* Checkout */}
        <View style={cart.checkout}>
          <View style={cart.checkoutInfo}>
            <TextRegular style={cart.checkoutText}>Total:</TextRegular>
            <TextSemiBold style={cart.checkoutPrice}>$100.00</TextSemiBold>
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
      <Checkout modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
};

export default Cart;
