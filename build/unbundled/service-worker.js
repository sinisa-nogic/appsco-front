/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';





/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["/bower_components/app-layout/app-drawer-layout/app-drawer-layout.html","a7474857c8dd25d6a9e5aabe763ec01f"],["/bower_components/app-layout/app-drawer/app-drawer.html","687ac17c2c0adca1adc4031ec5d2f335"],["/bower_components/app-layout/app-header-layout/app-header-layout.html","0916d57aa30b3c1b54946399c8c01f04"],["/bower_components/app-layout/app-header/app-header.html","c6e2d544cf93aa6258ef9ca82baaea6d"],["/bower_components/app-layout/app-scroll-effects/app-scroll-effects-behavior.html","3007817ffcb7fd1cf6528305c0fec9ff"],["/bower_components/app-layout/app-scroll-effects/app-scroll-effects.html","1eaa9e05144414be49e4ee23e16ceca2"],["/bower_components/app-layout/app-scroll-effects/effects/blend-background.html","4723ce7f6429640a812ad866ddddb719"],["/bower_components/app-layout/app-scroll-effects/effects/fade-background.html","3929482c600a21680def557965850501"],["/bower_components/app-layout/app-scroll-effects/effects/material.html","271fe6e745f1a9581a6e01cb3aadce21"],["/bower_components/app-layout/app-scroll-effects/effects/parallax-background.html","391d025dcffee3f042c9d2bdd83be377"],["/bower_components/app-layout/app-scroll-effects/effects/resize-snapped-title.html","4f3bc3dee2d48426998c6e4425df2b14"],["/bower_components/app-layout/app-scroll-effects/effects/resize-title.html","a78d5b787591fb1728631fc5e087cd1c"],["/bower_components/app-layout/app-scroll-effects/effects/waterfall.html","6cbd757de769cd5af213aaebb8780745"],["/bower_components/app-layout/app-toolbar/app-toolbar.html","bde0a79d3265bef565ee86c699b6bbae"],["/bower_components/app-layout/helpers/helpers.html","95b52c0c05f77b65bc1b5dc0715d2495"],["/bower_components/app-localize-behavior/app-localize-behavior.html","73e949ff1fd1b07e3a24ca37a5da4523"],["/bower_components/app-route/app-location.html","0c082f44abb664591f5b99e57a3855e6"],["/bower_components/app-route/app-route-converter-behavior.html","3b85a02b434cbccdcb87396be3554258"],["/bower_components/app-route/app-route.html","ee6897a01647904badcc856c1a4cb6ec"],["/bower_components/appsco-account/appsco-account-2fa-enable.html","f07574297dc0be32c74dfa343702fb9e"],["/bower_components/appsco-account/appsco-account-actions.html","cf35c4e95f13e66e88b25aeb335cab65"],["/bower_components/appsco-account/appsco-account-authorized-app-revoke.html","9e4e7cf3a4641260912d09855f800948"],["/bower_components/appsco-account/appsco-account-authorized-app.html","ad7935aa05a912e4626f922014d2890f"],["/bower_components/appsco-account/appsco-account-authorized-apps.html","032370416bb1893e370f42bcc3594033"],["/bower_components/appsco-account/appsco-account-change-password.html","0ce873be79872a1e7eb2f460f623acf0"],["/bower_components/appsco-account/appsco-account-details.html","14c63e33174b5ea503ec2f1622f229f7"],["/bower_components/appsco-account/appsco-account-image-settings.html","fee054bd2afcdb4a11742287c8270515"],["/bower_components/appsco-account/appsco-account-item.html","28fc30f7dc75e61ee1664deee76f2451"],["/bower_components/appsco-account/appsco-account-log-item.html","9f8ab0ef3838917c25bcbe890fdc0d61"],["/bower_components/appsco-account/appsco-account-log.html","1fd73236978251c3dcfc4ab8a3e82e32"],["/bower_components/appsco-account/appsco-account-notifications.html","61a45a21af888bf3800f7227b42ae272"],["/bower_components/appsco-account/appsco-account-partner.html","76a79f41df8ba571c4b212b6a8a954ba"],["/bower_components/appsco-account/appsco-account-security.html","3c83a0d88eec5dd355e1dc283e9c1adb"],["/bower_components/appsco-account/appsco-account-settings.html","03e69255cfe2e5dc4d6ac474fcbb223e"],["/bower_components/appsco-account/appsco-account-transfer-token.html","8f34dd43b2700db24a89c3988784961d"],["/bower_components/appsco-account/appsco-accounts.html","91cc1f6f2e960abbaa7946f370139a45"],["/bower_components/appsco-account/company/appsco-account-orgunit-item.html","f1f464fde112e08e84f33be0ba43717a"],["/bower_components/appsco-account/company/appsco-account-orgunit.html","874915164139c78ce36f283d974bf9c5"],["/bower_components/appsco-account/company/appsco-account-orgunits.html","e4d91e7941083c1b7e41cf391448dd60"],["/bower_components/appsco-account/company/appsco-account-remove-orgunit.html","79b6067113a39f8542602c747f849f4d"],["/bower_components/appsco-account/company/appsco-account-remove.html","662f00497e2afc42fb3e559c873e36d2"],["/bower_components/appsco-account/company/appsco-company-account-change-password.html","2a9d114c1eae06199afcffa2671e70cd"],["/bower_components/appsco-application/appsco-application-actions.html","cecfd20acadff38e2da06fe0a431beda"],["/bower_components/appsco-application/appsco-application-add-link.html","4373dcbfc8afffa9cd79f49c269a3c8e"],["/bower_components/appsco-application/appsco-application-add-search.html","a8cf6b5dcd2437922efbe257a4ac1275"],["/bower_components/appsco-application/appsco-application-add-settings.html","579fde4ab012ab7cf743cba7c7278214"],["/bower_components/appsco-application/appsco-application-add.html","647fd588bd5f7560cbb901fd838b7a8f"],["/bower_components/appsco-application/appsco-application-analytics-info.html","404684d902f92bb6767f90b73f3cfa62"],["/bower_components/appsco-application/appsco-application-analytics-security.html","4484bd84a40c859185b59746e4666ee1"],["/bower_components/appsco-application/appsco-application-autologin.html","169bbb203809e31a8d81f44a7b49cdde"],["/bower_components/appsco-application/appsco-application-details.html","c41971ee9c003ed7ee5713ae362e4917"],["/bower_components/appsco-application/appsco-application-info.html","c8353b568c75b2c4cca67f240df08732"],["/bower_components/appsco-application/appsco-application-item.html","f76facb5356473020054d7120ca11516"],["/bower_components/appsco-application/appsco-application-log.html","ace81e0f6918e808753ef5c89757e969"],["/bower_components/appsco-application/appsco-application-remove.html","fa048b5c76ae8b466a1e48553368d1d2"],["/bower_components/appsco-application/appsco-application-security.html","ab5a16e2fa33c07f24177d4f1663f57b"],["/bower_components/appsco-application/appsco-application-settings.html","5f5210beec9aab8ae7b888708f1fb047"],["/bower_components/appsco-application/appsco-application-share.html","49c8c960a910e1081ee3273a2e0e2e97"],["/bower_components/appsco-application/appsco-application-sharing-settings.html","adf9f3d3db826781dca12cd4fd42bea7"],["/bower_components/appsco-application/appsco-application-subscriber-revoke.html","f7c54a30edd909b17d2dad434c975d34"],["/bower_components/appsco-application/appsco-application-subscriber.html","e9ac57b530b0d923d6de09e1b2fd72c8"],["/bower_components/appsco-application/appsco-application-subscribers.html","330a5eb766dd6c38a0ea508213833df9"],["/bower_components/appsco-application/appsco-applications.html","6f218fad7d955b4abcbd336f7472b18e"],["/bower_components/appsco-application/company/appsco-application-assignee-claims.html","7a2ca0f4d4995786d30e462109117c7a"],["/bower_components/appsco-application/company/appsco-application-assignee-revoke.html","b629798433c62db7af804e8d24bd6ebd"],["/bower_components/appsco-application/company/appsco-application-assignee.html","2cfab2525bab94da3f0d5ebd389ea74f"],["/bower_components/appsco-application/company/appsco-application-assignees.html","10b7128c32c560accc9a4d02a1532cfb"],["/bower_components/appsco-application/company/appsco-application-orgunit-item.html","978308f502bbb86bd5767eaeb4d7a6ae"],["/bower_components/appsco-application/company/appsco-application-orgunit.html","dbd25f3491b05f9ad173caa9f77f6f0e"],["/bower_components/appsco-application/company/appsco-application-orgunits.html","b38df767d29169955b9cd0a130e3baae"],["/bower_components/appsco-application/company/appsco-application-remove-orgunit.html","40f4bab7a94c1b1c97eb2672a3d7e3f0"],["/bower_components/appsco-application/company/appsco-card-item.html","c325a9388d0fb3465dc8b02a7ac076d3"],["/bower_components/appsco-application/company/appsco-company-application-add.html","467957dd16f2645097927c0be3230e55"],["/bower_components/appsco-application/company/appsco-company-application-remove.html","e0ecd67526af86db19e2d6f47cd9b698"],["/bower_components/appsco-application/company/appsco-company-application-share.html","63da8e3f241cdf3ccb6a30f73803532a"],["/bower_components/appsco-components/appsco-api.html","a15b004959b01a90cf3d2cab18afaa0a"],["/bower_components/appsco-components/appsco-copy.html","c449a912a9873a1b288096311443632a"],["/bower_components/appsco-components/appsco-date-format.html","d4aa01e5d4ca22fd6997b449530868f5"],["/bower_components/appsco-components/appsco-form-error.html","7eea8da2061c18b63c5bd3a3af8017f7"],["/bower_components/appsco-components/appsco-list-item.html","e1aa4b509c0a9706264d4779b1375491"],["/bower_components/appsco-components/appsco-loader.html","899ab89c2b989dc9be02680d1ef98204"],["/bower_components/appsco-components/appsco-price.html","7fa345ad1ce7dc32d28ab9e39d61e4ac"],["/bower_components/appsco-header/appsco-account-chat.html","3ab1214315f845c2bc2d0aef9798acf3"],["/bower_components/appsco-header/appsco-account-info-account.html","60fbb53b5b3da21ac0ccbca6da35b66b"],["/bower_components/appsco-header/appsco-account-info.html","0a3569de7a000216c593e0536884ed3e"],["/bower_components/appsco-header/appsco-account-notifications-dropdown.html","c21f22cceb000b049206562362747ef0"],["/bower_components/appsco-header/appsco-brand.html","9c1fd81a3429406729b628a3714df712"],["/bower_components/appsco-header/appsco-dropdown.html","2b7b53146d2f4c979bf0a9cba198bfc7"],["/bower_components/appsco-header/appsco-header-account-actions.html","be9ae89487fc593c6e906b88d55d756a"],["/bower_components/appsco-header/appsco-header.html","27ecbca0c452f82258d7cf5169845a63"],["/bower_components/appsco-header/appsco-product.html","c3da47de3b1f1fc8e9c42ecdab3e47cd"],["/bower_components/appsco-orgunit/appsco-orgunit-item.html","962f31b39bd3d6501724bef8337ac0fb"],["/bower_components/appsco-orgunit/appsco-orgunit-modify.html","7a75fa79d07663846670c9d6cd16b786"],["/bower_components/appsco-orgunit/appsco-orgunit-remove.html","2a938d7b7b8ae8ba29673a81b0986642"],["/bower_components/appsco-orgunit/appsco-orgunit-tree.html","90cebd965ececf3c1b66ac0db38bfa0c"],["/bower_components/appsco-page/appsco-content.html","9550370dd2e65e83551010b538559fa4"],["/bower_components/appsco-page/appsco-page-global.html","6016ff53a17ee13ea2a8daecfd0d8eda"],["/bower_components/appsco-vault/appsco-vault-actions.html","dc7ee03620f113a3205208e57e1341f9"],["/bower_components/appsco-vault/appsco-vault-credit-card.html","3e8b7e10bd0ad24f77362aef818822d1"],["/bower_components/appsco-vault/appsco-vault-details.html","43090daba0337df0e133e185f94e8c9b"],["/bower_components/appsco-vault/appsco-vault-identity.html","9325cf0f9f180ab76c20dda4dc608ee0"],["/bower_components/appsco-vault/appsco-vault-info.html","7d9704409be8a3f69282e14bca3ebb2c"],["/bower_components/appsco-vault/appsco-vault-item.html","0559980c62c1bd4b33ce1bb08ebdb0b9"],["/bower_components/appsco-vault/appsco-vault-items.html","769165b91f90c8c2d67d9f9fb809c619"],["/bower_components/appsco-vault/appsco-vault-login.html","bc325d2b7cb08794cfb89c1b7aec5c9b"],["/bower_components/appsco-vault/appsco-vault-passport.html","8b69146f41e18f8456e85fca32c88583"],["/bower_components/appsco-vault/appsco-vault-remove.html","c01092ab62ca3e0b4746c980cb8221ec"],["/bower_components/appsco-vault/appsco-vault-secure-note.html","a1f6131cc8e041de33260f1763a56e9a"],["/bower_components/appsco-vault/appsco-vault-software-license.html","f7dadef334d81d0396f6789f18cc8d6d"],["/bower_components/font-roboto/roboto.html","09500fd5adfad056ff5aa05e2aae0ec5"],["/bower_components/gold-cc-cvc-input/gold-cc-cvc-input.html","ec0b6514ae6b3302dd67882cdea32c3e"],["/bower_components/gold-cc-input/cc-validator.js","e50eb02d60aec50c82fd9ef76000b157"],["/bower_components/gold-cc-input/gold-cc-input.html","aebca7832e44318ff19e6b2ae1ba5360"],["/bower_components/gold-email-input/gold-email-input.html","1d2c7b932503fd992415b5fbf614fda8"],["/bower_components/intl-messageformat/dist/intl-messageformat.min.js","6d09d1bd7317183aaa17fc78c1a8edd0"],["/bower_components/iron-a11y-announcer/iron-a11y-announcer.html","a3bd031e39dde38cb8e619f670ee50f7"],["/bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html","c4c3d44402c9d456c38c14da04d206b9"],["/bower_components/iron-a11y-keys/iron-a11y-keys.html","fd2760ee5676b7615aaa24d695c5295d"],["/bower_components/iron-ajax/iron-ajax.html","d606b330d7bd040660a53a5cda7f8acf"],["/bower_components/iron-ajax/iron-request.html","c2d289c4b20653353cff315cf247a45e"],["/bower_components/iron-autogrow-textarea/iron-autogrow-textarea.html","e32f1ec89e4dd9d42f2f2a746a2ad2a9"],["/bower_components/iron-behaviors/iron-button-state.html","6565a80d1af09299c1201f8286849c3b"],["/bower_components/iron-behaviors/iron-control-state.html","1c12ee539b1dbbd0957ae26b3549cc13"],["/bower_components/iron-checked-element-behavior/iron-checked-element-behavior.html","6fd1055c2c04382401dc910a0db569c6"],["/bower_components/iron-dropdown/iron-dropdown-scroll-manager.html","fe09653502aaa6271d6ba8533de60f22"],["/bower_components/iron-dropdown/iron-dropdown.html","0c8c3226b6e6a351b098fa4d794ee702"],["/bower_components/iron-fit-behavior/iron-fit-behavior.html","8d3799ca2f619ed4f31261bb03284671"],["/bower_components/iron-flex-layout/iron-flex-layout-classes.html","90471c0acb830c41b01e02a2507bed3c"],["/bower_components/iron-flex-layout/iron-flex-layout.html","3987521c615734e4fe403f9acecfea54"],["/bower_components/iron-form-element-behavior/iron-form-element-behavior.html","a64177311979fc6a6aae454cb85ea2be"],["/bower_components/iron-form/iron-form.html","d567cf610fac57ae3c30af80c5400750"],["/bower_components/iron-icon/iron-icon.html","f2a0dfd0b79864b4f4efb578417a3fef"],["/bower_components/iron-icons/av-icons.html","277a5dd3faff0799aa9fa1f5cd5a1801"],["/bower_components/iron-icons/communication-icons.html","4bfa3743264bd5510028ec68cba8ed9e"],["/bower_components/iron-icons/editor-icons.html","0f06130b4e9fa1761ae2bc9e2f1f10d3"],["/bower_components/iron-icons/hardware-icons.html","ff29c05b924ec665bd07449d0a8bc762"],["/bower_components/iron-icons/iron-icons.html","224dfbc53cf908d9ae68da954ca2d8e9"],["/bower_components/iron-icons/social-icons.html","ee8983a2f719e9fd83620dd5a905187b"],["/bower_components/iron-iconset-svg/iron-iconset-svg.html","8d0d7213b8c3325ca7e5a658ca9aaf17"],["/bower_components/iron-image/iron-image.html","72175f3ce2bc8e6bf3436ab8749b470e"],["/bower_components/iron-input/iron-input.html","3e393eda6c241be2817ce0acc512bcf6"],["/bower_components/iron-localstorage/iron-localstorage.html","acb3df7483568a40df937ed2eb161c3c"],["/bower_components/iron-location/iron-location.html","0ca9fd93d23992a9340ce7c433557226"],["/bower_components/iron-location/iron-query-params.html","32a96be5536aea89a925d16146cb7015"],["/bower_components/iron-media-query/iron-media-query.html","7436f9608ebd2d31e4b346921651f84b"],["/bower_components/iron-menu-behavior/iron-menu-behavior.html","d3f30152b76f2fa27e02739a99060a29"],["/bower_components/iron-menu-behavior/iron-menubar-behavior.html","a0cc6674fc6d9d7ba0b68ff680b4e56b"],["/bower_components/iron-meta/iron-meta.html","dd4ef14e09c5771e70292d70963f6718"],["/bower_components/iron-overlay-behavior/iron-focusables-helper.html","1607d4d8a7d922ade7894167368ccc31"],["/bower_components/iron-overlay-behavior/iron-overlay-backdrop.html","35013b4b97041ed6b63cf95dbb9fbcb4"],["/bower_components/iron-overlay-behavior/iron-overlay-behavior.html","9e9090df0515a2c8b755bd9c2e944b45"],["/bower_components/iron-overlay-behavior/iron-overlay-manager.html","7f741ba06ffd837bf1697e8778b94731"],["/bower_components/iron-pages/iron-pages.html","5872a2ad58225c94b14ddea747f67cbd"],["/bower_components/iron-range-behavior/iron-range-behavior.html","34f5b83882b6b6c5cfad7543caab080e"],["/bower_components/iron-resizable-behavior/iron-resizable-behavior.html","e93449ccd4312e4e30060c87bd52ed25"],["/bower_components/iron-scroll-target-behavior/iron-scroll-target-behavior.html","d0eb39331820f58f3cdcebaa0eed0209"],["/bower_components/iron-selector/iron-multi-selectable.html","46d6620acd7bad986d81097d9ca91692"],["/bower_components/iron-selector/iron-selectable.html","65b04f3f5f1b551d91a82b36f916f6b6"],["/bower_components/iron-selector/iron-selection.html","83545b7d1eae4020594969e6b9790b65"],["/bower_components/iron-selector/iron-selector.html","4d2657550768bec0788eba5190cddc66"],["/bower_components/iron-validatable-behavior/iron-validatable-behavior.html","02bf0434cc1a0d09e18413dea91dcea1"],["/bower_components/neon-animation/animations/cascaded-animation.html","3a5a8c22afe014a904557b66938c44ba"],["/bower_components/neon-animation/animations/fade-in-animation.html","b814c818dbcffe2bb50563e1406497df"],["/bower_components/neon-animation/animations/fade-out-animation.html","44988226230af0e6d92f0988fc8688e2"],["/bower_components/neon-animation/animations/hero-animation.html","4feaf331f46d411ce9ad465da1dbb65e"],["/bower_components/neon-animation/animations/opaque-animation.html","8e2f63bbc648796f3ed96834a5553d07"],["/bower_components/neon-animation/animations/reverse-ripple-animation.html","1e08f758cb172f8fb19fabffc163a180"],["/bower_components/neon-animation/animations/ripple-animation.html","4d33252f387c84d0702efaaf510990b0"],["/bower_components/neon-animation/animations/scale-down-animation.html","e9cedffa151b388200cb2a610b2252fc"],["/bower_components/neon-animation/animations/scale-up-animation.html","20059304b9b7e9377379ad75110ef2fc"],["/bower_components/neon-animation/animations/slide-down-animation.html","31286bfe0b2cb6f28ef5e1f9d181f641"],["/bower_components/neon-animation/animations/slide-from-bottom-animation.html","12eea18013bf5b89c642fde725469a62"],["/bower_components/neon-animation/animations/slide-from-left-animation.html","cb18058340412077b0b0a8a7228a79a6"],["/bower_components/neon-animation/animations/slide-from-right-animation.html","79f28e3d4580cef016e6ae8c63384e98"],["/bower_components/neon-animation/animations/slide-from-top-animation.html","565391366846573f1725585d15b9baad"],["/bower_components/neon-animation/animations/slide-left-animation.html","a44c677c010daf7872b77f53bcd86e58"],["/bower_components/neon-animation/animations/slide-right-animation.html","b9908b67414ba0dfc7442eb1207d05fc"],["/bower_components/neon-animation/animations/slide-up-animation.html","bee63970c6ffc2706419533c9b2bd65e"],["/bower_components/neon-animation/animations/transform-animation.html","c64feaff2d50eb6f6633c644063c6aa3"],["/bower_components/neon-animation/neon-animatable-behavior.html","270f52231303cae4cb8e3fadb5a805c1"],["/bower_components/neon-animation/neon-animated-pages.html","8bb61cb8467f755163cec87e954425fc"],["/bower_components/neon-animation/neon-animation-behavior.html","eb1cdd9cd9d780a811fd25e882ba1f8e"],["/bower_components/neon-animation/neon-animation-runner-behavior.html","782cac67e6cb5661d36fb32d9129ff03"],["/bower_components/neon-animation/neon-animations.html","3b6524b3cc95f27b4b6d7821a7097137"],["/bower_components/neon-animation/neon-shared-element-animatable-behavior.html","d891492be81d44fcf6dfb54fd8d73ae2"],["/bower_components/neon-animation/neon-shared-element-animation-behavior.html","59b343c52eef4ff93901a3cba99577d6"],["/bower_components/neon-animation/web-animations.html","b310811179297697d51eac3659df7776"],["/bower_components/paper-behaviors/paper-button-behavior.html","edddd3f97cf3ea944f3a48b4154939e8"],["/bower_components/paper-behaviors/paper-checked-element-behavior.html","59702db25efd385b161ad862b8027819"],["/bower_components/paper-behaviors/paper-inky-focus-behavior.html","51a1c5ccd2aae4c1a0258680dcb3e1ea"],["/bower_components/paper-behaviors/paper-ripple-behavior.html","b6ee8dd59ffb46ca57e81311abd2eca0"],["/bower_components/paper-button/paper-button.html","3f061a077ee938fac479622156071296"],["/bower_components/paper-card/paper-card.html","d16397757d387d8d095e5a85f5b016ab"],["/bower_components/paper-checkbox/paper-checkbox.html","1c5af2743fed525fe96db75f8a12b2d2"],["/bower_components/paper-dialog-behavior/paper-dialog-behavior.html","b9cf5384b29cd12a724965080916b6f1"],["/bower_components/paper-dialog-behavior/paper-dialog-shared-styles.html","8fb5282b6149bc429b6baef5c077a285"],["/bower_components/paper-dialog-scrollable/paper-dialog-scrollable.html","49e3023a68129496c360dc9613f34bfc"],["/bower_components/paper-dialog/paper-dialog.html","7a8d86ed89c215baf8cc42e4d7335271"],["/bower_components/paper-dropdown-menu/paper-dropdown-menu-icons.html","d309383cfdcf6733d4e6827c3b877c72"],["/bower_components/paper-dropdown-menu/paper-dropdown-menu-shared-styles.html","c18c68e91e13e2102f577c1c55ce7598"],["/bower_components/paper-dropdown-menu/paper-dropdown-menu.html","879115bf8199d7d13c336144a32115d4"],["/bower_components/paper-icon-button/paper-icon-button.html","2a75de00f858ae1e894ab21344464787"],["/bower_components/paper-input/paper-input-addon-behavior.html","de7b482dc1fb01847efba9016db16206"],["/bower_components/paper-input/paper-input-behavior.html","3960579058d3ba0a74ae7b67b78f53c2"],["/bower_components/paper-input/paper-input-char-counter.html","94c2003f281325951e3bf5b927a326bb"],["/bower_components/paper-input/paper-input-container.html","0ddbde66d15452d5bdec103ef876e5af"],["/bower_components/paper-input/paper-input-error.html","b90f3a86d797f1bdbbb4d158aeae06ab"],["/bower_components/paper-input/paper-input.html","3385511052db3467ca6ec155faa619ad"],["/bower_components/paper-input/paper-textarea.html","78d76834edef0df80643268c0c3e6d75"],["/bower_components/paper-item/paper-item-behavior.html","82636a7562fd8b0be5b15646ee461588"],["/bower_components/paper-item/paper-item-shared-styles.html","31466267014182098267f1b9303f656e"],["/bower_components/paper-item/paper-item.html","e614731572c425b144aa8a9da24ee3ea"],["/bower_components/paper-listbox/paper-listbox.html","bfbc631d72b3e7b2b611c9a32430e3c6"],["/bower_components/paper-material/paper-material-shared-styles.html","d0eeeb696e55702f3a38ef1ad0058f59"],["/bower_components/paper-material/paper-material.html","47301784c93c3d9989abfbab68ec9859"],["/bower_components/paper-menu-button/paper-menu-button-animations.html","a6d6ed67a145ca00d4487c40c4b06273"],["/bower_components/paper-menu-button/paper-menu-button.html","2b2f79e8b3b50e4aabd2dd3ada9b6814"],["/bower_components/paper-progress/paper-progress.html","5dd0b9f89efdfd4f3cce0a13bd67fe6f"],["/bower_components/paper-radio-button/paper-radio-button.html","77245afe186a3d58b33fac4000a310ca"],["/bower_components/paper-radio-group/paper-radio-group.html","a05f50c465653f06b7273664068d6684"],["/bower_components/paper-ripple/paper-ripple.html","e22bc21b61184cb28125d16f9d80fb59"],["/bower_components/paper-spinner/paper-spinner-behavior.html","82e814c4460e8803f6f57cc457658adf"],["/bower_components/paper-spinner/paper-spinner-lite.html","1f3147475d9a3446bc78cdb44103defa"],["/bower_components/paper-spinner/paper-spinner-styles.html","a2122d2c0f3ac98e6911160d8886d31a"],["/bower_components/paper-spinner/paper-spinner.html","940e64bbde54dad918d0f5c0e247a8bd"],["/bower_components/paper-styles/color.html","430305db311431da78c0a6e1236f9ebe"],["/bower_components/paper-styles/default-theme.html","c910188e898624eb890898418de20ee0"],["/bower_components/paper-styles/shadow.html","fc449492f51292636b499bc5d7b9b036"],["/bower_components/paper-styles/typography.html","bdd7f31bb85f116ce97061c4135b74c9"],["/bower_components/paper-tabs/paper-tab.html","395fdc6be051eb7218b1c77a94eff726"],["/bower_components/paper-tabs/paper-tabs-icons.html","9fb57777c667562392afe684d85ddbe2"],["/bower_components/paper-tabs/paper-tabs.html","4239831dfe30b1103bafb24acb53162b"],["/bower_components/paper-toast/paper-toast.html","f64d10724104f3751cae8b764aef56ff"],["/bower_components/paper-toggle-button/paper-toggle-button.html","702fe14489d6fff69b003b3540964e11"],["/bower_components/paper-tooltip/paper-tooltip.html","ba34997662a16417bf99bac94287a986"],["/bower_components/polymer/polymer-micro.html","c8afdb92849d162268e7cc58eff5cd57"],["/bower_components/polymer/polymer-mini.html","33af9817ee3946c225d038f5a04d276a"],["/bower_components/polymer/polymer.html","186cfd0bba3b39fd262e69dc7bcc699a"],["/bower_components/promise-polyfill/Promise.js","5afb14fd81497aca81bf25929d65b02d"],["/bower_components/promise-polyfill/promise-polyfill-lite.html","06470312beff013fc54695e0bdda2cb3"],["/bower_components/vaadin-date-picker/vaadin-date-picker-behavior.html","96159ea2af315e3067fa0b912c3f4788"],["/bower_components/vaadin-date-picker/vaadin-date-picker-helper.html","f25a7e2c5dacd48f922c1c22acbb8343"],["/bower_components/vaadin-date-picker/vaadin-date-picker-icons.html","a177c7bab53f3bab14f54a60e2251393"],["/bower_components/vaadin-date-picker/vaadin-date-picker-overlay.html","04061de374ef206c9241f77023ad0b06"],["/bower_components/vaadin-date-picker/vaadin-date-picker.html","27836dc81385db666a63c5b8ca134014"],["/bower_components/vaadin-date-picker/vaadin-infinite-scroller.html","09f102e2c27ae5864bc78ba97ecdffd4"],["/bower_components/vaadin-date-picker/vaadin-month-calendar.html","76fab9321700f6cb1ee4cc8d848fd262"],["/bower_components/vaadin-upload/vaadin-upload-file.html","54264f8a559a4d6d97471968ae3e160d"],["/bower_components/vaadin-upload/vaadin-upload-icons.html","d11b799880d87e6fd0e72b91bc206101"],["/bower_components/vaadin-upload/vaadin-upload.html","51029d2d12e959db3a007b2bd076b6a8"],["/bower_components/web-animations-js/web-animations-next-lite.min.js","04197e2ccec914fa460eef2ac140c853"],["/bower_components/webcomponentsjs/webcomponents-lite.min.js","02395895d5d08242c6ba93518a6da2c5"],["/index.html","5649f6e1df5513255878e86455c63acd"],["/manifest.json","2eefc15db4b58758cddc0d666e27d399"],["/src/account/appsco-account-2fa-manage.html","fbd0764be236b2f3e14350841edb2a48"],["/src/account/appsco-account-2fa-page.html","80362f783c1d439f9112bb5363bfff34"],["/src/account/appsco-account-authorized-apps-page.html","a5edba25cefd442a5c2d225e5d4c338b"],["/src/account/appsco-account-change-password-page.html","f2653009aabc58616e1d4f9a2996aa4a"],["/src/account/appsco-account-components-page.html","9701a0b58558fb4ba07f77e6c96f4fe5"],["/src/account/appsco-account-log-page.html","7becc532e5be45098a0ecbeaee75a0a0"],["/src/account/appsco-account-notifications-page.html","80cd7eb2fdcb11ee85d3e50a77ef0d45"],["/src/account/appsco-account-page-actions.html","af0b51caafa60dd168c7f48180dc9262"],["/src/account/appsco-account-settings-page.html","dccb74adbf997ec9c6f9705093e26a38"],["/src/account/appsco-account-transfer-token-page.html","284dea15e1a2d9e6e0623b638ef29619"],["/src/application/appsco-application-components-page.html","9b7576438c94b1825b086fdfcc026f7b"],["/src/application/appsco-application-log-page.html","2ec717ce27574a11839e7c34f608aa52"],["/src/application/appsco-application-page-actions.html","f5c24d35bc25faffb70a18e01f07999b"],["/src/application/appsco-application-settings-page.html","0cae60e35f363406ddd599d6e6397c17"],["/src/application/appsco-application-subscribers-page.html","aa2a63eac19b73f82ac9fe9ab6c6e30b"],["/src/application/appsco-home-page-actions.html","11536cec5726113565190159389faf5d"],["/src/applications/appsco-application-assignees-page.html","289b3b2a826faa8b5f4751c8c34a0812"],["/src/applications/appsco-application-orgunits-page.html","5bba95d5e24d9ce8b51ce6ea427c438f"],["/src/applications/appsco-application-sharing-settings-page.html","b899b53c556b8fa3efd54b6db4a3a1ff"],["/src/applications/appsco-applications-page-actions.html","8c6f2bbcc763ceae501b06736aa29eb2"],["/src/applications/appsco-manage-application-components-page.html","268e11992c146a2372da77aa7be318b1"],["/src/applications/appsco-manage-application-page-actions.html","c09218ecd5e7331c078c6b3b69855029"],["/src/appsco-404-page.html","313e9c9e9d61bc42bbf115eccfcee97e"],["/src/appsco-account-page.html","1227da3ec395794df4d8055b0fa556e1"],["/src/appsco-app.html","85bb10dea646e9bbf06085f36b6b5386"],["/src/appsco-application-page.html","37b2c6ed3ccace927828f71b26f14a04"],["/src/appsco-applications-page.html","452c4775b3acd9882a4dc63a3f839986"],["/src/appsco-billing-page.html","bc06a79092fc92537030c3b087a26565"],["/src/appsco-company-settings-page.html","13e761740a608bebe404d1f44a9507d0"],["/src/appsco-directory-page.html","951492f605fb43db7ff3f5a048b60453"],["/src/appsco-home-page.html","2ee95609319c3d4bc0575192dbf9e697"],["/src/appsco-manage-account-page.html","0a9cba7f4938aebc0e44d04e1f191daa"],["/src/appsco-manage-application-page.html","6f0b18c0bd7958eb44f165b20da24d00"],["/src/appsco-upgrade-page.html","20d89054ceaf91d8dec8f8316bb91f97"],["/src/appsco-vault-page.html","04d8ec7cdd85dcafb5fb7d80753d48fc"],["/src/billing/appsco-billing-invoice.html","9b2ced0274fcb112de4d8b0813ef1f21"],["/src/billing/appsco-billing-page-actions.html","3b22f2a7d5402c440900816d6c3266ed"],["/src/billing/appsco-billing-send-invoice.html","927fed41868a2ad4e806bc110e2159d8"],["/src/billing/appsco-credit-card.html","66ecaeaceaf8700c1ff552a95d4f552c"],["/src/billing/appsco-subscription-cancel.html","933e9ee237f10b1efdab6df4411ee081"],["/src/company/appsco-company-image-settings.html","3905eb116ddd117e7fdf03a2bc4e41f0"],["/src/directory/appsco-account-orgunits-page.html","77f019940bb1c2af13d307356a4f13d5"],["/src/directory/appsco-directory-actions.html","fdeef507b0c068de55e41a9b61983421"],["/src/directory/appsco-directory-add-account.html","7e8f05d2ad763a29b45dd2e5d69e021c"],["/src/directory/appsco-directory-import-accounts.html","df8f06d9bcc46029132406e4b51a4077"],["/src/directory/appsco-directory-page-actions.html","9b01b6fe574416e202c6093b50297d9c"],["/src/directory/appsco-manage-account-change-password-page.html","eeeee3a13fbaf2ce1f0ab7f9a637d776"],["/src/directory/appsco-manage-account-components-page.html","17c55744d787131bf1f06dc56bea33e5"],["/src/directory/appsco-manage-account-page-actions.html","9c413bb10b7374eac204015404a761e1"],["/src/shared-styles.html","9cc408ed085838a6cb9c4a884b44be90"],["/src/upgrade/appsco-upgrade-action.html","84ac7cd923810d684f8527e5ff37fbdc"],["/src/upgrade/appsco-upgrade-page-actions.html","206b86a3a1254b7f9a436d941dfe105f"],["/src/vault/appsco-vault-manage-item.html","493caa0dacf7216b27d15e50cd4f7af9"],["/src/vault/appsco-vault-page-actions.html","9838b02f3386d61f3ac756f44dae56ca"],["/src/webkit-scrollbar-style.html","1f62ebbdec2974c6ccb28f73dfe3e4fb"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1--' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '/index.html';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




