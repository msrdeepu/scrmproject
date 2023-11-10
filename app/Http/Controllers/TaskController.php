<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $resource = Task::get(['*', 'id AS key']);
        return Inertia::render('Tasks/Tasklist', [
            'resource' => $resource,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
       
        return Inertia::render('Tasks/Createtask', [
            'record'=> new Task(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //dd($request);
        $requestData = $request->all();
        $data = Task::create($requestData);
        $data->save();

        return to_route('tasks.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Task $task, $id)
    {
        $user = Auth::user();
        $tasks = Task::get(['id','tname', 'ttype', 'tstatus', 'tpriority', 'tcategory', 'taemploye', 'tdemploye', 'tsdate', 'tddate', 'tdetails']);
        $task= Task::find($id);
        return Inertia::render('Tasks/Createtask', [
            'user' => $user,
            'tasksList' => $tasks,
            'record' => $task,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $task = Task::find($id);
        $requestData = $request->all();
        $updated=$task->update($requestData);
        return to_route('tasks.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task, $id)
    {
        Task::find($id)->delete();
        return to_route('tasks.index');
    }
}
