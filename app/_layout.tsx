import React from 'react';
import { Stack } from "expo-router";
import { StatusBar } from 'react-native';
export default function RootLayout() {
  return( 
    <>
    <StatusBar barStyle="dark-content" backgroundColor='#F2F2F2'/>
    <Stack />
    </>
  );
}
