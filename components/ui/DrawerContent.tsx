export default function DrawerContent() {
  return (
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      Subreddits
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          Recently visited
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">Fav Subreddits</div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">Fav Posts</div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
    </ul>
  )
}
