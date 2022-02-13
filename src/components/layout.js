import React from "react"

export default function Layout({ children }) {
    return (
        <div class="flex flex-col text-gray-600 h-screen justify-between">
            <main>
                <title>siliconsenthil.in</title>
                <div class="text-center text-yellow-800">
                    <h1 class="text-5xl tracking-wide text-orange-600 py-10 px-5">
                        <a href="/">siliconsenthil.in </a>
                    </h1>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div></div>
                    <div class="lg:col-span-2 px-5">
                        {children}
                    </div>
                    <div></div>
                </div>
            </main >
            <footer class="pt-10 text-center">
                <div class="italic pt-5 pb-2">
                </div>
                &copy;{new Date().getFullYear()} siliconsenthil.in
            </footer>
        </div >
    )
}