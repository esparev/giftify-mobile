import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { TextRegular, TextSemiBold } from '../components/CustomText';
import Header from '../components/Header';
import CartItem from '../components/Items/CartItem';
import cart from './styles/cart';

const Cart = () => {
  return (
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
        <TouchableOpacity style={cart.checkoutButton}>
          <TextRegular style={cart.checkoutButtonText}>
            Proceder al pago
          </TextRegular>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
