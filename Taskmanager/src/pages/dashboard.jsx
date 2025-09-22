import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      {/* Full Page Container */}
      <div className="h-screen w-full bg-gradient-to-b from-purple-100 to-white select-none p-4">
        
        {/* Header */}
        <div className="h-[50px] w-full flex justify-center items-center mb-4">
          <p className="text-2xl text-purple-800 font-bold uppercase tracking-wider">User Dashboard</p>
        </div>

        {/* Welcome Section */}
        <div className="h-[100px] flex justify-end items-center mb-6">
          <h1 className="text-5xl text-red-400 font-extrabold drop-shadow-lg">Welcome Back, User!</h1>
        </div>

        {/* Tasks Section */}
        <div className="h-[600px] w-full bg-white rounded-xl shadow-xl p-6">
          {/* Section Header */}
          <p className="text-black text-lg font-medium mb-2">Here's a summary of your tasks for today ☛</p>
          <p className="mb-4">
            Add new tasks,{" "}
            <span className="text-blue-500 hover:text-blue-700 hover:underline hover:underline-offset-2">
              <Link to="/task">Go to Task Manager</Link>
            </span>
          </p>

          {/* Tasks Container */}
          <div className="h-[500px] w-full flex justify-center items-start overflow-y-auto">
            <div className="h-[400px] w-[500px] bg-purple-50 border-0 rounded-xl shadow-inner p-4 space-y-4">
              
              {/* Task Items */}
              <div className="flex items-center space-x-3 bg-white p-2 rounded-md shadow-sm hover:bg-purple-100 transition">
                <input type="checkbox" className="w-[25px] h-[25px] border-pink-400" />
                <label className="text-slate-800 text-md font-normal">➤ Complete frontend bug fix *</label>
              </div>

              <div className="flex items-center space-x-3 bg-white p-2 rounded-md shadow-sm hover:bg-purple-100 transition">
                <input type="checkbox" className="w-[25px] h-[25px] border-pink-400" />
                <label className="text-slate-800 text-md font-normal">➤ Write unit tests *</label>
              </div>

              <div className="flex items-center space-x-3 bg-white p-2 rounded-md shadow-sm hover:bg-purple-100 transition">
                <input type="checkbox" className="w-[25px] h-[25px] border-pink-400" />
                <label className="text-slate-800 text-md font-normal">➤ Deploy to Vercel *</label>
              </div>

              {/* File Input */}
              <div className="flex items-center space-x-2 bg-white p-2 rounded-md shadow-sm hover:bg-purple-100 transition">
                <label className="text-slate-800 text-md font-normal">Test File *</label>
                <input
                  type="file"
                  className="w-[180px] h-[30px] border-[2px] text-slate-800 border-black rounded-md outline-0 pl-[5px] cursor-pointer hover:border-purple-500"
                  required
                />
              </div>

              {/* Project URL Input */}
              <div className="flex items-center space-x-2 bg-white p-2 rounded-md shadow-sm hover:bg-purple-100 transition">
                <label className="text-slate-800 text-md font-normal">Project URL *</label>
                <input
                  type="text"
                  className="w-[180px] h-[30px] border-[2px] text-slate-800 border-black rounded-md outline-0 pl-[5px] hover:border-purple-500"
                  placeholder="project url"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="w-full flex justify-center mt-2">
                <input
                  type="submit"
                  value="Submit"
                  className="w-[140px] h-[35px] border-[2px] border-black rounded-md hover:bg-purple-500 hover:text-white transition-all ease-in-out duration-200 cursor-pointer font-semibold shadow-md"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
