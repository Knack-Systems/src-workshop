import { NgModule } from '@angular/core';
import { translationChunksConfig, translations } from "@spartacus/assets";
import { FeaturesConfig, I18nConfig, OccConfig, provideConfig, SiteContextConfig } from "@spartacus/core";
import { defaultCmsContentProviders, LayoutConfig, layoutConfig, mediaConfig } from "@spartacus/storefront";
// import { ApiUrl } from '../config/api-endpoint';

@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [provideConfig(layoutConfig), provideConfig(mediaConfig), ...defaultCmsContentProviders, provideConfig(<OccConfig>{
    backend: {
      occ: {
        baseUrl: 'https://spartacus-demo.eastus.cloudapp.azure.com:8443',
        prefix: '/occ/v2/',
        // endpoints: ApiUrl
      }
    },
  }), provideConfig(<SiteContextConfig>{
    context: {
      urlParameters: ['baseSite', 'language', 'currency'],
      baseSite: ['electronics-spa', 'apparel-uk-spa'],
      currency: ['USD', 'GBP', 'EUR'],
      language: ['en', 'de'],
    },
  }), provideConfig(<I18nConfig>{
    i18n: {
      resources: translations,
      chunks: translationChunksConfig,
      fallbackLang: 'en'
    },
  }), provideConfig(<FeaturesConfig>{
    features: {
      level: '4.3'
    }
  // }), provideConfig(<LayoutConfig>{
  //   layoutSlots: {
  //     LandingPage2Template: {
  //       slots: ['Section5']
  //     }
  //   }
  })
]
})
export class SpartacusConfigurationModule { }
