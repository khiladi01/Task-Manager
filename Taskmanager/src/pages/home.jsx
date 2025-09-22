import { Link } from 'react-router-dom';

function Home() {
    return(
        <>
        <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col justify-center items-center select-none p-4">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl text-slate-800 font-bold mb-4">Task Manager</h1>
                <p className="text-lg sm:text-xl md:text-xl text-slate-600">Organize your tasks efficiently</p>
            </div>

            {/* Navigation Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full px-2 sm:px-4">
                <Link to="/dashboard" className="block">
                    <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500 h-full flex flex-col justify-between">
                        <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-2 sm:mb-3">Dashboard</h2>
                        <p className="text-sm sm:text-slate-600">View your task summary and progress</p>
                    </div>
                </Link>

                <Link to="/task" className="block">
                    <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500 h-full flex flex-col justify-between">
                        <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-2 sm:mb-3">Task Management</h2>
                        <p className="text-sm sm:text-slate-600">Create and manage your tasks</p>
                    </div>
                </Link>
            </div>
        </div>
        </>
    )
}

export default Home;
