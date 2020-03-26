export const environment = {
  production: true,

  // marIntegraal users are alowed to use our server
  apiVsoftMailGuid: 'place your key here!',
  apiVsoftSendFromAddress: 'companymail@yourdomainname.be',
  apiVsoftSendFromName: 'Your company or organisation name',

  // should be http when SSL not enabled
  apiUrl: 'https://rv-services.be/api/',
  apiWhiteListDomain: ['rv-services.be'],
  apiBlackListDomain: ['rv-services.be/api/auth'],

  // vsoft contentful api
  contentful: {
    spaceId: 'mq8ieqd7mcv8',
    token: 'e92105b30fe907b0de47100961329d50bec5e0476f55473e1b821e4919e4a26e'
  }
};
