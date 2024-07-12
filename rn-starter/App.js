import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CountScreen from "./src/screens/CountScreen";
import ColorScreen from "./src/screens/ColorScreen";
import TextScreen from "./src/screens/TextScreen";
import SquareScreenSimple from "./src/screens/SquareScreenSimple";
import SquareScreenMedium from "./src/screens/SquareScreenMedium";
import SquareScreenDifficult from "./src/screens/SquareScreenDifficult";
import SquareScreenReduce from "./src/screens/SquareScreenReduce";
import CountScreenReducer from "./src/screens/CountScreenReducer";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen, 
    Image: ImageScreen,
    Count: CountScreen,
    Color: ColorScreen,
    Text: TextScreen,
    Square1: SquareScreenSimple,
    Square2: SquareScreenMedium,
    Square3: SquareScreenDifficult,
    Square4: SquareScreenReduce,
    CountR: CountScreenReducer
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
