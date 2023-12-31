import "./menu.scss";

export default function Menu({ menu, setMenu }) {
  return (
    <div className={"menu "+(menu && "active")}>
      <ul>
        <li onClick={()=>setMenu(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMenu(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={()=>setMenu(false)}>
          <a href="#works">Works</a>
        </li>
        <li onClick={()=>setMenu(false)}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={()=>setMenu(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}