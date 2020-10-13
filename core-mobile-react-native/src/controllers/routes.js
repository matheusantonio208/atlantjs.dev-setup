import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import ExamplePage from '#views/pages/example-page';
import OtherExamplePage from '#views/pages/other-example-page';

const Routes = createAppContainer(
  createStackNavigator(
    {
      ExamplePage,
      OtherExamplePage
    },
    {
      defaultNavigationOptions: {
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#7159c1',
        },
      },
    },
  ),
);

export default Routes;
