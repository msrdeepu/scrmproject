<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use App\Models\Activity;
use Illuminate\Http\Request;

class ActivityController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $resource = Activity::get(['*', 'id AS key']);
        return Inertia::render('Activity/Activitylist', [
            'resource' => $resource,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Activity/CreateActivity', [
            'record'=> new Activity(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //dd($request);
        $requestData = $request->all();
        $data = Activity::create($requestData);
        $data->save();

        return to_route('activity.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Activity $activity)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Activity $activity, $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Activity $activity)
    {
        $activity = Activity::find($id);
        $requestData = $request->all();
        $updated=$activity->update($requestData);
        return to_route('activity.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Activity $activity, $id)
    {
        Activity::find($id)->delete();
        return to_route('activity.index');
    }
}
