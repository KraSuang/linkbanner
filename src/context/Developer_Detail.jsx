import data from "../../package.json"
import { Link } from "react-router-dom"

export default function Developer_Detail() {
    return (
        <div className="bg-background w-full h-screen px-6 py-8 font-chakra-petch text-white overflow-y-auto">
            <p className="text-3xl">Detail</p>
            <p className="text-lg my-4">Tools</p>
            <p className="text-lg px-4">- Vite | Build Tools <br /> - pnpm | Package Management <br /> - npm | Package Management</p>
            <p className="text-lg my-4">Dependencies</p>
            <p className="text-lg px-4">- React | Framework | {data.dependencies.react} <br /> - react-dom | RouterDom | {data.dependencies["react-dom"]} <br /> - react-icons | Icon | {data.dependencies["react-icons"]} <br /> - react-router-dom | RouterDom | {data.dependencies["react-router-dom"]} <br /> - TailwindCSS | CSS Framework | {data.devDependencies.tailwindcss} <br/> - @headlessui/react | Components | {data.dependencies["@headlessui/react"]}</p>
            <p className="text-lg my-4">DevDependencies</p>
            <p className="text-lg px-4">@types/react ^18.2.15 <br />@types/react-dom ^18.2.7<br /> @vitejs/plugin-react ^4.1.0<br /> autoprefixer ^10.4.16<br /> eslint ^8.45.0<br /> eslint-plugin-react ^7.32.2<br /> eslint-plugin-react-hooks ^4.6.0<br /> eslint-plugin-react-refresh ^0.4.3<br /> postcss ^8.4.31<br /> tailwindcss ^3.3.3 <br />vite ^4.4.5</p>

            <Link to="/" className="text-xl">
                Back
            </Link>
        </div>
    )
}