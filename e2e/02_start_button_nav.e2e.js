describe('Landing Screen Navigation', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should show LandingScreen START button', async () => {
    const sbElement = element(by.id('start-button'));
    await expect(sbElement).toBeVisible();
  });

  it('should navigate off LandingScreen when START pressed', async () => {
    const sbElement = element(by.id('start-button'));
    await sbElement.tap();
    await waitFor(element(by.id('secret-code-screen')))
      .toBeVisible()
      .withTimeout(1000);
  });
});
