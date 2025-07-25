
"use client";
import { useState } from "react";
import api from "../../api/api.axios";

const User = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async () => {
    setLoading(true);
    setError(" ");
    try {
      const response = await api.get("/api/user/searchAll");
      setUserData(response.data.data[0]);
    } catch (error) {
      setError("Failed to fetch user data.");
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Loading..." : "Click Me"}
      </button>

      {loading && (
        <div className="mt-4 text-blue-700 font-semibold">
          Loading user data...
        </div>
      )}

      {error && <div className="mt-4 text-red-600 font-medium">{error}</div>}

      {userData && !loading && (
        <div className="mt-4 p-4 border rounded bg-gray-50">
          <p>
            <strong>Name:</strong> {userData.firstName}
          </p>
          <p>
            <strong>Address:</strong> {userData.address}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          <p>
            <strong>Gender:</strong> {userData.gender}
          </p>
          <p>
            <strong>Phone Number:</strong> {userData.phoneNumber}
          </p>
          <p>
            <strong>Role:</strong> {userData.role}
          </p>
          <p>
            <strong>Skill:</strong> {userData.skill}
          </p>
        </div>
      )}
    </div>
  );
};

export default User;
