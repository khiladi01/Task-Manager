import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="h-screen w-full bg-white select-none">
        {/* Header */}
        <div className="h-[50px] w-full flex justify-center items-center">
          <p className="text-2xl text-purple-800 font-semibold uppercase">User Dashboard</p>
        </div>

        {/* Welcome */}
        <div className="h-[100px] text-right">
          <h1 className="text-5xl text-red-400 font-bold">Welcome Back, User!</h1>
        </div>

        {/* Tasks Section */}
        <div className="h-[600px] w-full bg-gradient-to-b from-white to-slate-800 p-4">
          <p className="bg-gradient-to-bl from-slate-800 to-purple-800 bg-clip-text text-transparent text-lg font-medium mb-3">
            Here's a summary of your tasks for today ☛
          </p>
          <p>
            Add new tasks, <Link to="/task">Go to Task Manager</Link>
          </p>

          {/* Tasks */}
          <div className="h-[500px] w-full flex justify-center items-center">
            <div className="h-[500px] w-[500px] shadow-lg grid place-content-center space-y-4 mt-3">
            <div className="flex items-center space-x-2">
              <input type="checkbox" className="w-[25px] h-[25px] border-pink-400" required/>
              <label className="text-slate-800 text-md font-normal">➤ Complete frontend bug fix *</label>
            </div>

            <div className="flex items-center space-x-2">
              <input type="checkbox" className="w-[25px] h-[25px] border-pink-400" required/>
              <label className="text-slate-800 text-md font-normal">➤ Write unit tests *</label>
            </div>

            <div className="flex items-center space-x-2">
              <input type="checkbox" className="w-[25px] h-[25px] border-pink-400" required/>
              <label className="text-slate-800 text-md font-normal">➤ Deploy to Vercel *</label>
            </div>

            <div className="flex items-center space-x-2">
              <label className="text-slate-800 text-md font-normal">Test File *</label>
              <input type="file" className="w-[200px] h-[30px] border-[2px] text-slate-800 border-black rounded-md outline-0 pl-[5px]" placeholder="project url" required/>
            </div>

            <div className="flex items-center space-x-2">
              <label className="text-slate-800 text-md font-normal">Project URL *</label>
              <input type="text" className="w-[200px] h-[30px] border-[2px] text-slate-800 border-black rounded-md outline-0 pl-[5px]" placeholder="project url" required/>
            </div>

            <div className="w-full flex justify-center items-center">
              <div className="flex items-center space-x-2">
              <input type="submit" value="Submit" className="w-[200px] h-[30px] border-[2px] border-black rounded-md hover:bg-slate-500 hover:text-slate-900 transition-all ease-in-out duration-200 cursor-pointer" required/>
            </div>
            </div>

          </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Dashboard;
