<?php

namespace Database\Seeders;

use App\Models\Post;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'amirul',
            'email' => 'amirul@example.com',
        ]);

        for ($i = 0; $i < 10; $i++) {
            Post::create([
                'title' => fake()->sentence(),
                'body'  => fake()->paragraph(3),
            ]);
        }

    }
}
