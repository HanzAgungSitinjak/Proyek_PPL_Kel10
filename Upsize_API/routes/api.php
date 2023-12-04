<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MejaController;
use App\Http\Controllers\RuanganController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('meja', MejaController::class);
Route::get('/meja', [MejaController::class, 'index']);
Route::get('/meja/{meja}', [MejaController::class, 'show']);
Route::post('meja', [MejaController::class, 'store']);
Route::delete('meja/{meja}', [MejaController::class, 'destroy']);
Route::put('meja/{meja}', [MejaController::class, 'update']);
Route::apiResource('ruangan', RuanganController::class);
Route::get('/ruangan', [RuanganController::class, 'index']);
Route::get('/ruangan{ruangan}', [RuanganController::class, 'show']);
