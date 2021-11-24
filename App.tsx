
import React from 'react';
import {
  Button,
  Text,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  VStack,
} from 'native-base';
import ErrorBoundary from './src/components/ErrorBoundary';
import { observer, Provider } from 'mobx-react';
import { rootStore } from './src/stores/root.store';
import styled from 'styled-components';

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === 'light' ? true : false}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
const App = () => {
  const { guiStore } = rootStore;
  return (
    <ErrorBoundary>
      <Provider rootStore={rootStore}>
        <NativeBaseProvider>
          <Center
            _dark={{ bg: 'blueGray.900' }}
            _light={{ bg: 'blueGray.50' }}
            px={4}
            flex={1}>
            <VStack space={5} alignItems="center">
              <Heading size="lg">Welcome to NativeBase</Heading>
              <HStack>
                <Button onPress={() => guiStore.reset()}>
                  <Text>Reset</Text>
                </Button>
                <Button onPress={() => guiStore.decrement()}>
                  <Text>Decrement</Text>
                </Button>
                <Button onPress={() => guiStore.increment()}>
                  <Text>Increment</Text>
                </Button>
              </HStack>

              <Text>Counter</Text>
              <Text>{guiStore.counter}</Text>

              <ToggleDarkMode />
            </VStack>
          </Center>
        </NativeBaseProvider>
      </Provider>
    </ErrorBoundary>
  );
};
export default observer(App);
