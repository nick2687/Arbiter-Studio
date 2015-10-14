var mySubmitFunc = function(error, state){
  if (!error) {
    if (state === "signIn") {
      if(FlowRouter.current().path === "/login"){
        FlowRouter.go("/");
      }
    }
    if (state === "signUp") {
      // Successfully registered
      // ...
    }
  }
};

AccountsTemplates.configure({
    // Behavior
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: false,
    lowercaseUsername: false,
    focusFirstInput: true,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: false,
    showLabels: true,
    showPlaceholders: true,
    showResendVerificationEmailLink: false,

    // Client-side Validation
    continuousValidation: false,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
    privacyUrl: 'privacy',
    termsUrl: 'terms-of-use',

    // Redirects
    homeRoutePath: '/blank/4',
    redirectTimeout: 4000,
    onSubmitHook: mySubmitFunc
});

