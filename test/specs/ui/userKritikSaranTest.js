describe('Laravel Project Testing', () => {
  it('should login and submit kritikSaran', async () => {
    // Melakukan login terlebih dahulu
    // Navigate to the login page
    await browser.url('http://127.0.0.1:8000/auth');

    // Find login elements
    const emailInput = $("#input-email");
    const inputPassword = $("#input-password");
    const btnLogin = $("button[type='submit']");

    // Fill in login credentials
    await emailInput.setValue("yunisiagian2@gmail.com");
    await inputPassword.setValue("siagian123");

    // Wait for the submit button to be clickable and click it
    await btnLogin.waitForClickable();
    await btnLogin.click();

    // Log success message
    console.log('Selamat Datang !');


    // Navigasi ke halaman dashboard
    await browser.url('http://127.0.0.1:8000/');

    // Isi formulir kritikSaran
    const kritikSaranInput = await $('#input-enquiry');
    await kritikSaranInput.setValue('Makanannya enak dan bersih');
    await browser.pause(5000); 

    // Klik tombol "Kirim Pesan"
    const kirimPesanButton = await $('.btn.btn-primary[type="submit"]');
    await kirimPesanButton.click();
    await browser.pause(5000); 

    // Tunggu beberapa detik untuk memastikan pesan berhasil terkirim
    await browser.pause(5000);

    // Tambahkan asert untuk memeriksa apakah kritikSaran berhasil terkirim atau mengarahkan ke halaman yang benar
    // Sesuaikan URL sesuai dengan kebutuhan
    await expect(browser).toHaveUrl('http://127.0.0.1:8000/');

    
  });

// Fungsi testLogin dan pauseFor5Seconds tetap digunakan seperti sebelumnya
async function testLogin(email, password, expectedUrl) {
  // ...
}

async function pauseFor5Seconds() {
  // ...
};


it('should login and submit empty kritikSaran', async () => {
  // Melakukan login terlebih dahulu
  // Navigate to the login page
  await browser.url('http://127.0.0.1:8000/auth');

  // Find login elements
  const emailInput = $("#input-email");
  const inputPassword = $("#input-password");
  const btnLogin = $("button[type='submit']");

  // Fill in login credentials
  await emailInput.setValue("yunisiagian2@gmail.com");
  await inputPassword.setValue("siagian123");

  // Wait for the submit button to be clickable and click it
  await btnLogin.waitForClickable();
  await btnLogin.click();

  // Log success message
  console.log('Selamat Datang !');


  // Navigasi ke halaman dashboard
  await browser.url('http://127.0.0.1:8000/');

  // Isi formulir kritikSaran
  const kritikSaranInput = await $('#input-enquiry');
  await kritikSaranInput.setValue('');
  await browser.pause(5000); 

  // Klik tombol "Kirim Pesan"
  const kirimPesanButton = await $('.btn.btn-primary[type="submit"]');
  await kirimPesanButton.click();
  await browser.pause(5000); 

  // Tunggu beberapa detik untuk memastikan pesan berhasil terkirim
  await browser.pause(5000);

  // Tambahkan asert untuk memeriksa apakah kritikSaran berhasil terkirim atau mengarahkan ke halaman yang benar
  // Sesuaikan URL sesuai dengan kebutuhan
  await expect(browser).toHaveUrl('http://127.0.0.1:8000/');

});

// Fungsi testLogin dan pauseFor5Seconds tetap digunakan seperti sebelumnya
async function testLogin(email, password, expectedUrl) {
// ...
}

async function pauseFor5Seconds() {
// ...
};

});


