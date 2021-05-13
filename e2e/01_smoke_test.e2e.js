describe('Landing Screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should show LandingScreen on start', async () => {
    await expect(element(by.id('landing-screen'))).toBeVisible();
  });

  it('should show LandingScreen header with correct text', async () => {
    const headerElement = element(by.id('landing-header'));
    await expect(headerElement).toBeVisible();
    await expect(headerElement).toHaveText('Detox Test');
  });

  it('should show LandingScreen robot image', async () => {
    const robotElement = element(by.id('robot-logo'));
    await expect(robotElement).toBeVisible();
  });

  it('should show LandingScreen START button', async () => {
    const sbElement = element(by.id('start-button'));
    await expect(sbElement).toBeVisible();
  });
});
