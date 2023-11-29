<?php
// app/Models/Meja.php

namespace App\Models;

use App\Models\Cart;
use App\Models\Booking; // Tambahkan ini
use App\Models\OrderDetail;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Meja extends Model
{
    use HasFactory;

    protected $fillable = [
        'cover',
        'meja',
        'description',
    ];

    public function carts()
    {
        return $this->hasMany(Cart::class);
    }

    public function bookings()
    {
        return $this->hasMany(Booking::class); // Sesuaikan dengan nama model Booking yang sebenarnya
    }

    public function orderDetails()
    {
        return $this->belongsTo(OrderDetail::class);
    }
}
