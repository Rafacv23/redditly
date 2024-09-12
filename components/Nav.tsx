export default function Nav() {
  return (
    <div className="w-1/5 p-4 sticky top-0 h-screen">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <form>
        <input type="text" placeholder="Search..." />
      </form>
    </div>
  )
}
