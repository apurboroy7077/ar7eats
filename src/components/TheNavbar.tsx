"use client";
import {
  CART_PAGE_LINK,
  LOCALSTORAGE_USERDATA_KEYNAME,
  LOGOUT_ADDRESS,
} from "@/data/Variables";
import linkData from "@/data/linkData";
import { userDataType } from "@/data/types";
import useCart from "@/utils/ZustandCart";
import useUser from "@/utils/ZustandUser";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const TheNavbar = () => {
  const loginStatus = useUser((state) => state.loginStatus);
  const nameOfLoggedInUsers = useUser((state) => state.name);
  const cartData = useCart((state) => state.cartData);
  let [userName, setUserName] = useState("");
  useEffect(() => {
    let userData = localStorage.getItem(LOCALSTORAGE_USERDATA_KEYNAME);
    if (userData) {
      let parsedUserData = JSON.parse(userData) as userDataType;
      let { name } = parsedUserData;
      setUserName(name);
    }
  }, []);
  let handleMenuClick = () => {
    let navList = document.getElementsByClassName("mobile-nav-list")[0];
    if (navList.classList.contains("h-[170px]")) {
      navList.classList.remove("h-[170px]");
    } else {
      navList.classList.add("h-[170px]");
    }
  };
  useEffect(() => {
    let menuImage = document.getElementsByClassName("menu-image")[0];
    menuImage.addEventListener("click", handleMenuClick);
    let cleanupFunction = () => {
      menuImage.removeEventListener("click", handleMenuClick);
    };
    return cleanupFunction;
  });
  return (
    <nav className="bg-[#F9DEDD] px-3 md:px-[3rem] lg:px-[7vw] py-3 md:py-[2rem]">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/">
            <img
              src="/images/icons/logo.png"
              alt="website logo"
              className="min-w-[3rem] w-[3rem] lg:w-[5rem] active:scale-[0.95]"
            />
          </Link>
        </div>
        <div className="hidden md:block overflow-y-auto">
          <ul className="flex ">
            {linkData.map((data) => {
              let { title, hrefValue } = data;
              if (title === "Sign In") {
                if (loginStatus === "LOGGED_IN") {
                  title = `Logout(${nameOfLoggedInUsers})`;
                  hrefValue = LOGOUT_ADDRESS;
                }
              }
              if (title === "Upload Own Item") {
                if (loginStatus === "NOT_LOGGED_IN") {
                  return null;
                }
              }
              return (
                <Link href={hrefValue} key={Math.random()}>
                  <li className="text-sm lg:text-lg font-medium  py-3 px-3 rounded-lg hover:bg-[#ecbdbb] active:scale-[0.95] text-nowrap">
                    {title}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <button>
            <img
              src="/images/icons/menu.png"
              className="w-[3rem] menu-image md:hidden"
            />
          </button>
          <Link className="hidden md:block" href={CART_PAGE_LINK}>
            <button className=" relative bg-[white] p-3 rounded-full active:scale-[0.95]">
              <img
                src="/images/icons/cart.png"
                className="min-w-[2.2rem] w-[2.2rem] lg:w-[3rem]"
              />
              {cartData.length > 0 && (
                <div className=" absolute bg-[#F54748] text-white px-3 rounded top-[-1px] right-[-16px]">
                  {cartData.length}
                </div>
              )}
            </button>
          </Link>
          {loginStatus === "NOT_LOGGED_IN" && (
            <Link className="hidden md:block" href="/sign-in">
              <button className=" bg-[#F54748] text-white px-3 py-1 rounded lg:text-lg active:scale-[0.95]">
                Log In
              </button>
            </Link>
          )}
        </div>
      </div>
      <ul className="mt-3 h-[0px] overflow-y-auto mobile-nav-list transition-all-halfsecond grid md:hidden">
        {linkData.map((data) => {
          let { title, hrefValue } = data;
          if (title === "Sign In") {
            if (loginStatus === "LOGGED_IN") {
              title = `Logout(${nameOfLoggedInUsers})`;
              hrefValue = `/log-out`;
            }
          }
          return (
            <li
              key={Math.random()}
              className="p-1 hover:bg-red-500 active:scale-[0.99] font-medium"
            >
              <Link href={hrefValue}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default TheNavbar;

// Failed 1-------------------------------------------------------------------------------------------------------------------------------------------------------------------

// let handleClickMenuButton = () => {
//   if (navBarRef.current) {
//     if (navBarRef.current.classList.contains("h-fit-content")) {
//       console.log("contains");
//       navBarRef.current.classList.remove("h-fit-content");
//     } else {
//       console.log("not contains");
//       navBarRef.current.classList.add("h-fit-content");
//     }
//   }
// };
// useEffect(() => {
//   if (menuButtonRef.current) {
//     menuButtonRef.current?.addEventListener("click", handleClickMenuButton);
//   }
//   // cleanup function
//   return () => {
//     menuButtonRef.current?.removeEventListener(
//       "click",
//       handleClickMenuButton
//     );
//   };
// }, []);
// Failed 2--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// "use client";
// import Link from "next/link";
// import { useEffect, useRef } from "react";
// type navbarRefType = null | HTMLUListElement;
// type menuButtonRefType = null | HTMLImageElement;

// const TheNavbar = () => {
//   let navBarRef = useRef(null as navbarRefType);
//   let menuButtonRef = useRef(null as menuButtonRefType);
//   let handleClickOnMenuButton = (navBarList: HTMLElement) => {
//     if (navBarList.classList.contains("height-fit-content")) {
//       console.log("remove");
//       navBarList.classList.remove("height-fit-content");
//     } else {
//       console.log("hello");
//       navBarList.classList.add("height-fit-content");
//     }
//   };
//   useEffect(() => {
//     let menuImage = document.getElementsByClassName("menu-image")[0];
//     let navBarList = document.getElementsByClassName("mobile-nav-list")[0];
//     let menuImageEvent = () =>
//       menuImage.addEventListener("click", () => {
//         if (navBarList.classList.contains("height-fit-content")) {
//           console.log("remove");
//           navBarList.classList.remove("height-fit-content");
//         } else {
//           console.log("hello");
//           navBarList.classList.add("height-fit-content");
//         }
//       });

//     return () => {
//       return menuImage.removeEventListener("click", menuImageEvent());
//     };
//   }, []);

//   return (
//     <nav>
//       <div className="flex items-center justify-between">
//         <div>
//           <img
//             src="/images/icons/logo.png"
//             alt="website logo"
//             className="w-[3rem]"
//           />
//         </div>
//         <div>
//           <button>
//             <img
//               src="/images/icons/menu.png"
//               className="w-[3rem] menu-image"
//               ref={menuButtonRef}
//             />
//           </button>
//         </div>
//       </div>
//       <ul
//         className="mt-3 h-[0px] overflow-hidden mobile-nav-list transition-all-halfsecond"
//         ref={navBarRef}
//       >
//         <li>
//           <Link href="/">Home</Link>
//         </li>
//         <li>
//           <Link href="/menu">Menu</Link>
//         </li>
//         <li>
//           <Link href="/about-us">About Us</Link>
//         </li>
//         <li>
//           <Link href="/order-online">Order Online</Link>
//         </li>
//         <li>
//           <Link href="/reservation">Reservation</Link>
//         </li>
//         <li>
//           <Link href="/contact-us">Contact Us</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default TheNavbar;
