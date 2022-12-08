<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chats', function (Blueprint $table) {
            $table->id();
            $table->string("message");
            $table->dateTime("read_at");
            $table->unsignedBigInteger("user_id");
            $table->unsignedBigInteger("worker_id");
            $table->foreign("worker_id")->references("id")->on("workers");
            $table->foreign("user_id")->references("id")->on("users");
            $table->timestamp("sent_at");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('chats');
    }
};