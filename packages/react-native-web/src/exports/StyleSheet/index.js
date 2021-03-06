import modality from '../../modules/modality';
import StyleSheet from './StyleSheet';

// initialize focus-ring fix
modality();

// allow component styles to be editable in React Dev Tools
if (process.env.NODE_ENV !== 'production') {
  const { canUseDOM } = require('fbjs/lib/ExecutionEnvironment');
  if (canUseDOM && window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__.resolveRNStyle = StyleSheet.flatten;
  }
}

export default StyleSheet;
