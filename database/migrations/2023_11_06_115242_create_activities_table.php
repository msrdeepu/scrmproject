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
        Schema::create('activities', function (Blueprint $table) {
           
            $table->id();
            $table->unsignedBigInteger('lead_id'); // Foreign key column for "id" from leads
            $table->string('ltitle')->nullabule();
            $table->string('lstatus')->nullabule();
            $table->string('lrating')->nullabule();
            $table->integer('reminder')->nullabule();
            $table->date('condate')->nullabule();
            $table->text('notedetails');
            $table->text('details');
            $table->string('lead_title'); // A column to store the "title" from leads
            $table->foreign('lead_id')
                ->references('id')
                ->on('leads')
                ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('activities');
    }
};
