
function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 sm:p-4 md:p-8 sm:mx-w mx-w-xs md:mx-w-sm mx-auto my-20 rounded-lg shadow-lg">
      <img src="https://via.placeholder.com/150" alt="User" class= "rounded-full md:w-36 md:h-36 sm:w-24 sm:h-24 mx-auto"/>
      <h1 class = "md:text-xl sm:text-lg text-blue-800 my-4">John Doe</h1>
      <p class="text-gray-600 md:text-base sm:text-sm">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;