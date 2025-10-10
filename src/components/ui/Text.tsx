import React from 'react';
import { Text as RNText, type TextProps, StyleSheet } from 'react-native';

export default function Text({ style, ...props }: TextProps) {
  return <RNText {...props} style={[styles.default, style]} />;
}

const styles = StyleSheet.create({
  default: { color: '#0F172A' },
});
