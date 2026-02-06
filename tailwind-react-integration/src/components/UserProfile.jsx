
function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-4-sm p-8-md mx-w-sm mx-w-xs mx-auto my-20 rounded-lg shadow-lg">
      <img src="https://via.placeholder.com/150" alt="User" class= "rounded-full w-36-md h-36-md w-24-sm h-24-sm mx-auto"/>
      <h1 class = "text-xl-md text-lg-sm text-blue-800 my-4">John Doe</h1>
      <p class="text-gray-600 text-base-md text-sm-sm">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;