import { useState } from "react";

export default function Bill({ item, Update }) {
    const [bill, setBill] = useState("");
    const [paidByUser, setPaidByUser] = useState("");
    const [whoIsPaying, setWhoIsPaying] = useState("user");

    const paidByFriend = bill ? bill - paidByUser : "";

    function handleSubmit(e) {
        e.preventDefault();
        if (!bill || !paidByUser) return;
        const value = whoIsPaying === "user" ? paidByFriend : -paidByUser;
        Update(item.id, value);
    }

    return (
        <form onSubmit={handleSubmit} className="bg-indigo-50 p-6 rounded-2xl flex flex-col gap-4 min-w-[300px]">
            <h2 className="text-lg font-bold text-indigo-900 uppercase tracking-wider">Split with {item.name}</h2>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-slate-600">💰 Bill value</label>
                <input
                    className="p-2 rounded-lg border border-indigo-200 outline-none focus:ring-2 focus:ring-indigo-400"
                    type="number" value={bill} onChange={(e) => setBill(Number(e.target.value))}
                />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-slate-600">🧍‍♂️ Your expense</label>
                <input
                    className="p-2 rounded-lg border border-indigo-200 outline-none focus:ring-2 focus:ring-indigo-400"
                    type="number" value={paidByUser}
                    onChange={(e) => setPaidByUser(Number(e.target.value) > bill ? paidByUser : Number(e.target.value))}
                />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-slate-600">👫 {item.name}'s expense</label>
                <input className="p-2 rounded-lg bg-indigo-100 text-slate-500 outline-none cursor-not-allowed" type="number" disabled value={paidByFriend} />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-slate-600">🤑 Who is paying the bill?</label>
                <select
                    className="p-2 rounded-lg border border-indigo-200 outline-none focus:ring-2 focus:ring-indigo-400"
                    value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}
                >
                    <option value="user">You</option>
                    <option value="friend">{item.name}</option>
                </select>
            </div>

            <button className="mt-2 w-full py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all shadow-md">
                Split Bill
            </button>
        </form>
    );
}