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
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('ptitle')->nullabule();
            $table->string('pstatus')->nullabule();
            $table->string('priority')->nullabule();
            $table->string('pcustomer')->nullabule();
            $table->string('paemploye')->nullabule();
            $table->integer('pbudget')->nullabule();
            $table->string('pphase')->nullabule();
            $table->string('startdate')->nullabule();
            $table->string('duedate')->nullabule();
            $table->string('details')->nullabule();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
