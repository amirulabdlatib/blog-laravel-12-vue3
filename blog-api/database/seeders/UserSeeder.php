<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        
        User::factory()->create([
            'name' => 'amirul',
            'email' => 'amirul@example.com',
            'is_admin' => true,
        ]);

        User::factory()->create([
            'name' => 'jon',
            'email' => 'jon@example.com',
            'password' => bcrypt('password'),
            'is_admin' => false,
        ]);

        User::factory()->create([
            'name' => 'stewart',
            'email' => 'stewart@example.com',
            'password' => bcrypt('password'),
            'is_admin' => false,
        ]);

        User::factory()->create([
            'name' => 'jessica',
            'email' => 'jessica@example.com',
            'password' => bcrypt('password'),
            'is_admin' => false,
        ]);
    }
}
