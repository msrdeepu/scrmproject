<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     * 
     */

    
    public function up(): void
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->string('ttype')->nullable();
            $table->string('tname')->nullable();
            $table->string('tstatus')->nullable();
            $table->string('tpriority')->nullable();
            $table->string('tcategory')->nullable();
            $table->string('taemploye')->nullable();
            $table->string('tdemploye')->nullable();
            $table->string('tsdate')->nullable();
            $table->string('tddate')->nullable();
            $table->string('tdetails')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};
