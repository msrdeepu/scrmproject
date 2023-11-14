<?php

namespace App\Http\Controllers;

use App\Models\Detailestimate;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
class DetailestimateController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //$record = Detailestimate::get(['*', 'id AS key']);
        return Inertia::render('Estimates/Estimatelist', [
            'record' => $record,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Estimates/CreateEstimate', [
            'record'=> new Detailestimate(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
         //dd($request);
         $requestData = $request->all();
         $data = Detailestimate::create($requestData);
         $data->save();
 
         return to_route('estimates.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Detailestimate $detailestimate)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Detailestimate $detailestimate)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Detailestimate $detailestimate)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Detailestimate $detailestimate)
    {
        //
    }
}
