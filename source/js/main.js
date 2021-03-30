import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initMenu} from './modules/init-menu';
import {validateForm} from './modules/validate-form';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initMenu();
validateForm();
