<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Contact;
use Illuminate\Http\Request;
use App\Models\Setting;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $resource = Contact::get(['*', 'id AS key']);
      
        return Inertia::render('Contact/Contactslist', [
            'resource' => $resource
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $user = Auth::user();
        $ctype = Setting::where('type', '=', 'LIST')->where('name', '=', 'ctype')->get(['name AS label', 'value', 'id AS key']);
        return Inertia::render('Contact/Createcontact', [
            'record'=> new Contact(),
            'ctype' => $ctype,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //dd($request);
        $avatar = null;
        $requestData = $request->all();

        if ($request -> file('avatar')){
            $avatar = $request -> file('avatar') -> store('contacts', 'public');
            $requestData['avatar'] = $avatar;
        }

        $data= Contact::create($requestData);
        $data->save();

        return to_route('contacts.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Contact $contact)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Contact $contact, $id)
    {
        $user = Auth::user();
        $contacts = Contact::get(['id', 'contype', 'title', 'fullname', 'designation', 'cname', 'pan', 'gst', 'phone', 'mobile', 'altnum', 'whatsapp', 'emailid', 'altemail', 'weburl', 'town', 'country', 'avatar', 'status', 'houseaddress', 'officeaddress', 'paddress', 'bankdetails']);
        $contact= Contact::find($id);
        if($contact->avatar != null){
            $contact->avatarPath = asset('storage/'.$contact->avatar);
         }
        return Inertia::render('Contact/Createcontact', [
            'user' => $user,
            'contactsList' => $contacts,
            'record' => $contact,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        //dd($request);
        $contact = Contact::find($id);
        $avatar = null;
        $requestData = $request->all();
        if ($request->file('avatar')) {
            Storage::delete('public' . $contacts->avatar);
            $avatar = $request->file('avatar')->store('contacts', 'public');
            $requestData['avatar'] = $avatar;
        }
        $updated=$contact->update($requestData);
    }

    // delete page assets
    public function deleteasset($id, $asset)
    {
        $contact = Contact::find($id);

        switch($asset) {
            case('avatar'):
                Storage::delete('public' . $contact->avatar);
                $contact->update(["avatar"=> null]);
                break;
            default:

        }
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contact $contact, $id)
    {
        $contact = Contact::find($id);

        if ($contact->avatar !="") {
            Storage::delete('public' . $contact->avatar);
        }

        $contact->delete();

        return to_route('contacts.index');
    }
}
