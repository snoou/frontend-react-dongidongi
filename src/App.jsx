import { useState } from 'react';
import FriendsList from './Component/FriendsList/FriendsList';
import { Form } from './Component/Form/Form';

function App() {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState([]);

  function handleAddFriend(newItem) {
    setList((prevList) => [...prevList, newItem]);
    setOpen(false);
  }
  function Update(id, value) {
  setList((prevList) =>
    prevList.map((friend) =>
      friend.id === id
        ? { ...friend, balance: friend.balance + value }
        : friend
    )
  );
}

  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center">
      <h1 className="text-3xl font-black text-slate-800 mb-10">Eat-n-Split</h1>

      <div className="flex flex-col md:flex-row gap-12 w-full max-w-5xl items-start justify-center">

        <div className="w-full md:w-1/2 space-y-4">
          <FriendsList Update={Update} list={list} />

          <div className="mt-6 flex justify-end">
            <button
              onClick={() => setOpen(!open)}
              className={`px-6 py-3 font-bold rounded-xl transition-all shadow-md active:scale-95 ${open
                ? 'bg-rose-100 text-rose-600 hover:bg-rose-200'
                : 'bg-amber-400 text-amber-950 hover:bg-amber-500'
                }`}
            >
              {!open ? 'Add Friend' : 'Close Form'}
            </button>
          </div>
        </div>

        {open && (
          <div className="w-full md:w-auto animate-in fade-in slide-in-from-top-4 duration-300">
            <Form  Add={handleAddFriend} />
          </div>
        )}

      </div>
    </div>
  );
}

export default App;