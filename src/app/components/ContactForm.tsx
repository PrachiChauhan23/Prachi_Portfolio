'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto space-y-6 bg-white dark:bg-gray-900 p-6 rounded-lg shadow"
        >
            <p className="text-3xl font-headline text-accent">Get In Touch</p>
            <p>Fill out the form below, and I&apos;ll get back to you as soon as possible.</p>
            <div>
                <label className="block text-sm font-medium mb-1 text-gray-800 dark:text-gray-200">Full Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 dark:border-gray-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder='Your name'
                />
            </div>

            <div>
                <label className="block text-sm font-medium mb-1 text-gray-800 dark:text-gray-200">Email Address</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 dark:border-gray-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder='your.email@example.com'
                />
            </div>

            <div>
                <label className="block text-sm font-medium mb-1 text-gray-800 dark:text-gray-200">Message</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="w-full border border-gray-300 dark:border-gray-700 p-2 rounded resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder='Tell me how can i help you...'
                ></textarea>
            </div>

            <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"
            >
                Send Message
            </button>

            {submitted && (
                <p className="text-green-600 text-sm text-center">Thank you! Your message has been sent.</p>
            )}
        </form>
    );
}
