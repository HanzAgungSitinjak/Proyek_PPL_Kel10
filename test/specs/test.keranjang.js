const assert = require('assert');

describe('Laravel Project Testing', () => {
  // yang salah
  it('should navigate to "Daftar Menu" and "Keranjang" pages', async () => {
    const userEmail = 'anastasya12@gmail.com';
    const userPassword = 'anas12345';
    const baseUrl = 'http://127.0.0.1:8000/';

    // Perform login
    await testLogin(userEmail, userPassword, baseUrl);

    // Navigate to the Daftar Menu page
    await browser.url(baseUrl + 'daftarmenu');

    // Click on the "Keranjang" button
    const imageButton = await $('.image');
    await imageButton.waitForDisplayed({ timeout: 15000 }); // Increase timeout
    await imageButton.click();

    // Wait for navigation or check the URL using browser.waitUntil
    const productId = '';

    await browser.waitUntil(
      async () => {
        const currentUrl = await browser.getUrl();
        return currentUrl.includes(baseUrl + 'daftarmenu/menudetail/' + productId);
      },
      { timeout: 10000, timeoutMsg: 'Timed out waiting for navigation to Keranjang page' }
    );

    const keranjangButton = await $('button[type="submit"]');
    await keranjangButton.waitForDisplayed({ timeout: 15000 }); // Increase timeout
    await keranjangButton.click();

    const keranjangNavButton = await $('a .icofont.icofont-cart-alt');
    await keranjangNavButton.waitForDisplayed({ timeout: 20000 });
    await keranjangNavButton.click();

    await browser.waitUntil(
      async () => {
        const currentUrl = await browser.getUrl();
        return currentUrl.includes(baseUrl + 'auth/cart');
      },
      { timeout: 20000, timeoutMsg: 'Timed out waiting for navigation to Keranjang Nav page' }
    );
  });

  //yang benar
  it('should navigate to "Daftar Menu" and "Keranjang" pages', async () => {
    const userEmail = 'anastasya12@gmail.com';
    const userPassword = 'anas12345';
    const baseUrl = 'http://127.0.0.1:8000/';

    // Perform login
    await testLogin(userEmail, userPassword, baseUrl);

    // Navigate to the Daftar Menu page
    await browser.url(baseUrl + 'daftarmenu');

    // Click on the "Keranjang" button
    const imageButton = await $('.image');
    await imageButton.waitForDisplayed({ timeout: 15000 }); // Increase timeout
    await imageButton.click();

    // Wait for navigation or check the URL using browser.waitUntil
    const productId = 1;

    await browser.waitUntil(
      async () => {
        const currentUrl = await browser.getUrl();
        return currentUrl.includes(baseUrl + 'daftarmenu/menudetail/' + productId);
      },
      { timeout: 10000, timeoutMsg: 'Timed out waiting for navigation to Keranjang page' }
    );

    const keranjangButton = await $('button[type="submit"]');
    await keranjangButton.waitForDisplayed({ timeout: 15000 }); // Increase timeout
    await keranjangButton.click();

    const keranjangNavButton = await $('a .icofont.icofont-cart-alt');
    await keranjangNavButton.waitForDisplayed({ timeout: 20000 });
    await keranjangNavButton.click();

    await browser.waitUntil(
      async () => {
        const currentUrl = await browser.getUrl();
        return currentUrl.includes(baseUrl + 'auth/cart');
      },
      { timeout: 20000, timeoutMsg: 'Timed out waiting for navigation to Keranjang Nav page' }
    );
  });
});

async function testLogin(email, password, expectedUrl) {
  // Mengunjungi halaman web
  await browser.url('http://127.0.0.1:8000/auth');

  // Mengisi formulir login
  const emailInput = await $('#input-email');
  const passwordInput = await $('#input-password');

  await emailInput.setValue(email);
  await passwordInput.setValue(password);

  const loginButton = await $('button[type="submit"]');
  await loginButton.click();

  await expect(browser).toHaveUrl(expectedUrl);
}
