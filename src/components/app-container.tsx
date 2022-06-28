import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'

type Props = {
  children: React.ReactNode
}

export default function AppContainer(props: Props) {
  <NavigationContainer>
    <NativeBaseProvider>{props.children}</NativeBaseProvider>
  </NavigationContainer>
}
