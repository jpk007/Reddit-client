import "./App.css";
import { Header } from "../header/Header";
import { AddSubReddit } from "@/views/add/AddSubReddit.jsx";

export function App() {
  return (
    <>
      <div className="r-wrapper">
        {/* <Menu />
        <div className="r-body"> */}
        <Header />
        <div className="r-inner-body">
          <AddSubReddit className={null}/>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}
