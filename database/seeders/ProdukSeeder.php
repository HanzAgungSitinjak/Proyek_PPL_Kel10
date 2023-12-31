<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProdukSeeder extends Seeder
{
    public function run()
    {
        $data = array(
            [
                'title' => 'Espresso',
                'cover' => 'Espresso.jpg',
                'price' => '2000',
                'stock' => '20',
                'description' => 'Kopi yang dihasilkan dari proses penyeduhan kopi dengan tekanan dan suhu tinggi',
                'category' => 'Minuman',
            ],
            [
                'title' => 'Americano',
                'cover' => 'Americano.jpeg',
                'price' => '20000',
                'stock' => '20',
                'description' => 'Kopi espreso yang dicampur dengan air panas',
                'category' => 'Minuman',
            ],
            [
                'title' => 'Coffe Milk',
                'cover' => 'CoffeMilk.jpg',
                'price' => '20000',
                'stock' => '20',
                'description' => 'Kopi yang manis dibuat dengan kopi dan susu yang dicampur',
                'category' => 'Minuman',
            ],
            [
                'title' => 'Cofffe Latte',
                'cover' => 'CoffeLatte.jpg',
                'price' => '20000',
                'stock' => '20',
                'description' => 'Kopi yang manis dibuat dengan kopi dan susu yang dicampur',
                'category' => 'Minuman',
            ],
            [
                'title' => 'Cappucino',
                'cover' => 'Cappucino.jpeg',
                'price' => '20000',
                'stock' => '20',
                'description' => 'Cappuccino merupakan kopi yang populer dari Italia karena lebih sering dan lebih banyak dikonsumsi',
                'category' => 'Minuman',
            ],
            [
                'title' => 'Palm Sugar Latte',
                'cover' => 'PalmSugarLatte.jpg',
                'price' => '20000',
                'stock' => '20',
                'description' => 'Kopi susu biasa namun ditambah dengan gula aren yang sudah menjadi sirup',
                'category' => 'Minuman',
            ],
            [
                'title' => 'Caramel Machiato',
                'cover' => 'Caramel.jpg',
                'price' => '22000',
                'stock' => '20',
                'description' => 'Kopi yang dibuat dengan campuran espresso, susu dan pemanis dari sirup vanilla',
                'category' => 'Minuman',
            ],
            [
                'title' => 'Coffe Mocha',
                'cover' => 'CoffeMocha.jpeg',
                'price' => '22000',
                'stock' => '20',
                'description' => 'Kopi yang dibuat dengan campuran espresso, cokelat, dan susu',
                'category' => 'Minuman',
            ],
            [
                'title' => 'Flavour Cafe Latte',
                'cover' => 'CoffeLatte.jpg',
                'price' => '22000',
                'stock' => '20',
                'description' => 'Kopi yang manis dibuat dengan kopi dan susu yang dicampur',
                'category' => 'Minuman',
            ],
            [
                'title' => 'Kopi Tubruk',
                'cover' => 'KopiTubruk.jpg',
                'price' => '8000',
                'stock' => '20',
                'description' => 'Kopi yang proses pembuatannya dengan menghancurkan biji kopi',
                'category' => 'Minuman',
            ],
            [
                'title' => 'Kopi Jahe',
                'cover' => 'KopiJahe.jpg',
                'price' => '10000',
                'stock' => '20',
                'description' => 'Kopi yang direbus dengan aneka rempah seperti cengkih, kayumanis, dan jahe',
                'category' => 'Minuman',
            ],
            [
                'title' => 'Kopi Sanger',
                'cover' => 'Sanger.jpeg',
                'price' => '10000',
                'stock' => '20',
                'description' => 'Kopi hitam yang dibuat dengan campuran susu, dan gula',
                'category' => 'Minuman',
            ],
            [
                'title' => 'Susu Jahe',
                'cover' => 'SusuJahe.jpg',
                'price' => '10000',
                'stock' => '20',
                'description' => 'Minuman yang dibuat dengan campuran susu dan jahe yang bisa memberikan kehangatan pada tubuh',
                'category' => 'Minuman',
            ],
            [
                'title' => 'Jahe Original',
                'cover' => 'Jahe.jpg',
                'price' => '8000',
                'stock' => '20',
                'description' => 'Minuman jahe yang mampu meningkatkan daya tubuh ',
                'category' => 'Minuman',
            ],
            [
                'title' => 'Taro Latte',
                'cover' => 'tarolatte.png',
                'price' => '20000',
                'stock' => '20',
                'description' => 'Minuman berupa campuran susu dengan bubuk taro',
                'category' => 'Minuman',
            ],
            [
                'title' => 'Red Velvet Latte',
                'cover' => 'redvelvet.jpg',
                'price' => '20000',
                'stock' => '20',
                'description' => 'Minuman berupa campuran susu murni dan cokelat yang dicampur dengan bubuk red velvet',
                'category' => 'Minuman',
            ],
            [
                'title' => 'GreenTea Latte',
                'cover' => 'greentea.jpg',
                'price' => '20000',
                'stock' => '20',
                'description' => 'Minuman berupa campuran susu yang dicampur dengan teh hijau',
                'category' => 'Minuman',
            ],
            [
                'title' => 'Chocolate',
                'cover' => 'chocolate.jpg',
                'price' => '20000',
                'stock' => '20',
                'description' => 'Minuman yang dibuat dengan campuran cokelat',
                'category' => 'Minuman',
            ],
            [
                'title' => 'Brewed Black Tea',
                'cover' => 'brewed.jpg',
                'price' => '10000',
                'stock' => '20',
                'description' => 'Minuman yang dibuat dengan campuran black tea',
                'category' => 'Minuman',
            ],
            [
                'title' => 'Milk Tea',
                'cover' => 'milktea.jpeg',
                'price' => '10000',
                'stock' => '20',
                'description' => 'Minuman yang dibuat dengan campuran milk tea',
                'category' => 'Minuman',
            ],
            [
                'title' => 'Thai Tea',
                'cover' => 'thaitea.jpg',
                'price' => '10000',
                'stock' => '20',
                'description' => 'Minuman yang dibuat dengan campuran thai tea',
                'category' => 'Minuman',
            ],
            [
                'title' => 'Lemon Tea',
                'cover' => 'lemontea.jpg',
                'price' => '10000',
                'stock' => '20',
                'description' => 'Minuman yang dibuat dengan campuran Lemon',
                'category' => 'Minuman',
            ],
            [
                'title' => 'Lychee Tea',
                'cover' => 'lychee.jpg',
                'price' => '10000',
                'stock' => '20',
                'description' => 'Minuman yang dibuat dengan campuran lychee',
                'category' => 'Minuman',
            ],
            [
                'title' => 'Peach Tea',
                'cover' => 'peach.jpg',
                'price' => '10000',
                'stock' => '20',
                'description' => 'Minuman yang dibuat dengan campuran peach',
                'category' => 'Minuman',
            ],
            [
                'title' => 'Earlgrey Tea',
                'cover' => 'earlgrey.jpg',
                'price' => '15000',
                'stock' => '20',
                'description' => 'Minuman yang dibuat dengan campuran earlgrey',
                'category' => 'Minuman',
            ],
            [
                'title' => 'Caramel Crunch',
                'cover' => 'caramelcrunch.jpeg',
                'price' => '25000',
                'stock' => '20',
                'description' => 'Minuman yang dibuat dengan campuran caramel',
                'category' => 'Minuman',
            ],
            [
                'title' => 'Avocado Coffe',
                'cover' => 'avocado.jpeg',
                'price' => '25000',
                'stock' => '20',
                'description' => 'Minuman yang dibuat dengan campuran kopi dan alpukat',
                'category' => 'Minuman',
            ],
            [
                'title' => 'Cookies & Cream',
                'cover' => 'cookies.jpg',
                'price' => '22000',
                'stock' => '20',
                'description' => 'Minuman yang dibuat dengan campuran cookies dan cream',
                'category' => 'Minuman',
            ],
            [
                'title' => 'Matcha Freeze',
                'cover' => 'matcha.jpg',
                'price' => '22000',
                'stock' => '20',
                'description' => 'Minuman yang dibuat dengan campuran matcha',
                'category' => 'Minuman',
            ],
            [
                'title' => 'Choco Freeze',
                'cover' => 'choco.jpg',
                'price' => '22000',
                'stock' => '20',
                'description' => 'Minuman yang dibuat dengan campuran cokelat',
                'category' => 'Minuman',
            ],
            [
                'title' => 'Taro Freeze',
                'cover' => 'tarolatte.png',
                'price' => '22000',
                'stock' => '20',
                'description' => 'Minuman yang dibuat dengan campuran taro',
                'category' => 'Minuman',
            ],
            [
                'title' => 'Red Velvet Freeze',
                'cover' => 'redvelvet.jpg',
                'price' => '22000',
                'stock' => '20',
                'description' => 'Minuman yang dibuat dengan campuran red velvet',
                'category' => 'Minuman',
            ],
            [
                'title' => 'V60',
                'cover' => 'v60.jpg',
                'price' => '20000',
                'stock' => '20',
                'description' => 'Minuman yang dibuat untuk pecinta kopi',
                'category' => 'Minuman',
            ],
            [
                'title' => 'Vietnam Drip',
                'cover' => 'vietnamdrip.jpg',
                'price' => '20000',
                'stock' => '20',
                'description' => 'Minuman yang dibuat untuk pecinta kopi',
                'category' => 'Minuman',
            ],
            [
                'title' => 'Cold Drip',
                'cover' => 'colddrip.jpeg',
                'price' => '20000',
                'stock' => '20',
                'description' => 'Minuman yang dibuat untuk pecinta kopi',
                'category' => 'Minuman',
            ],
            [
                'title' => 'French Fries & Sausage',
                'cover' => 'french.jpg',
                'price' => '10000',
                'stock' => '20',
                'description' => 'Kentang yang gurih dan ditemani sambal',
                'category' => 'Makanan',
            ],
            [
                'title' => 'Tahu Lada Garam',
                'cover' => 'TahuLada.jpg',
                'price' => '10000',
                'stock' => '20',
                'description' => 'Makanan yang dibuat untuk ngemil sambil minum kopi',
                'category' => 'Makanan',
            ],
            [
                'title' => 'Spaghetti',
                'cover' => 'spaghetti.jpg',
                'price' => '20000',
                'stock' => '20',
                'description' => 'Makanan yang dibuat untuk menambah selera',
                'category' => 'Makanan',
            ],
            [
                'title' => 'Tahu Isi',
                'cover' => 'Tahuisi.jpeg',
                'price' => '20000',
                'stock' => '20',
                'description' => 'Makanan yang dibuat dengan campuran cokelat',
                'category' => 'Makanan',
            ],
            [
                'title' => 'Indomie Telur Rebus',
                'cover' => 'indomietelorrebus.jpg',
                'price' => '15000',
                'stock' => '20',
                'description' => 'Makanan yang dibuat untuk menemani nongkrong',
                'category' => 'Makanan',
            ],
            [
                'title' => 'Indomie Telur Goreng',
                'cover' => 'indomietelorgoreng.jpg',
                'price' => '15000',
                'stock' => '20',
                'description' => 'Makanan yang dibuat untuk menemani nongkrong',
                'category' => 'Makanan',
            ],
            [
                'title' => 'Roti Bakar',
                'cover' => 'rotibakar.jpg',
                'price' => '10000',
                'stock' => '20',
                'description' => 'Makanan yang dibuat untuk menemani nongkrong',
                'category' => 'Makanan',
            ],
        );
        foreach ($data as $d) {
            Product::create([
                'title' => $d['title'],
                'cover' => $d['cover'],
                'price' => $d['price'],
                'stock' => $d['stock'],
                'description' => $d['description'],
                'category' => $d['category']
            ]);
        }
    }
}
