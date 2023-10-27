<?php

namespace App\Http\Controllers;

use App\Models\Mediamanager;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MediamanagerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Mediamanager/Media');
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Mediamanager $mediamanager)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Mediamanager $mediamanager)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Mediamanager $mediamanager)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Mediamanager $mediamanager)
    {
        //
    }
}
