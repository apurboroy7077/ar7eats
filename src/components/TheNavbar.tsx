"use client";
import linkData from "@/data/linkData";
import Link from "next/link";
import { useEffect, useRef } from "react";

const TheNavbar = () => {
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
              className="w-[3rem] lg:w-[5rem] active:scale-[0.95]"
            />
          </Link>
        </div>
        <div className="hidden md:block ">
          <ul className="flex ">
            {linkData.map((data) => {
              let { title, hrefValue } = data;
              return (
                <li
                  key={Math.random()}
                  className="text-sm lg:text-lg font-medium  py-3 px-3 rounded-lg hover:bg-[#ecbdbb] active:scale-[0.95] text-nowrap"
                >
                  <Link href={hrefValue}>{title}</Link>
                </li>
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
          <button className="hidden md:block bg-[white] p-3 rounded-full active:scale-[0.95]">
            <img
              src="/images/icons/cart.png"
              className=" w-[2.2rem] lg:w-[3rem]"
            />
          </button>
          <Link href="/sign-in">
            <button className="hidden md:block bg-[#F54748] text-white px-3 py-1 rounded lg:text-lg active:scale-[0.95]">
              Log In
            </button>
          </Link>
        </div>
      </div>
      <ul className="mt-3 h-[0px] overflow-y-auto mobile-nav-list transition-all-halfsecond grid md:hidden">
        {linkData.map((data) => {
          let { title, hrefValue } = data;
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
