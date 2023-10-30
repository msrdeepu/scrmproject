<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('contacts', function (Blueprint $table) {
            $table->id();
            $table->string("contype");
            $table->string("title");
            $table->string("fullname");
            $table->string("designation");
            $table->string("cname");
            $table->string("pan");
            $table->string("gst");
            $table->bigInteger("phone");
            $table->bigInteger("mobile");
            $table->bigInteger("altnum");
            $table->bigInteger("whatsapp");
            $table->string("emailid");
            $table->string("altemail");
            $table->string("weburl");
            $table->string("town");
            $table->string("country");
            $table->text("avatar");
            $table->string("status");
            $table->text("houseaddress");
            $table->text("officeaddress");
            $table->text("paddress");
            $table->text("bankdetails");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contacts');
    }
};
