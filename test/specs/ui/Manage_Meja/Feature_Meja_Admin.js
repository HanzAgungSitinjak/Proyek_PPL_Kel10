describe('Menguji fitur menambah meja admin', () => {
  it('Menambah data meja dengan data valid', async () => {
      // Mengunjungi halaman web
      await browser.url('http://127.0.0.1:8000/admin/dashboard');

      //  Mengisi formulir login
      const emailInput = await $('#input-email');
      const passwordInput = await $('#input-password');
      const loginButton = await $('button[type="submit"]');

      await emailInput.setValue('john23@gmail.com');
      await passwordInput.setValue('jon123456');
      await loginButton.waitForExist();
      await loginButton.click();

      browser.pause(6000); // Menunggu 6 detik

      //Menambah data meja dengan inputan yang valid
      await browser.url('http://127.0.0.1:8000/admin/ruangan/create');

      const MejaInput = await $('#Meja');
      const ImageInput = await $('#file_img');
      const DesInput = await $('#deskripsi_meja');

      await MejaInput.setValue('3');
      await ImageInput.setValue('D:/XAMPP/htdocs/Proyek_PPL_Kelompok10/meja.jpg');
      await DesInput.setValue('Design bangku untuk pasangan');

      const submitButton = await $('button[class="btn btn-primary"]');
      await submitButton.waitForExist({ timeout: 30000 });
      await submitButton.waitForClickable({ timeout: 30000 });
      await submitButton.click();

      browser.pause(12000); // Menunggu 6 detik
  });
  // Menambah data meja dengan inputan yang tidak valid
  it('Menambah data meja tapi tidak menginput nomor meja', async () => {
      await browser.url('http://127.0.0.1:8000/admin/ruangan/create');

      const MejaInput = await $('#Meja');
      const ImageInput = await $('#file_img');
      const DesInput = await $('#deskripsi_meja');

      await MejaInput.setValue('');  // Meja tidak diisi
      await ImageInput.setValue('D:/XAMPP/htdocs/Proyek_PPL_Kelompok10/meja.jpg');
      await DesInput.setValue('Sangat enak dan memiliki pemandangan yang enak');

      const submitButton = await $('button[class="btn btn-primary"]');
      await submitButton.waitForExist({ timeout: 30000 });
      await submitButton.waitForClickable({ timeout: 30000 });
      await submitButton.click();

      browser.pause(12000); // Menunggu 6 detik
  });
    //Menambah data meja dengan inputan yang tidak valid
    it('Menambah data meja dengan inputan no.meja = aa', async () => {
      await browser.url('http://127.0.0.1:8000/admin/ruangan/create');

      const MejaInput = await $('#Meja');
      const ImageInput = await $('#file_img');
      const DesInput = await $('#deskripsi_meja');

      await MejaInput.setValue('aa');  // Meja tidak diisi
      await ImageInput.setValue('D:/XAMPP/htdocs/Proyek_PPL_Kelompok10/meja.jpg');
      await DesInput.setValue('Sangat enak dan memiliki pemandangan yang enak');

      const submitButton = await $('button[class="btn btn-primary"]');
      await submitButton.waitForExist({ timeout: 30000 });
      await submitButton.waitForClickable({ timeout: 30000 });
      await submitButton.click();

      browser.pause(12000); // Menunggu 6 detik
  });
    //Menambah data meja dengan inputan yang tidak valid
    it('Menambah data meja dengan inputan no.meja = a1a1', async () => {
      await browser.url('http://127.0.0.1:8000/admin/ruangan/create');

      const MejaInput = await $('#Meja');
      const ImageInput = await $('#file_img');
      const DesInput = await $('#deskripsi_meja');

      await MejaInput.setValue('a1a1');  // Meja tidak diisi
      await ImageInput.setValue('D:/XAMPP/htdocs/Proyek_PPL_Kelompok10/meja.jpg');
      await DesInput.setValue('Sangat enak dan memiliki pemandangan yang enak');

      const submitButton = await $('button[class="btn btn-primary"]');
      await submitButton.waitForExist({ timeout: 30000 });
      await submitButton.waitForClickable({ timeout: 30000 });
      await submitButton.click();

      browser.pause(12000); // Menunggu 6 detik
  });
    //Menambah data meja dengan inputan yang tidak valid
    it('Menambah data meja dengan inputan no.meja = a1a1##', async () => {
      await browser.url('http://127.0.0.1:8000/admin/ruangan/create');

      const MejaInput = await $('#Meja');
      const ImageInput = await $('#file_img');
      const DesInput = await $('#deskripsi_meja');

      await MejaInput.setValue('a1a1##');  // Meja tidak diisi
      await ImageInput.setValue('D:/XAMPP/htdocs/Proyek_PPL_Kelompok10/meja.jpg');
      await DesInput.setValue('Sangat enak dan memiliki pemandangan yang enak');

      const submitButton = await $('button[class="btn btn-primary"]');
      await submitButton.waitForExist({ timeout: 30000 });
      await submitButton.waitForClickable({ timeout: 30000 });
      await submitButton.click();

      browser.pause(12000); // Menunggu 6 detik
  });
    //Menambah data meja dengan tidak menginput gambar
    it('Menambah data meja dengan tidak menginput gambar', async () => {
      await browser.url('http://127.0.0.1:8000/admin/ruangan/create');

      const MejaInput = await $('#Meja');
      const ImageInput = await $('#file_img');
      const DesInput = await $('#deskripsi_meja');

      await MejaInput.setValue('12');  // Meja tidak diisi
      await DesInput.setValue('Sangat enak dan memiliki pemandangan yang enak');

      const submitButton = await $('button[class="btn btn-primary"]');
      await submitButton.waitForExist({ timeout: 30000 });
      await submitButton.waitForClickable({ timeout: 30000 });
      await submitButton.click();

      browser.pause(12000); // Menunggu 6 detik
  });
  //Menambah data meja dengan tidak menginput deskripsi
    it('Menambah data meja dengan tidak menginput deskripsi', async () => {
      await browser.url('http://127.0.0.1:8000/admin/ruangan/create');

      const MejaInput = await $('#Meja');
      const ImageInput = await $('#file_img');
      const DesInput = await $('#deskripsi_meja');

      await MejaInput.setValue('12');  // Meja tidak diisi
      await ImageInput.setValue('D:/XAMPP/htdocs/Proyek_PPL_Kelompok10/meja.jpg');
    
      const submitButton = await $('button[class="btn btn-primary"]');
      await submitButton.waitForExist({ timeout: 30000 });
      await submitButton.waitForClickable({ timeout: 30000 });
      await submitButton.click();

      browser.pause(12000); // Menunggu 6 detik
  });
});

describe('Menguji fitur menghapus meja admin', () => {
  it('Menghapus data meja berdasarkan nomor meja', async () => {
      const nomorMejaToDelete = '3'; // Ganti dengan nomor meja yang ingin dihapus

      // Navigasi ke halaman yang memungkinkan penghapusan data
      await browser.url('http://127.0.0.1:8000/admin/ruangan');

      // Menemukan baris yang sesuai dengan nomor meja yang akan dihapus
      const rowToDelete = await $(`//td[text()="${nomorMejaToDelete}"]/ancestor::tr`);
      await rowToDelete.waitForExist({ timeout: 30000 });

      // Menemukan dan mengklik tombol untuk menghapus data pada baris tersebut
      const deleteButton = await rowToDelete.$('li#del-btn');
      await deleteButton.waitForExist({ timeout: 30000 });
      await deleteButton.waitForClickable({ timeout: 30000 });
      await deleteButton.click();

      // Menunggu dan mengonfirmasi dialog konfirmasi penghapusan
      const confirmButton = await $('button.swal2-confirm');
      await confirmButton.waitForExist({ timeout: 30000 });
      await confirmButton.waitForClickable({ timeout: 30000 });
      await confirmButton.click();

      browser.pause(6000); // Menunggu 6 detik
  });
});

describe('Menguji fitur mengupdate meja admin', () => {
  //Testing fitur update dengan data valid  
  it('Mengupdate data meja dengan inputan lengkap', async () => {
      // Data yang akan digunakan untuk pembaruan
      const updatedMejaData = {
          id: 22,
          meja: '5',
          description: 'Bangku Bersih dan nyaman',
      };

      // Navigasi ke halaman edit meja berdasarkan ID
      await browser.url(`http://127.0.0.1:8000/admin/ruangan/${updatedMejaData.id}/edit`);

      const mejaInput = await $('#Meja');
      await mejaInput.clearValue();
      await mejaInput.setValue(updatedMejaData.meja);

      const desInput = await $('#deskripsi_meja');
      await desInput.clearValue();
      await desInput.setValue(updatedMejaData.description);

      const imageInput = await $('#file_img');
      const imagePath = 'D:/XAMPP/htdocs/Proyek_PPL_Kelompok10/meja.jpg';
      await imageInput.setValue(imagePath);

      const saveButton = await $('#tombol_simpan');
      await saveButton.waitForClickable({ timeout: 30000 });
      await saveButton.click();

      // Menunggu halaman untuk me-refresh atau kembali ke halaman sebelumnya
      await browser.pause(3000);

      // Navigasi kembali ke halaman yang menampilkan daftar meja
      await browser.url('http://127.0.0.1:8000/admin/ruangan'); // Ganti URL sesuai dengan kebutuhan

      const updatedRow = await $(`//td[text()="${updatedMejaData.meja}"]/ancestor::tr`);
      await updatedRow.waitForExist({ timeout: 30000 });
  });

    //Testing fitur update dengan data tidak valid  
    it('Mengupdate data meja tanpa inputan lengkap', async () => {
      // Data yang akan digunakan untuk pembaruan
      const updatedMejaData = {
          id: 15,
          meja: '23',
      };

//       // Navigasi ke halaman edit meja berdasarkan ID
      await browser.url(`http://127.0.0.1:8000/admin/ruangan/${updatedMejaData.id}/edit`);

      const mejaInput = await $('#Meja');
      await mejaInput.clearValue();
      await mejaInput.setValue(updatedMejaData.meja);

      const imageInput = await $('#file_img');
      const imagePath = 'D:/XAMPP/htdocs/Proyek_PPL_Kelompok10/meja.jpg';
      await imageInput.setValue(imagePath);

      const saveButton = await $('#tombol_simpan');
      await saveButton.waitForClickable({ timeout: 30000 });
      await saveButton.click();

      // Menunggu halaman untuk me-refresh atau kembali ke halaman sebelumnya
      await browser.pause(3000);

      // Navigasi kembali ke halaman yang menampilkan daftar meja
      await browser.url('http://127.0.0.1:8000/admin/ruangan'); // Ganti URL sesuai dengan kebutuhan

      const updatedRow = await $(`//td[text()="${updatedMejaData.meja}"]/ancestor::tr`);
      await updatedRow.waitForExist({ timeout: 30000 });
  });
});
describe('Menguji fitur view detail', () => {
  it('should view meja detail by ID', async () => {
    const mejaToView = 1; 
        await browser.url('http://127.0.0.1:8000/admin/ruangan');
  
        const rowToView = await $(`//td[text()="${mejaToView}"]/ancestor::tr`);
        await rowToView.waitForExist({ timeout: 30000 });
  
        const view_dtl = await rowToView.$('li#view-dtl-btn');
        await view_dtl.waitForExist({ timeout: 30000 });
        await view_dtl.waitForClickable({ timeout: 30000 });
        await view_dtl.click();
    });
});
