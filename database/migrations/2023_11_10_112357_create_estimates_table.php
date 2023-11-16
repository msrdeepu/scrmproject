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
        Schema::create('estimates', function (Blueprint $table) {
            $table->id();
            $table->string('ebclient')->nullable();
            $table->string('ebfirm')->nullable();
            $table->text('eid')->nullable();
            $table->text('erid')->nullable();
            $table->string('esdate')->nullable();
            $table->string('esdvalidity')->nullable();
            $table->string('eptype')->nullable();
            $table->string('eptitle')->nullable();
            $table->string('epphase')->nullable();
            $table->string('epdetails')->nullable();
            $table->string('disformate')->nullable();
            $table->string('taxmode')->nullable();
            $table->string('paystatus')->nullable();
            $table->bigInteger('totalitems')->nullable();
            $table->bigInteger('subtotal')->nullable();
            $table->bigInteger('discount')->nullable();
            $table->bigInteger('total')->nullable();
            $table->bigInteger('grandtotal')->nullable();
            $table->bigInteger('paidamount')->nullable();
            $table->bigInteger('dueamount')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('estimates');
    }
};
