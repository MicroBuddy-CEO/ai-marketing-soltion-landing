import logo from "../assets/Logo.png";
// import Button from "../utils/Button";

export default function Navbar() {
  const navigation = [
    { title: "Home" },
    { title: "About Us" },
    { title: "Feature" },
    { title: "Project" },
    { title: "Login" },
  ];

  return (
    <nav className="w-full">

      <div className="flex items-center gap-[463px] pt-[50px] px-[92px]">
        <a href="">
          <img src={logo}  alt="" width={254} height={73} />
        </a>

        <div>
          <ul className="flex justify-center items-center space-x-[37px] font-Russo">
            {navigation.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className=" hover:text-[#00FD74] text-[#fff]  text-[20px] "
                >
                  <a href="">{item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

    </nav>
  );
}
