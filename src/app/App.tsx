import {Provider} from "react-redux";
import {store} from "./store";

import RootNavigator from "./RootNavigator";

function App(): JSX.Element {
  return (
    <Provider store={store}>
       <RootNavigator />
    </Provider>
  );
}
export default App;
