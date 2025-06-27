import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/routers';
import { useNavigation as useNativeNavigation } from '@react-navigation/native';

// making the navigation hook type safe
export function useNavigation() {
  return useNativeNavigation<NativeStackNavigationProp<ParamListBase>>();
}
