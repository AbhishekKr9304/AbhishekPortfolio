export default function Navbar() {
  return (
    <nav className="flex justify-between w-full p-6 bg-red-500">
      <h2 className="font-bold">
        Abhishek Kumar
      </h2>

      <div className="flex gap-4">
        <a href="#">Home</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}