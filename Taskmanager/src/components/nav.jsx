import { Link } from 'react-router-dom';

function Nav() {
    return(
        <>
        <nav className="w-full bg-blue-600 text-white p-4 shadow-lg">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Task Manager</h1>
                <div className="space-x-6">
                    <Link to="/" className="hover:text-blue-200 transition-colors">Home</Link>
                    <Link to="/dashboard" className="hover:text-blue-200 transition-colors">Dashboard</Link>
                    <Link to="/task" className="hover:text-blue-200 transition-colors">Tasks</Link>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Nav;
