
import { StatusBar } from 'react-native'
import { Groups } from '@screens/Groups';
//import { Groups } from '@screens/Groups';
import { Players } from '@screens/Players';
import { ThemeProvider } from "styled-components/native";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

//import { Loading } from "./src/components";
import { Loading } from '@components/Loading';

import theme from './src/theme'


export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      { fontsLoaded ? <Players /> : <Loading /> }
    </ThemeProvider>
  );
}
