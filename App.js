import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Store, Persistor} from './Src/Store/Store';
import Nav from './Src/Component/Nav';
import AnimatedSplash from 'react-native-animated-splash-screen';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, []);
  return (
    <Provider store={Store}>
      <PersistGate persistor={Persistor}>
        <NavigationContainer>
          <AnimatedSplash
            logoWidht={109}
            logoHeight={109}
            isLoaded={isLoaded}
            backgroundColor={'white'}
            logoImage={require('./Src/Assets/Image/bitcoinLogo.png')}>
            <Nav />
            
          </AnimatedSplash>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
