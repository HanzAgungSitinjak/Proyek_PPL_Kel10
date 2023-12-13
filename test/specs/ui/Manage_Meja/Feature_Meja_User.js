describe('Menguji fitur menambah meja admin', () => {
    it('Menambah data meja dengan data valid', async () => {
        // Mengunjungi halaman web
        await browser.url('http://127.0.0.1:8000/auth');
  
        //  Mengisi formulir login
        const emailInput = await $('#input-email');
        const passwordInput = await $('#input-password');
        const loginButton = await $('button[type="submit"]');
  
        await emailInput.setValue('hansagung34@gmail.com');
        await passwordInput.setValue('hansagg11');
        await loginButton.waitForExist();
        await loginButton.click();
  
        browser.pause(6000); // Menunggu 6 detik
        await browser.url('http://127.0.0.1:8000/ruangan');
        
        const submitButton = await $('button#Pesan_Meja');
        
        // Tunggu hingga tombol Pesan Meja muncul dan dapat diklik
        await submitButton.waitForExist({ timeout: 30000 });
        await submitButton.waitForClickable({ timeout: 30000 });

        // Klik tombol Pesan Meja
        await submitButton.click();

        // Tunggu sejenak setelah mengklik tombol sebelum menavigasi
        // (gunakan browser.waitUntil atau metode serupa jika perlu)
        await browser.pause(5000);

        // Navigasi ke halaman booking/create
        await browser.url('http://127.0.0.1:8000/booking/create');
        
        // Pilih tanggal
        const DateInput = await $('#datetimepicker');
        await DateInput.setValue('2023-12-31');

        // Pilih nomor meja
        const MejaSelector = $('button[class="btn dropdown-toggle btn-default"]');
        await MejaSelector.waitForExist({ timeout: 30000 });
        await MejaSelector.waitForDisplayed();
        MejaSelector.click();

        const optionIndex = 2; // Ganti dengan indeks opsi yang ingin Anda pilih
        MejaSelector.selectByIndex(optionIndex);

        // Isi deskripsi
        const DesInput = await $('#message');
        await DesInput.setValue('Booking untuk acara besar.');    

        const successMessage = await $('#success-message');
        if (await successMessage.isDisplayed()) {
            console.log('Pemesanan berhasil!');
            // Arahkan ke halaman ruangan
            await browser.url('http://127.0.0.1:8000/ruangan');
        } else {
            console.log('Pemesanan gagal!');
            // Handle keadaan jika pemesanan gagal
        }

    });
});


// browser.url('http://127.0.0.1:8000/booking/create');

//         // Tentukan elemen-elemen pada halaman
//         const dateInput = $('#datetimepicker');
//         const mejaSelect = $('#select_meja');
//         const deskripsiTextarea = $('#message');
//         const pesanSekarangButton = $('[type="submit"].btn-primary');

//         // Masukkan data pada formulir
//         dateInput.setValue('2023-12-31');
//         mejaSelect.selectByVisibleText('Nomor Meja 1'); // Ganti dengan teks yang sesuai
//         deskripsiTextarea.setValue('Booking untuk acara besar.');

//         // Klik tombol Pesan Sekarang
//         pesanSekarangButton.click();




// npx wdio run wdio.conf.js --spec ./test/specs/ui/Manage_Meja/Feature_Meja_Admin.js