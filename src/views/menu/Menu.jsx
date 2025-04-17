import "./Menu.css";
function Menu() {
  const menuList = [
    { id: 1, label: "Home" },
    { id: 2, label: "Popular" },
    { id: 3, label: "Trending" },
    { id: 4, label: "All" },
    { id: 5, label: "My Subscriptions" },
    { id: 6, label: "Add Subreddit" },
  ];
  return (
    <>
      <div className="r-menu">
        <div className="r-app-name fw-900 fs-30">Reddit Client</div>
        <ul className="r-menu-list pl-0">
          {menuList?.map((menu) => {
            return (
              <li className="r-menu-item c-pointer mt-10 pl-10" key={menu.id}>
                {menu.label}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
export default Menu;
