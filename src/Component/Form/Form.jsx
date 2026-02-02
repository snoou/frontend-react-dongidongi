import { useState } from "react"
export function Form({ Add , Update }) {

    const [img, Setimg] = useState("")
    const [name, Setname] = useState("")
    function Handelsub(e) {
        e.preventDefault();
        const id = crypto.randomUUID()
        const newFriend =
        {
            id,
            name,
            balance: 0,
            img,
        };
        Add(newFriend)
    }

    return <form
        className="bg-slate-900 text-white w-full max-w-md p-8 rounded-2xl shadow-xl flex flex-col gap-6"
        onSubmit={Handelsub}
    >
        <h2 className="text-2xl font-bold mb-2 text-blue-400">Add New Item</h2>

        <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
            <input
                onChange={(e) => Setname(e.target.value)}
                className="bg-slate-800 border border-slate-700 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                id="name"
                type="text"
                placeholder="Enter name..."
            />
        </div>

        <div className="flex flex-col gap-2">
            <label htmlFor="urlimg" className="text-sm font-medium text-slate-300">Image URL</label>
            <input
                value={img}
                onChange={(e) => Setimg(e.target.value)}
                className="bg-slate-800 border border-slate-700 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                id="urlimg"
                type="text"
                placeholder="https://example.com/image.png"
            />
        </div>

        <button
            className="mt-4 px-6 py-3 text-white bg-blue-600 font-semibold rounded-lg hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30 transition-all active:scale-95"
        >
            Add Item
        </button>
    </form>
}