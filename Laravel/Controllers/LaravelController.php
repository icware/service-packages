<?php

namespace App\Packages\Laravel\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Packages\Laravel\Models\Laravel;

class LaravelController extends Controller
{
    public function index()
    {
        // Recupera todos os radares e retorna como JSON
        $radares = Laravel::all();
        return response()->json($radares);
    }

    public function store(Request $request)
    {
        // Valida os dados recebidos na requisição
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        // Cria um novo radar com base nos dados recebidos e o salva no banco de dados
        $radar = new Laravel();
        $radar->name = $request->name;
        $radar->save();

        // Retorna uma resposta JSON com o novo radar criado
        return response()->json($radar, 201);
    }
}