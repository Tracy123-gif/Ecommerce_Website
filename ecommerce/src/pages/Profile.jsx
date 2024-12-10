import React, { useState, useEffect } from 'react';
import Navbar from '../Components/sectionContent/Navbar';
import { CgProfile } from 'react-icons/cg';
import { useValidate } from '../UseValidate';
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
  const { userRegDetails, logout, isReg, setIsReg} = useValidate();
  const { name, email, address } = userRegDetails;


  const [showModal, setShowModal] = useState(false); 

  const handleLogout = () => {
    // Show confirmation modal when logout button is clicked
    setShowModal(true);
  };

   

  // const confirmLogout = () => {
  //   // Call the logout function and close the modal
  //   logout();
  //   setShowModal(false);
  // };



  const cancelLogout = () => {
    // Hide the modal if the user cancels
    setShowModal(false);
  };


  
  const confirmLogout = () => {
     logout()
    setShowModal(false);
   navigate('/')

}

const navigate = useNavigate()

// useEffect(()=>{
//   navigate('/')
//  }, [confirmLogout])

const checkOut = (data) => {
    // You can access the submitted form data here
    console.log('Checkout successful', data);
    // Your API call or checkout logic can go here

    return {checkOut};
};


  return (
    <div className="profileWrapper">
      <div className="py-3 px-6">
        <Navbar />
      </div>

      <div className="profile p-6">
        {/* Profile Header */}
        <div className="flex items-center space-x-4 mb-4">
          <CgProfile size={60} />
          <div>
            <p className="text-2xl font-semibold">{name}</p>
            <p className="text-sm text-gray-500">{email}</p>
          </div>
        </div>

        {/* Account Information */}
        <div className="account-info mb-8">
          <h2 className="text-xl font-semibold mb-2">Account Information</h2>
          {
            isReg ? <div>
              <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Address:</strong> {address || 'No address provided'}</p>
            </div> : <div>
              <p><strong>Name:</strong></p>
            <p><strong>Email:</strong></p>
            <p><strong>Address:</strong></p>
            </div> 
          }
          <Link to="/" className="text-primary mt-4 inline-block">
            Edit Profile
          </Link>
        </div>

        {/* Order History */}
        <div className="order-history mb-8">
          <h2 className="text-xl font-semibold mb-2">Order History</h2>
          <ul className="list-disc list-inside">
            {userRegDetails.orders?.length ? (
              userRegDetails.orders.map((order, index) => (
                <li key={index} className="mb-2">
                  <Link to={`/order/${order.id}`} className="text-primary">
                    Order #{order.id} - {order.date}
                  </Link>
                </li>
              ))
            ) : (
              <p>No orders found.</p>
            )}
          </ul>
        </div>

        {/* Account Settings */}
        <div className="account-settings mb-8">
          <h2 className="text-xl font-semibold mb-2">Account Settings</h2>
          <Link to="/change-password" className="text-primary">
            Change Password
          </Link>
        </div>

        {/* Logout Button */}
       {
        isReg ?  <div className="logout">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
         Logout
        </button>
      </div> :  <div className="logout">
          <button
            
            className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
          >
           <Link to='/Register'>Register </Link>
          </button>
        </div>
       }

        {/* Logout Confirmation Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg">
              <h2 className="text-lg font-semibold mb-4">Are you sure you want to log out?</h2>
              <div className="flex justify-end gap-4">
                <button
                  onClick={cancelLogout}
                  className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
