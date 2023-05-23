import React from 'react';
import { View } from 'react-native';
import homeSkeleton from './styles/homeSkeleton';

const HomeSkeleton = () => {
  return (
    <View style={homeSkeleton.container}>
      {/* Skeleton */}
      <View style={homeSkeleton.card}>
        <View style={homeSkeleton.image} />
        {/* Info */}
        <View style={homeSkeleton.nameContainer}>
          <View style={homeSkeleton.name} />
          <View style={homeSkeleton.nameShort} />
        </View>
        {/* Card Footer */}
        <View style={homeSkeleton.footer}>
          {/* Rating */}
          <View style={homeSkeleton.nameFooter} />
          {/* Price */}
          <View style={homeSkeleton.nameFooter} />
        </View>
      </View>
      {/* Skeleton */}
      <View style={homeSkeleton.card}>
        <View style={homeSkeleton.image} />
        {/* Info */}
        <View style={homeSkeleton.nameContainer}>
          <View style={homeSkeleton.name} />
          <View style={homeSkeleton.nameShort} />
        </View>
        {/* Card Footer */}
        <View style={homeSkeleton.footer}>
          {/* Rating */}
          <View style={homeSkeleton.nameFooter} />
          {/* Price */}
          <View style={homeSkeleton.nameFooter} />
        </View>
      </View>
      {/* Skeleton */}
      <View style={homeSkeleton.card}>
        <View style={homeSkeleton.image} />
        {/* Info */}
        <View style={homeSkeleton.nameContainer}>
          <View style={homeSkeleton.name} />
          <View style={homeSkeleton.nameShort} />
        </View>
        {/* Card Footer */}
        <View style={homeSkeleton.footer}>
          {/* Rating */}
          <View style={homeSkeleton.nameFooter} />
          {/* Price */}
          <View style={homeSkeleton.nameFooter} />
        </View>
      </View>
      {/* Skeleton */}
      <View style={homeSkeleton.card}>
        <View style={homeSkeleton.image} />
        {/* Info */}
        <View style={homeSkeleton.nameContainer}>
          <View style={homeSkeleton.name} />
          <View style={homeSkeleton.nameShort} />
        </View>
        {/* Card Footer */}
        <View style={homeSkeleton.footer}>
          {/* Rating */}
          <View style={homeSkeleton.nameFooter} />
          {/* Price */}
          <View style={homeSkeleton.nameFooter} />
        </View>
      </View>
    </View>
  );
};

export default HomeSkeleton;
