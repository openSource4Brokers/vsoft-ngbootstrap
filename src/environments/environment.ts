// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // add your api keys to use contactmail with our server
  apiVsoftMailGuid: 'place your key here!',
  apiVsoftSendFromAddress: 'companymail@yourdomainname.be',
  apiVsoftSendFromName: 'Your company or organisation name',

  // https should be http when SSL not enabled
  // marIntegraal Service Plus users can get our dotnet core api source code
  /* apiUrl: 'http://localhost:5000/api/',
  apiWhiteListDomain: ['localhost:5000'],
  apiBlackListDomain: ['localhost:5000/api/auth'], */
  apiUrl: 'https://rv-services.be/api/',
  apiWhiteListDomain: ['rv-services.be'],
  apiBlackListDomain: ['rv-services.be/api/auth'],
  // vsoft!
  contentful: {
    spaceId: 'mq8ieqd7mcv8',
    token: 'e92105b30fe907b0de47100961329d50bec5e0476f55473e1b821e4919e4a26e'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
