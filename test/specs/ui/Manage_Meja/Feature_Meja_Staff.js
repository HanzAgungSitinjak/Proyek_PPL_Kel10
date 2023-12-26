describe('Menguji fitur mengelola history meja', () => {
    it('Menu history meja', async () => {
      // Melakukan login terlebih dahulu
      // Navigate to the login page
      await browser.url('http://127.0.0.1:8000/auth');
  
      // Find login elements
      const emailInput = $("#input-email");
      const inputPassword = $("#input-password");
      const btnLogin = $("button[type='submit']");
  
      // Fill in login credentials
      await emailInput.setValue("jul11@gmail.com");
      await inputPassword.setValue("jul123456");
  
      // Wait for the submit button to be clickable and click it
      await btnLogin.waitForClickable();
      await btnLogin.click();
  
      // Log success message
      console.log('Selamat Datang !');
  
      // Navigasi ke halaman kritik saran
      await browser.url('http://127.0.0.1:8000/staff/historymeja');
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
  
      await browser.pause(3000);



      // Menghapus kritik dan saran 
       // Click the delete icon
       const deleteIcon = await $('a.remove-item-btn');
       await deleteIcon.waitForClickable();
       await deleteIcon.click();
       await browser.pause(3000);

       // Wait for confirmation modal to appear
       const confirmationModal = await $('.swal2-popup');
       await confirmationModal.waitForDisplayed();

       // Confirm the deletion
       const confirmButton = await $('.swal2-confirm');
       await confirmButton.waitForClickable();
       await confirmButton.click();
       await browser.pause(3000);

       // Wait for the top-up button to appear after deletion
       const topUpButton = await $('button.swal2-confirm.swal2-styled');
       await topUpButton.waitForDisplayed();
       await browser.pause(3000);

       // Click the top-up button
       await topUpButton.waitForClickable();
       await topUpButton.click();
    });
  });