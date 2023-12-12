describe('Laravel Project Testing', () => {
    it('should login and print kritikSaran', async () => {
      // Melakukan login terlebih dahulu
      // Navigate to the login page
      await browser.url('http://127.0.0.1:8000/auth');
  
      // Find login elements
      const emailInput = $("#input-email");
      const inputPassword = $("#input-password");
      const btnLogin = $("button[type='submit']");
  
      // Fill in login credentials
      await emailInput.setValue("staff123@gmail.com");
      await inputPassword.setValue("staff123");
  
      // Wait for the submit button to be clickable and click it
      await btnLogin.waitForClickable();
      await btnLogin.click();
  
      // Log success message
      console.log('Selamat Datang !');
  
      // Navigasi ke halaman kritik saran
      await browser.url('http://127.0.0.1:8000/admin/kritik');
      await browser.pause(3000);
  
      // Memprint data dari kritik dan saran dari user
      // Correct the selector for the Ekspor PDF button
      const klikEksporPDF = await $('a.btn.btn-primary');
      
      // Wait for the element to be clickable and click it
      await klikEksporPDF.waitForClickable();
      await klikEksporPDF.click();
  
      // Wait for the element to be displayed
      await klikEksporPDF.waitForDisplayed();
  
      // Scroll into view if necessary
      await klikEksporPDF.scrollIntoView();
  
      await browser.pause(5000);
  
      // Fungsi testLogin dan pauseFor5Seconds tetap digunakan seperti sebelumnya
      async function testLogin(email, password, expectedUrl) {
        // ...
      }
  
      async function pauseFor5Seconds() {
        // ...
      }
    });
  });
  