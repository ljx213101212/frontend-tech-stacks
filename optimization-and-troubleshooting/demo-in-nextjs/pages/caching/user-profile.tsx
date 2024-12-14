// pages/caching/user-profile.js

export async function getServerSideProps({ res }: { res: any}) {
  // Set custom Cache-Control header
  res.setHeader("Cache-Control", "public, max-age=3600, must-revalidate");

  // Fetch or prepare data as needed
  const userProfile = { name: "John Doe", age: 30 };

  return {
    props: {
      userProfile,
    },
  };
}

export default function UserProfile({ userProfile }: { userProfile: any}) {
  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {userProfile.name}</p>
      <p>Age: {userProfile.age}</p>
    </div>
  );
}
