import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import ExamplePage from '#views/pages/example-page.js';
import OtherExamplePage from '#views/pages/other-example-page.js';

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
