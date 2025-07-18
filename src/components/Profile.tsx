const Profile = () => {
  return (
    <div className="mb-8">
      <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-slate-800 border-4 border-indigo-500 overflow-hidden shadow-2xl glow-effect">
        <img
          src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
          alt="Your Name"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Profile;
