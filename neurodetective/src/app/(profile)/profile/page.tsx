import { GetCookieObject } from "@/components/Cookies/CookiesLocal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Profile',
};

export default async function Profile() {
  const user = await GetCookieObject("user");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 p-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-green-600 p-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-white">Profile</h1>
          <img
            className="w-12 h-12 rounded-full border-2 border-white"
            src="/profile.jpg"
            alt="User profile"
          />
        </div>
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{user.username}</h2>
          <p className="text-base text-gray-600 mb-2">Email: {decodeURIComponent(user.email)}</p>
          <p className="text-base text-gray-600 mb-2">Gender: {user.gender}</p>
          <p className="text-base text-gray-600 mb-2">Contact: {user.phonenumber}</p>
          <p className="text-base text-gray-600 mb-2">Role: {user.role}</p>
        </div>
      </div>
    </div>
  );
}
