describe('Laravel Project Testing', () => {
    it('should login with valid email and valid password, navigate to the cart, proceed to checkout, proceed to payment method, and handle popup', async () => {
      const baseUrl = 'http://127.0.0.1:8000/';
  
      // Login
      await testLogin('loeislubis@gmail.com', 'loeis12345678', baseUrl);
      await pauseFor3Seconds();
  
      // Navigate to the cart page
      await browser.url(baseUrl + 'auth/cart');
  
      // Assert that the browser is on the cart page
      await expect(browser).toHaveUrl(baseUrl + 'auth/cart');
      await pauseFor3Seconds();
  
      // Proceed to checkout
      const checkoutButton = await $('a[href="http://127.0.0.1:8000/auth/checkout/customer"]');
      await checkoutButton.click();
  
      // Wait for the navigation to complete (optional)
      await browser.waitUntil(async () => (await browser.getUrl()) === baseUrl + 'auth/checkout/customer', {
        timeout: 20000, // 20 seconds timeout
        timeoutMsg: 'Timed out waiting for checkout/customer page',
      });
  
      // Assert that the browser is on the checkout page
      await expect(browser).toHaveUrl(baseUrl + 'auth/checkout/customer');
      await pauseFor3Seconds();
  
      // Fill in the form fields
      const cityDropdown = await $('#input-city');
      await cityDropdown.selectByVisibleText('Sitoluama');
      await pauseFor3Seconds(); // Pause to see the selected value

      const addressInput = await $('#input-address');
      await addressInput.setValue('IT DEL');
      await pauseFor3Seconds(); // Pause to see the filled-in value

      // Continue to payment method
      const paymentMethodButton = await $('button[type="submit"]');
      await paymentMethodButton.click();

      // Tekan tombol "OK"
      const okButton = await $('#method-btn'); // Mengganti spasi menjadi titik antara kelas swal2-confirm dan swal2-styled
      await okButton.waitForExist({timeout: 3000});
      await okButton.waitForClickable({timeout: 3000});
      await okButton.click();

      await pauseFor3Seconds();

      await browser.url('http://127.0.0.1:8000/auth/checkout/payment');
  
      // Input card number
      const cardNumberInput = await $('#input-cardnumber');
      await cardNumberInput.setValue('1234567890123456'); // Ganti dengan nomor kartu yang valid

      // Upload payment proof
      const paymentProofInput = await $('#image');
      const filePath = 'C:/Users/USER/Pictures/Screenshots/ss.png'; // Ganti dengan path file gambar bukti pembayaran
      await paymentProofInput.setValue(filePath);

      // Submit the form
      const submitButton = await $('button[type="submit"]');
      await submitButton.click();

      const okkButton = await $('.swal2-confirm.swal2-styled'); // Mengganti spasi menjadi titik antara kelas swal2-confirm dan swal2-styled
      await okkButton.waitForExist({timeout: 3000});
      await okkButton.waitForClickable({timeout: 3000});
      await okkButton.click();

      await browser.pause(5000);

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

      // Wait for the login process to complete (optional)
      await browser.waitUntil(async () => (await browser.getUrl()) === expectedUrl, {
      timeout: 20000, // 20 seconds timeout
      timeoutMsg: 'Timed out waiting for login page',
  });

      // Assert that the browser is on the expected page after login
      await expect(browser).toHaveUrl(expectedUrl);
}

      async function pauseFor3Seconds() {
      await browser.pause(3000); // Pause for 3 seconds
}
  
  