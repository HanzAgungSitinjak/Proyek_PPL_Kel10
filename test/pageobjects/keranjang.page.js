// describe('Laravel Project Testing', () => {
//   it('should navigate to "Daftar Menu" and "Keranjang" pages', async () => {
//     const userEmail = 'anastasya12@gmail.com';
//     const userPassword = 'anas12345';
//     const baseUrl = 'http://127.0.0.1:8000/';

//     // Perform login
//     await testLogin(userEmail, userPassword, baseUrl);

//     // Navigate to the Daftar Menu page
//     await browser.url(baseUrl + 'daftarmenu');

//     // Click on the "Keranjang" button
//     const keranjangButton = await $('button.btn-primary');
//     await keranjangButton.waitForDisplayed({ timeout: 15000 }); // Increase timeout
//     await keranjangButton.click();

//     // Wait for navigation or check the URL
//     await browser.waitUntil(
//       async () => {
//         const currentUrl = await browser.getUrl();
//         return currentUrl === baseUrl + 'daftarmenu/menudetail/1';
//       },
//       { timeout: 3000 }
//     );
//   });
// });

// async function testLogin(email, password, expectedUrl) {
//   // Mengunjungi halaman web
//   await browser.url('http://127.0.0.1:8000/auth');

//   // Mengisi formulir login
//   const emailInput = await $('#input-email');
//   const passwordInput = await $('#input-password');

//   await emailInput.setValue(email);
//   await passwordInput.setValue(password);

//   const loginButton = await $('button[type="submit"]');
//   await loginButton.click();

//   await expect(browser).toHaveUrl(expectedUrl);
// }

// async function pauseFor5Seconds() {
//   await browser.pause(5000); // Pause for 5 seconds
// }
