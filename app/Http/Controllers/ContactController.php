<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Contact/Contactslist');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Contact/Createcontact');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //dd($request);
        $data= Contact::create([
        "contype" => $request -> contype,
        "title" => $request -> title,
        "fullname" => $request -> fullname,
        "designation" => $request -> designation,
        "cname" => $request -> cname,
        "pan" => $request -> pan,
        "gst" => $request -> gst,
        "phone" => $request -> phone,
        "mobile" => $request -> mobile,
        "altnum" => $request -> altnum,
        "whatsapp" => $request -> whatsapp,
        "emailid" => $request -> emailid,
        "altemail" => $request -> altemail,
        "weburl" => $request -> weburl,
        "town" => $request -> town,
        "country" => $request -> country,
        "avatar" => $request -> avatar,
        "status" => $request -> status,
        "houseaddress" => $request -> houseaddress,
        "officeaddress" => $request -> officeaddress,
        "paddress" => $request -> paddress,
        "bankdetails" => $request -> bankdetails,
        ]);
        $data->save();
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
    public function edit(Contact $contact)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Contact $contact)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contact $contact)
    {
        //
    }
}
