const MenuList = ({ header, onMenuClick, menuItemSelected }) => {
  return (
    <>
      <li
        onClick={onMenuClick}
        className={
          menuItemSelected === header
            ? "menu-item active-bottom-border"
            : "menu-item"
        }
      >
        {header}
      </li>
    </>
  );
};

export default MenuList;
