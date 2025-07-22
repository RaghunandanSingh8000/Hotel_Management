import React from 'react';

const blogs = [
    {
        id: 1,
        title: 'Top 5 Tips for a Comfortable Hotel Stay',
        author: 'Jane Doe',
        date: '2024-06-10',
        content: 'Discover how to make the most of your hotel experience with these simple tips...'
    },
    {
        id: 2,
        title: 'How to Choose the Perfect Room',
        author: 'John Smith',
        date: '2024-06-08',
        content: 'Selecting the right room can make all the difference. Here’s what to look for...'
    },
    {
        id: 3,
        title: 'Hotel Amenities You Shouldn’t Miss',
        author: 'Emily Clark',
        date: '2024-06-05',
        content: 'From pools to spas, explore the amenities that can enhance your stay...'
    },
    {
        id: 4,
        title: 'Smart Tech in Modern Hotels',
        author: 'Ravi Kumar',
        date: '2024-06-01',
        content: 'Learn how AI, digital keys, and smart energy are changing the guest experience...'
    }
];

const tagColors = [
    "bg-gradient-to-r from-pink-200 via-yellow-100 to-yellow-200 text-pink-700",
    "bg-gradient-to-r from-yellow-100 via-gold/60 to-royal/10 text-gold",
    "bg-gradient-to-r from-cyan-100 via-blue-100 to-gold/10 text-blue-700",
    "bg-gradient-to-r from-emerald-100 via-yellow-50 to-gold/10 text-emerald-700"
];

const Blogs = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#232946] via-[#f7c873] to-[#0f5132] py-14 px-2 sm:px-4 flex items-center">
            <div className="w-full max-w-4xl mx-auto rounded-3xl shadow-2xl border-t-8 border-gold bg-white/80 backdrop-blur-md p-6 sm:p-10">
                <h2 className="text-4xl font-extrabold text-royal mb-8 text-center drop-shadow font-['Playfair_Display',serif]">
                    Latest Blogs & Insights
                </h2>
                <div className="grid gap-10">
                    {blogs.map((blog, idx) => (
                        <div
                            key={blog.id}
                            className={`rounded-2xl shadow-xl border-t-4 border-gold bg-gradient-to-br from-white via-yellow-50 to-pink-50/80 p-7 hover:shadow-2xl transition flex flex-col`}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold shadow ${tagColors[idx % tagColors.length]}`}>
                                    {blog.author}
                                </span>
                                <span className="text-xs text-gray-500">{new Date(blog.date).toLocaleDateString()}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-pink-600 mb-2">{blog.title}</h3>
                            <p className="text-gray-700 mb-4">{blog.content}</p>
                            <button className="self-start px-5 py-2 bg-gradient-to-r from-pink-400 via-yellow-300 to-yellow-500 text-royal rounded-full font-bold text-xs shadow hover:scale-105 hover:bg-yellow-400 transition border-2 border-pink-600">
                                Read More
                            </button>
                        </div>
                    ))}
                </div>
                <div className="mt-10 text-center">
                    <span className="inline-block bg-gold/10 text-royal px-5 py-3 rounded-full font-semibold shadow text-base">
                        Want to write for us? <a href="mailto:info@rathorehotel.com" className="underline hover:text-gold">Contact our editor</a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Blogs;