import { SITE_NAME } from "@/site/config"
import DrawerContent from "./DrawerContent"
import { fetchSubreddit } from "@/lib/utils"

export default async function Drawer({
  display,
  subreddit,
}: {
  display: "desktop" | "mobile"
  subreddit: string
}) {
  const subredditData = await fetchSubreddit(subreddit)

  return (
    <>
      {display === "mobile" ? (
        <div className="drawer 2xl:hidden">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content col-auto flex flex-col items-center justify-center">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button 2xl:hidden"
            >
              <img src="/favicon.ico" alt="Redder logo" width={20} />
              {SITE_NAME}
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <DrawerContent
              subreddit={subreddit}
              subredditData={subredditData}
            />
          </div>
        </div>
      ) : (
        <div className="drawer 2xl:drawer-open rounded-xl">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <DrawerContent
              subreddit={subreddit}
              subredditData={subredditData}
            />
          </div>
        </div>
      )}
    </>
  )
}
