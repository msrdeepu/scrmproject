<?php

namespace App\Http\Controllers;

use App\Models\Employe;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
class EmployeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $resource = Employe::get(['*', 'id AS key']);
        return Inertia::render('Employees/EmployList', [
            'resource' => $resource,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Employees/CreateEmploy', [
            'record'=> new Employe(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //dd($request);
        $requestData = $request->all();
        $data = Employe::create($requestData);
        $data->save();

        return to_route('employee.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Employe $employe)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Employe $employe, $id)
    {
        $user = Auth::user();
        $employes = Employe::get(['id', 'ccode', 'empcode', 'dob', 'gender', 'maritalstatus', 'bloodgroup', 'physicallychallenged', 'nationality', 'passport', 'joinedon', 'probationendson', 'department', 'role', 'reportingto', 'prevexp', 'payfrequency', 'salary', 'status', 'resignedon', 'resignreason', 'emrgencycp', 'relation', 'emrgencynum', 'insurancepolicy']);
        $employ= Employe::find($id);
        return Inertia::render('Employees/CreateEmploy', [
            'user' => $user,
            'leadssList' => $employes,
            'record' => $employ,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $employe = Employe::find($id);
        $requestData = $request->all();
        $updated=$employe->update($requestData);
        return to_route('employee.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Employe $employe, $id)
    {
        Employe::find($id)->delete();
        return to_route('leads.index');
    }
}
