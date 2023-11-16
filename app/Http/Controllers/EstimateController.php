<?php

namespace App\Http\Controllers;

use App\Models\Estimate;
use Illuminate\Http\Request;
use App\Models\Setting;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
class EstimateController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $record = Estimate::get(['*', 'id AS key']);
        return Inertia::render('Estimates/Estimatelist', [
            'record' => $record,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $esmtax = Setting::where('type', '=', 'LIST')->where('name', '=', 'esmtax')->get(['name AS label', 'value', 'id AS key']);
        
        return Inertia::render('Estimates/CreateEstimate', [
            'record'=> new Estimate(),
            'esmtax' => $esmtax,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        dd($request);
        // $requestData = $request->all();
        // $data = Estimate::create($requestData);
        // $data->save();

        // return to_route('estimates.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Estimate $estimate)
    {
        //
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Estimate $estimate, $id)
    {
        $user = Auth::user();
        $estimates = Estimate::get(['id', 'ebclient', 'ebfirm', 'eid', 'erid', 'esdate', 'esdvalidity', 'eptype', 'eptitle', 'epphase', 'epdetails', 'disformate', 'taxmode', 'paystatus', 'totalitems', 'subtotal' ,'discount', 'total', 'grandtotal', 'paidamount', 'dueamount']);
        $estimate= Estimate::find($id);
        return Inertia::render('Estimates/CreateEstimate', [
            'user' => $user,
            'estimateslist' => $estimates,
            'record' => $estimate,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $estimate = Estimate::find($id);
        $requestData = $request->all();
        $updated=$estimate->update($requestData);
        return to_route('estimates.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        Estimate::find($id)->delete();
        return to_route('estimates.index');
    }
}
