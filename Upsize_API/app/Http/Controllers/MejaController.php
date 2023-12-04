<?php

namespace App\Http\Controllers;

use App\Models\Meja;
use App\Http\Requests\StoreMejaRequest;
use App\Http\Requests\UpdateMejaRequest;
use Illuminate\Support\Facades\Http;

class MejaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $meja = Meja::paginate(7);

        return response()->json([
            'status' => 'success',
            'data' => $meja,
        ]);
    }

    public function index_admin()
    {
        $ruangan = Meja::paginate(7);

        return response()->json([
            'status' => 'success',
            'data' => $ruangan,
        ]);
    }
    public function show_admin(Meja $ruangan)
    {
        return response()->json([
            'data' => $ruangan
        ]);
    }
    
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
