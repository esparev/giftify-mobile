import React from 'react';
import {Text, TextProps} from 'react-native';
import font from '../styles/font';

export const TextRegular = ({children, style}: TextProps) => {
  return <Text style={[{fontFamily: font.regular}, style]}>{children}</Text>;
};

export const TextMedium = ({children, style}: TextProps) => {
  return <Text style={[{fontFamily: font.medium}, style]}>{children}</Text>;
};

export const TextSemiBold = ({children, style}: TextProps) => {
  return <Text style={[{fontFamily: font.semiBold}, style]}>{children}</Text>;
};
