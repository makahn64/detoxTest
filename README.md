# Setting Up App

Make sure all appropriate tools are installed for React Native development:
- NodeJs
- yarn
- Xcode 12
- watchman
- Check the React Native docs for any that were missed

You will not need the Android environment for this exercise.

# Setting Up Detox Environment

Refer to: https://github.com/wix/Detox/blob/master/docs/Introduction.iOSDevEnv.md

and https://reactnativetesting.io/e2e/setup.html#installing-detox

# Challenge

1. Add a new Detox test that navigates to the Secret Code screen and enters an incorrect code and checks for the error message.
2. In the same test file, check to make sure the ENTER button on the Secret Code screen is disabled until text has been entered.
3. In the same file, enter the correct code and then press the button, make sure navigation has occurred. See an example in test 02.
4. Add another test to make sure the SuccessScreen appears and that presses on the START OVER button navigate as expected.
