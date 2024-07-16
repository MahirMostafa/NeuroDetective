import { GetCookieObject } from "@/components/Cookies/CookiesLocal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Profile',
};

export default async function Profile() {
  const user = await GetCookieObject("user");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-green-600 p-4 flex items-center justify-between rounded-t-lg">
          <h1 className="text-xl font-bold text-white">User Profile</h1>
          <img
            className="w-12 h-12 rounded-full border-2 border-white"
            src="/profile.jpg"
            alt="User profile"
          />
        </div>
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{user.username}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-200 rounded-lg p-4">
              <p className="text-base text-gray-600 mb-2">Email:</p>
              <p className="text-lg font-semibold">{decodeURIComponent(user.email)}</p>
            </div>
            <div className="bg-gray-200 rounded-lg p-4">
              <p className="text-base text-gray-600 mb-2">Gender:</p>
              <p className="text-lg font-semibold">{user.gender}</p>
            </div>
            <div className="bg-gray-200 rounded-lg p-4">
              <p className="text-base text-gray-600 mb-2">Contact:</p>
              <p className="text-lg font-semibold">{user.phonenumber}</p>
            </div>
            <div className="bg-gray-200 rounded-lg p-4">
              <p className="text-base text-gray-600 mb-2">Role:</p>
              <p className="text-lg font-semibold">{user.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
