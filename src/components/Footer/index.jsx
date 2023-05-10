import Image from "next/image";
import Link from "next/link";
import { MdMail, MdPhone } from "react-icons/md";
import { HiPaperAirplane } from "react-icons/hi";
import { IoPaperPlane } from "react-icons/io5";
export default function Footer() {
  const styles = {
    footer_links_li: "relative mb-4 hover:text-primary-red",
  };
  return (
    <footer className="bg-primary-red-dark/25">
      <div className="mx-auto desktop:px-32 lg:px-20 px-5 border-b desktop:text-xl text-sm text-white">
        <div className="grid lg:grid-cols-5 pt-20 pb-10">
          <div>
            <div>
              <Image
                src={"/images/commons/logo-secondary.png"}
                alt="Team Image"
                height={"260"}
                width={410}
                className="w-96 h-20 object-cover"
              />
            </div>
            <h6 className="desktop:ml-11 ml-7 desktop:text-base">
              Cape Town, South Africa
            </h6>
          </div>
          <div>
            <h5 className="desktop:text-xl mb-4 font-semibold">Pages</h5>
            <ul className="list-none">
              <li className={styles.footer_links_li}>
                <Link href={"/"}>Home</Link>
              </li>
              <li className={styles.footer_links_li}>
                <Link href={"pricing"}>App Pricing</Link>
              </li>
              <li className={styles.footer_links_li}>
                <Link href={"blogs"}>Blogs</Link>
              </li>
              <li className={styles.footer_links_li}>
                <Link href={"about"}>About us</Link>
              </li>
              <li className={styles.footer_links_li}>
                <Link href={"contact"}>Contact us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="desktop:text-xl mb-4 font-semibold">Pages</h5>
            <ul className="list-none">
              <li className={styles.footer_links_li}>
                <Link href={"/web_development"}>Web Development</Link>
              </li>
              <li className={styles.footer_links_li}>
                <Link href={"/app_development"}>App Development</Link>
              </li>
              <li className={styles.footer_links_li}>
                <Link href={"/custom_software"}>Custom Software</Link>
              </li>
              <li className={styles.footer_links_li}>
                <Link href={"/game_development"}>Game Development</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="desktop:text-xl mb-4 font-semibold">Social Media</h5>
            <ul className="list-none">
              <li className={styles.footer_links_li}>
                <Link href={"/web_development"}>Twitter</Link>
              </li>
              <li className={styles.footer_links_li}>
                <Link href={"/app_development"}>Facebook</Link>
              </li>
              <li className={styles.footer_links_li}>
                <Link href={"/custom_software"}>LinkedIn</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="desktop:text-xl mb-4 font-semibold">Contact Us</h5>
            <ul className="list-none">
              <li className={styles.footer_links_li + " inline-flex gap-2"}>
                <MdMail className="w-5 h-5" />
                <Link href={"/web_development"}>
                  thanhthanh@merakigroup.asia
                </Link>
              </li>
              <li className={styles.footer_links_li + " inline-flex gap-2"}>
                <MdPhone className="w-5 h-5" />
                <Link href={"/app_development"}>+84 3 28 99 49 49</Link>
              </li>
              <li className={" mb-8"}>
                <h5 className="text-xl font-semibold">
                  Subscribe to our Newsletter
                </h5>
              </li>
              <li className="relative mb-4">
                <form>
                  <input
                    type="email"
                    className="desktop:p-4 p-3 rounded-lg w-full"
                    placeholder="Your email"
                  />
                  <button className="bg-primary-red desktop:px-4 desktop:py-2 px-2 py-1 rounded-md absolute desktop:top-1 desktop:right-1 top-0.5 right-0.5 ">
                    <IoPaperPlane className="w-8 h-8 " />
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto desktop:px-32 lg:px-20 px-5 ml-10 flex justify-between items-center desktop:text-xl text-sm text-white">
        <ul className="list-none flex py-8 gap-8 ">
          <li className="hover:text-primary-red">
            <Link href={"cookies_policy"}>Cookies Policy</Link>
          </li>

          <li className="hover:text-primary-red">
            <Link href={"privacy_policy"}>Privacy Policy</Link>
          </li>

          <li className="hover:text-primary-red">
            <Link href={"terms_conditions"}>Terms & Condition</Link>
          </li>
        </ul>
        <h6>© 2023, www.mrrobotdev.co.za. All Right Reserved</h6>
      </div>
    </footer>
  );
}