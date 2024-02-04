import 'i18next';
import type GeoscellsResources from './GeoscellsResources.d.ts';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: GeoscellsResources;
  }
}
