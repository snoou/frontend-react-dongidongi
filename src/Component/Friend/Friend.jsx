import { useState } from "react";
import Bill from "../Bill/Bill";
export function Friend({ item, Update }) {
    const [open, Setopen] = useState(false)
    return (<div className="flex gap-3">
        <div className="group flex flex-col sm:flex-row items-center justify-between w-full max-w-lg bg-white hover:bg-indigo-50 border border-slate-100 p-4 my-3 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 gap-4">
            <div className="flex items-center gap-4">
                <div className="relative">
                    <img
                        className="w-20 h-20 rounded-full object-cover border-2 border-indigo-200 p-0.5"
                        src={item.img}
                        alt={item.name}
                    />
                </div>

                <div className="flex flex-col">
                    <h2 className="text-xl font-bold text-slate-800">{item.name}</h2>
                    <p className={`text-sm font-medium ${item.balance < 0 ? 'text-rose-500' :
                        item.balance > 0 ? 'text-emerald-600' :
                            'text-slate-500'
                        }`}>
                        {item.balance < 0 ? `You owe $${Math.abs(item.balance)}` :
                            item.balance > 0 ? `You are owed $${item.balance}` :
                                `You are all settled up`}
                    </p>
                </div>
            </div>
            {!open ? (<button onClick={() => Setopen(!open)} className="w-full sm:w-auto px-6 py-2.5 text-indigo-950 bg-amber-400 hover:bg-amber-500 font-bold rounded-xl transition-colors shadow-sm active:transform active:scale-95">
                Select
            </button>) : (<button onClick={() => Setopen(!open)} className="w-full sm:w-auto px-6 py-2.5 text-white bg-indigo-600 hover:bg-indigo-700 font-bold rounded-xl transition-colors shadow-sm active:transform active:scale-95">
                Close
            </button>)}



        </div>
        {open && <Bill Update={Update} item={item} />}
    </div>
    );
}