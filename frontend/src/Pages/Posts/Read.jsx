import { Link, useLocation } from "react-router-dom";

export default function Read() {
    const location = useLocation();

    return (
        <>
            <div className="flex flex-col space-y-8 text-left">
                <h1 className="mx-auto text-xl">
                    Read
                </h1>
                <label>
                    Title: {location.state.title}
                </label>

                <label>
                    Author: {location.state.author}
                </label>

                <label>
                    Main content: {location.state.body}
                </label>
            </div>

            <div className="flex">
                <Link
                    to="/"
                    className="inline-block px-4 py-2 mt-4 text-black border rounded-md hover:bg-gray-200"
                >
                    Back
                </Link>
            </div>
        </>
    );
}