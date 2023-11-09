<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $resource = Project::get(['*', 'id AS key']);
        return Inertia::render('Projects/Projectlist', [
            'resource' => $resource,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Projects/CreateProject', [
            'record'=> new Project(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //dd($request);
        $requestData = $request->all();
        $data = Project::create($requestData);
        $data->save();

        return to_route('projects.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project, $id)
    {
        $user = Auth::user();
        $projects = Project::get(['id', 'ptitle', 'pstatus', 'priority', 'pcustomer', 'paemploye', 'pbudget', 'pphase', 'startdate', 'duedate', 'details']);
        $project= Project::find($id);
        return Inertia::render('Projects/CreateProject', [
            'user' => $user,
            'projectsList' => $projects,
            'record' => $project,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $project = Project::find($id);
        $requestData = $request->all();
        $updated=$project->update($requestData);
        return to_route('projects.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project, $id)
    {
        Project::find($id)->delete();
        return to_route('projects.index');
    }
}
