<h1>Website Upsize Cafe</h1>

Website Upsize merupakan sebuah website yang menghadirkan sebuah solusi berupa pemesanan dan pembayaran online untuk salah satu UMKM yang terletak di Balige dengen nama UpSize Cafe. Website ini memiliki beberapa fitur antara lain sesuai dengan katgori pengguna :

<p>Fitur Pengguna</p>
<ul>
    <li>Authentikasi</li>
    <li>Pemesanan Menu</li>
    <li>Melakukan Pembayaran</li>
    <li>Pengumuaman dan Notifikasi</li>
    <li>Memberi Komentar</li>
</ul>
<p>Fitur Staff</p>
<ul>
    <li>Authentikasi</li>
    <li>Data Pesanan</li>
    <li>Data Pembayaran</li>
    <li>Pengumuaman dan Notifikasi</li>
</ul>
<p>Fitur Admin</p>
<ul>
    <li>Authentikasi</li>
    <li>Mengelola Menu</li>
    <li>Mengelola Data Pelanggan</li>
    <li>Mengelola Data Pendapatan</li>
    <li>Mengelola Data Staff</li>
    <li>Pengaduan</li>
</ul>

## Persiapan Environment :
Dalam melakukan penginstallan web ini ada beberapa hal yang harus dilakukan terlebih dahulu:
<h4>Mempersiapkan Environment</h4>
<p>Visual Studio Code</p>
<ul>
    <li>lakukan instalasi Visual Studio Code pade perangkat anda, Download di <a href="https://code.visualstudio.com/download">Visual Studio Code</a></li>
    <li>Anda juga dapat melihat cara penginstallannya sabgai <a href="https://www.belajarisme.com/tutorial/install-vscode/">Berikut</a></li>
</ul>
<p>XAMPP</p>
<ul>
    <li>lakukan instalasi XAMPP pade perangkat anda yang akan berfungsi sebagai erver lokal yang sudah mencakup program Apache, MySQL, dan PHP. Download di <a href="https://code.visualstudio.com/download">XAMPP</a></li>
    <li>Anda juga dapat melihat cara penginstallannya sabgai <a href="https://www.codepolitan.com/blog/mengenal-xampp-dan-cara-install-xampp-di-windows/">Berikut ini</a></li>
</ul>

## Penginstallan
<ol>
    <li>Mendownload atau mengcloning file yang ada di direktori.</li>
    <li>Membuka file XAMPP, kemudian buka file "htdocs".</li>
    <li>Memindahkan file yang telah di unduh kedalam file "htdocs".</li>
    <li>Kemudian buka XAMPP Control Panel, dan hidupkan "Apache" dan "MySQL".</li>
    <li>Kemudian pada MySQL, pilih Admin untuk menuju server localhost.</li>
    <li>Kemudian lakukan pengimportan database yang ada di dalam direktori "Upsize.sql".</li>
    <li>Setelah itu buka file code yang disediakan pada <b>Visual Studio Code</b>.</li>
    <li>Lakukan "composer install" terlebih dahulu</li>
    <li>Lakukan "php migrate"</li>
    <li>Dan website sudah dapat diakses.</li>
</ol>
