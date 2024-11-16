import './components/ClearBtn'; // *modules
import './components/SearchBtn';

// webpack uses index as entry and crawls (line-by-line) in the imports, and repeats in each file into their imports
// we want then to run each file through babel-loader to transpile the code to ES5

import './index.css';

// when webpack encounters the css file, it will put it through a loader which we must configure