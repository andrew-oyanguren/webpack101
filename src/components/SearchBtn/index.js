import { searchButton } from '../../common';

const clickHandler = () => {
  console.log('[button] search button clicked');
};

searchButton.addEventListener('click', clickHandler);