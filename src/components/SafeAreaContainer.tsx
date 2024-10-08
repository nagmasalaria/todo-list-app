import React from 'react';
import {
  Dimensions,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import colors from '../assets/colors';

const isAndroid: boolean = Platform.OS === 'android';
const fontScale = (fontSize: number) =>
  Dimensions.get('screen').fontScale * fontSize;

interface SafeAreaContainerProps {
  children: React.ReactNode;
  backgroundColor?: string; // optional background color
  isShowTitle?: boolean;
}

const SafeAreaContainer: React.FC<SafeAreaContainerProps> = ({
  children,
  backgroundColor,
  isShowTitle = true,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container]}>
      <StatusBar barStyle="light-content" hidden={true} />
      <View style={[styles.container]}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenHeading: {
    fontSize: fontScale(25),
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: fontScale(28),
    fontWeight: '700',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    fontSize: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2},
    elevation: 3,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginTop: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 3},
    elevation: 3,
  },
  deleteButton: {
    color: '#ff3b30',
    fontWeight: '600',
  },
});

export default SafeAreaContainer;
