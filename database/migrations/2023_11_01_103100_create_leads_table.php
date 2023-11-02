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
        Schema::create('leads', function (Blueprint $table) {
            $table->id();
            $table->string("title")->nullable();
            $table->string("lowner")->nullable();
            $table->string("lmanager")->nullable();
            $table->string("lsource")->nullable();
            $table->string("lindustry")->nullable();
            $table->string("lstatus")->nullable();
            $table->string("lrating")->nullable();
            $table->string("contdate")->nullable();
            $table->string("arevenue")->nullable();
            $table->string("remind")->nullable();
            $table->string("otherdetails")->nullable();
            $table->string('fullname')->nullable();
            $table->string('cname')->nullable();
            $table->unsignedBigInteger('contact_id');
            $table->foreign('contact_id')
                ->references('id')
                ->on('contacts')
                ->onDelete('cascade');

            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('leads');
    }
};
