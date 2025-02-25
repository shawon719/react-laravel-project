<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
@include('Shared.header')
<div>
<div class="relative min-h-[400px] bg-cover bg-center flex items-center justify-center text-white"
        style="background-image: url('https://i.ibb.co/SzGFCHt/Banner.jpg');">
        <div class="bg-black bg-opacity-30 p-8 text-center rounded-2xl">
            <h1 class="text-4xl md:text-5xl font-bold">Welcome to GrandPr0 Hotel</h1>
            <p class="text-lg md:text-2xl mt-4">Experience luxury and comfort like never before.</p>
        </div>
    </div>
<br>
<div class="container mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <!-- Card 1 -->
            <div class="bg-white p-4 rounded-lg shadow-md">
                <img src="https://i.ibb.co.com/C56t4FS1/download-1.jpg" alt="Image" class="w-full h-40 object-cover rounded-md">
                <h3 class="text-lg font-semibold mt-3">Card Title</h3>
                <p class="text-gray-600 text-sm mt-2">This is a responsive card using Tailwind CSS.</p>
                <button class="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Learn More</button>
            </div>
            
            <!-- Duplicate cards for demonstration -->
            <div class="bg-white p-4 rounded-lg shadow-md">
                <img src="https://i.ibb.co.com/KzS9B9xR/images.jpg" alt="Image" class="w-full h-40 object-cover rounded-md">
                <h3 class="text-lg font-semibold mt-3">Card Title</h3>
                <p class="text-gray-600 text-sm mt-2">This is a responsive card using Tailwind CSS.</p>
                <button class="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Learn More</button>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-md">
                <img src="https://i.ibb.co.com/YFd9hVb3/images-1.jpg" alt="Image" class="w-full h-40 object-cover rounded-md">
                <h3 class="text-lg font-semibold mt-3">Card Title</h3>
                <p class="text-gray-600 text-sm mt-2">This is a responsive card using Tailwind CSS.</p>
                <button class="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Learn More</button>
            </div>

            <div class="bg-white p-4 rounded-lg shadow-md">
                <img src="https://i.ibb.co.com/B5xY3HdG/gettyimages-1357529812-612x612.jpg" alt="Image" class="w-full h-40 object-cover rounded-md">
                <h3 class="text-lg font-semibold mt-3">Card Title</h3>
                <p class="text-gray-600 text-sm mt-2">This is a responsive card using Tailwind CSS.</p>
                <button class="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Learn More</button>
            </div>
        </div>
    </div>



</div>

@include('Shared.footer')

<!-- Footer -->

<script src="https://cdn.tailwindcss.com"></script>
</body>
</html>