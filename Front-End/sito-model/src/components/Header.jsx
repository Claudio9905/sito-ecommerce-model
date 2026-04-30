import MyNavbar from "./MyNavbar";

const Header = (props) => {
  return (
    <>
      <div id={props.id}>
        <MyNavbar id="navbar" />
      </div>
    </>
  );
};

export default Header;
