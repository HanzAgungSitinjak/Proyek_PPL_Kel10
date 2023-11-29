<?php

namespace App\Http\Controllers;

use App\Models\Meja;
use App\Http\Requests\StoreMejaRequest;
use App\Http\Requests\UpdateMejaRequest;

class MejaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $externalApiUrl = 'http://localhost:8000/api/meja';
        $response = Http::get($externalApiUrl);

        if ($response->successful()) {
            $externalData = $response->json();
            // Lakukan sesuatu dengan data yang diterima dari API eksternal
        } else {
            // Tangani error jika diperlukan
            abort($response->status());
        }

        // Mengambil data dari database lokal
        $meja = Meja::paginate(10);

        // Menampilkan data di view
        return view('meja.index', [
            'localData' => $meja,
            'externalData' => $externalData ?? null,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }
 
    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMejaRequest $request)
    {
        $request->validate([
            'cover' => 'required',
            'meja' => 'required|unique:mejas', // Add any other validation rules you need
            'description' => 'required',
        ]);

        $meja = Meja::create($request->all());

        return response()->json([
            'message' => 'Meja created successfully',
            'data' => $meja
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Meja $meja)
    {
        return response()->json([
            'data' => $meja
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Meja $meja)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMejaRequest $request, Meja $meja)
    {
        $request->validate([
            'cover' => 'required',
            'meja' => 'required|unique:mejas,meja,' . $meja->id,
            'description' => 'required',
        ]);
    
        $meja->update($request->all());
    
        return response()->json([
            'message' => 'Meja updated successfully',
            'data' => $meja
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Meja $meja)
    {
        $meja->delete();

        return response()->json([
            'message' => 'Meja deleted successfully',
            'data' => null
        ]);
    }
}
