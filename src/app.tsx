import { createRoot } from 'react-dom/client';

import './index.css';

const root = createRoot(document.querySelector(".content"));
root.render(
    <div className="h-screen flex justify-center items-center">
        <h1 className="text-3xl font-bold underline">
            Welcome to a App with Electron + React + Tailwind!
        </h1>
    </div>
);