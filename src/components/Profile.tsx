const Profile = () => {
  return (
    <div className="mb-8">
      <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-slate-800 border-4 border-indigo-500 overflow-hidden shadow-2xl glow-effect">
        <img
          src="https://res.cloudinary.com/dittybzbt/image/upload/v1752870958/IMG_2693_kleter.jpg"
          alt="Your Name"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Profile;
