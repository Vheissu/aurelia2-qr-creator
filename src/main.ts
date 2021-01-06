import Aurelia, { StyleConfiguration } from 'aurelia';
import { MyApp } from './my-app';

import shared from './shared.css';

Aurelia
  .register(StyleConfiguration.shadowDOM({
    sharedStyles: [shared]
  }))
  .app(MyApp)
  .start();
