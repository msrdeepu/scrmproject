<?php

namespace App\Http\Controllers;

use App\Models\Lead;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;

class LeadController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $resource = Lead::get(['*', 'id AS key']);
        return Inertia::render('Leads/Leadslist', [
            'resource' => $resource,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Leads/Createlead', [
            'record'=> new Lead(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //dd($request);
        $requestData = $request->all();
        $data = Lead::create($requestData);
        $data->save();

        return to_route('leads.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Lead $lead)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Lead $lead, $id)
    {
        $user = Auth::user();
        $leads = Lead::get(['id', 'title', 'lowner', 'lmanager', 'lsource', 'lindustry', 'lstatus', 'lrating', 'contdate', 'arevenue', 'remind', 'otherdetails', 'fullname', 'cname']);
        $lead= Lead::find($id);
        return Inertia::render('Leads/Createlead', [
            'user' => $user,
            'leadssList' => $leads,
            'record' => $lead,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $lead = Lead::find($id);
        $requestData = $request->all();
        $updated=$lead->update($requestData);
        return to_route('leads.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        Lead::find($id)->delete();
        return to_route('leads.index');
    }
}
