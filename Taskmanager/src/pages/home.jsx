import { Link } from 'react-router-dom';

function Home() {
    return(
        <>
        <div className="h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col justify-center items-center select-none">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-6xl text-slate-800 font-bold mb-4">Task Manager</h1>
                <p className="text-xl text-slate-600">Organize your tasks efficiently</p>
            </div>

            {/* Navigation Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto px-4">
                <Link to="/dashboard" className="block">
                    <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-3">Dashboard</h2>
                        <p className="text-slate-600">View your task summary and progress</p>
                    </div>
                </Link>

                <Link to="/task" className="block">
                    <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-3">Task Management</h2>
                        <p className="text-slate-600">Create and manage your tasks</p>
                    </div>
                </Link>
            </div>
        </div>
        </>
    )
}

export default Home;
