<script>
    import { base } from "$app/paths";
</script>

<footer
    class="bg-slate-900 border-t border-slate-800 pt-20 pb-10 text-slate-400"
>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <!-- Brand -->
            <div class="col-span-1 md:col-span-2 space-y-8">
                <div class="flex items-center gap-3">
                    <img
                        src="{base}/images/srilogo.svg"
                        alt="Sri Speech & Hearing Logo"
                        class="w-10 h-10 object-contain brightness-0 invert"
                    />
                    <span
                        class="font-serif font-bold text-white text-2xl tracking-tight"
                        >Sri Speech & Hearing</span
                    >
                </div>
                <p class="text-slate-400 leading-relaxed max-w-sm text-lg">
                    Dedicated to improving your quality of life through better
                    hearing. Our team of certified audiologists provides
                    personalized care using the latest technology.
                </p>
                <div class="flex space-x-4">
                    <!-- Social Icons -->
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit our Facebook page"
                        class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                        ><svg
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            ><path
                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                            /></svg
                        ></a
                    >
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit our Instagram page"
                        class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                        ><svg
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            ><path
                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.059 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.2-4.354-2.624-6.78-6.98-6.98-1.28-.058-1.689-.072-4.948-.072zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                            /></svg
                        ></a
                    >
                </div>
            </div>

            <!-- Quick Links -->
            <div>
                <h4 class="font-serif font-bold text-white text-lg mb-6">
                    Explore
                </h4>
                <ul class="space-y-4">
                    <li>
                        <a
                            href="{base}/"
                            class="hover:text-blue-400 transition-colors"
                            >Home</a
                        >
                    </li>
                    <li>
                        <a
                            href="{base}/hearing-aids/styles"
                            class="hover:text-blue-400 transition-colors"
                            >Technology</a
                        >
                    </li>
                    <li>
                        <a
                            href="{base}/hearing-loss/signs"
                            class="hover:text-blue-400 transition-colors"
                            >Understanding Hearing Loss</a
                        >
                    </li>
                    <li>
                        <a
                            href="{base}/research"
                            class="hover:text-blue-400 transition-colors"
                            >Clinical Evidence</a
                        >
                    </li>
                    <li>
                        <a
                            href="{base}/book"
                            class="hover:text-blue-400 transition-colors"
                            >Book Appointment</a
                        >
                    </li>
                </ul>
            </div>

            <!-- Contact -->
            <div>
                <h4 class="font-serif font-bold text-white text-lg mb-6">
                    Contact
                </h4>
                <ul class="space-y-6">
                    <li class="flex items-start">
                        <svg
                            class="w-6 h-6 text-blue-500 mr-4 shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            ><path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            /><path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            /></svg
                        >
                        <span class="leading-relaxed"
                            >123 Model Town, Near Main Market,<br />Ludhiana,
                            Punjab 141001</span
                        >
                    </li>
                    <li class="flex items-center">
                        <svg
                            class="w-6 h-6 text-blue-500 mr-4 shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            ><path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            /></svg
                        >
                        <a
                            href="tel:+919417780505"
                            class="hover:text-blue-400 transition-colors font-medium text-white"
                            >+91 94177 80505</a
                        >
                    </li>
                    <li class="flex items-center">
                        <svg
                            class="w-6 h-6 text-blue-500 mr-4 shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            ><path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            /></svg
                        >
                        <a
                            href="mailto:info@srispeech.com"
                            class="hover:text-blue-400 transition-colors"
                            >info@srispeech.com</a
                        >
                    </li>
                </ul>
            </div>
        </div>

        <!-- Medical Disclaimer -->
        <div class="border-t border-slate-800 pt-8 mt-8 text-xs text-slate-600">
            <p>
                <strong>Medical Disclaimer:</strong> The information provided on
                this website is for educational purposes only and is not intended
                as a substitute for professional medical advice, diagnosis, or treatment.
                Always seek the advice of your physician or qualified hearing healthcare
                provider with any questions you may have regarding a medical condition.
            </p>
        </div>

        <!-- Bottom Bar -->
        <div
            class="pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500"
        >
            <p>
                &copy; {new Date().getFullYear()} Sri Speech & Hearing Aid Centre.
                All rights reserved.
            </p>
            <div class="flex gap-8 mt-4 md:mt-0">
                <a
                    href="{base}/privacy"
                    class="hover:text-blue-400 transition-colors"
                    >Privacy Policy</a
                >
                <a
                    href="{base}/terms"
                    class="hover:text-blue-400 transition-colors"
                    >Terms of Service</a
                >
            </div>
        </div>
    </div>
</footer>
