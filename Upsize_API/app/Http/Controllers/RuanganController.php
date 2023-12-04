<?php

namespace App\Http\Controllers;

use App\Models\Meja;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\StoreMejaRequest;
use App\Http\Requests\UpdateMejaRequest;
use Illuminate\Support\Facades\Http;

class RuanganController extends Controller
{
    public function index()
    {
        $ruangan = Meja::paginate(7);

        return response()->json([
            'status' => 'success',
            'data' => $ruangan,
        ]);
    }
    public function show(Meja $ruangan)
    {
        return response()->json([
            'data' => $ruangan
        ]);
    }
 }
