import {MDCRipple} from '@material/ripple';
import './main.scss';

const buttonRipple = [].slice.call(document.querySelectorAll('.mdc-button'));

buttonRipple.forEach((el) => {
  new MDCRipple(el);
});