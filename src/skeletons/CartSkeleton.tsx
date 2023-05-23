import React from 'react';
import { View } from 'react-native';
import cartSkeleton from './styles/cartSkeleton';
import { TextSemiBold } from '../components/CustomText';

const CartSkeleton = () => {
  return (
    <View>
      {/* Skeleton */}
      <View style={cartSkeleton.card}>
        {/* Image */}
        <View style={cartSkeleton.image} />
        {/* Info */}
        <View style={cartSkeleton.info}>
          {/* Name */}
          <View style={cartSkeleton.nameContainer}>
            <View style={cartSkeleton.name} />
            <View style={cartSkeleton.nameShort} />
          </View>
          {/* Footer */}
          <View style={cartSkeleton.footer}>
            {/* Quantity Modifier */}
            <View style={cartSkeleton.qtyModifier}>
              <View style={cartSkeleton.qtyBtn} />
              <TextSemiBold style={cartSkeleton.qtyItems}>0</TextSemiBold>
              <View style={cartSkeleton.qtyBtn} />
            </View>
            {/* Price */}
            <View style={cartSkeleton.total} />
          </View>
        </View>
      </View>
      {/* Skeleton */}
      <View style={cartSkeleton.card}>
        {/* Image */}
        <View style={cartSkeleton.image} />
        {/* Info */}
        <View style={cartSkeleton.info}>
          {/* Name */}
          <View style={cartSkeleton.nameContainer}>
            <View style={cartSkeleton.name} />
            <View style={cartSkeleton.nameShort} />
          </View>
          {/* Footer */}
          <View style={cartSkeleton.footer}>
            {/* Quantity Modifier */}
            <View style={cartSkeleton.qtyModifier}>
              <View style={cartSkeleton.qtyBtn} />
              <TextSemiBold style={cartSkeleton.qtyItems}>0</TextSemiBold>
              <View style={cartSkeleton.qtyBtn} />
            </View>
            {/* Price */}
            <View style={cartSkeleton.total} />
          </View>
        </View>
      </View>
      {/* Skeleton */}
      <View style={cartSkeleton.card}>
        {/* Image */}
        <View style={cartSkeleton.image} />
        {/* Info */}
        <View style={cartSkeleton.info}>
          {/* Name */}
          <View style={cartSkeleton.nameContainer}>
            <View style={cartSkeleton.name} />
            <View style={cartSkeleton.nameShort} />
          </View>
          {/* Footer */}
          <View style={cartSkeleton.footer}>
            {/* Quantity Modifier */}
            <View style={cartSkeleton.qtyModifier}>
              <View style={cartSkeleton.qtyBtn} />
              <TextSemiBold style={cartSkeleton.qtyItems}>0</TextSemiBold>
              <View style={cartSkeleton.qtyBtn} />
            </View>
            {/* Price */}
            <View style={cartSkeleton.total} />
          </View>
        </View>
      </View>
      {/* Skeleton */}
      <View style={cartSkeleton.card}>
        {/* Image */}
        <View style={cartSkeleton.image} />
        {/* Info */}
        <View style={cartSkeleton.info}>
          {/* Name */}
          <View style={cartSkeleton.nameContainer}>
            <View style={cartSkeleton.name} />
            <View style={cartSkeleton.nameShort} />
          </View>
          {/* Footer */}
          <View style={cartSkeleton.footer}>
            {/* Quantity Modifier */}
            <View style={cartSkeleton.qtyModifier}>
              <View style={cartSkeleton.qtyBtn} />
              <TextSemiBold style={cartSkeleton.qtyItems}>0</TextSemiBold>
              <View style={cartSkeleton.qtyBtn} />
            </View>
            {/* Price */}
            <View style={cartSkeleton.total} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartSkeleton;
