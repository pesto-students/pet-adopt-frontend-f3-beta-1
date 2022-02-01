import React from "react";
import styles from "./Footer.module.css";
// <div className="footer">
//   <footer className="py-5">
//     {/* <div className="container">
//       <p className="m-0 text-center text-black">
//         Copyright &copy; PetPal 2021
//       </p>
//     </div> */}
//   </footer>
// </div>
function Footer() {
  return (
    <>
      <footer>
        <div className={`container ${styles.style_contianer}`}>
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className={`col-6 col-lg-4 ${styles.allign_footer}`}>
                  <div className={styles.footer_subscribe_container_title}>
                    Information
                  </div>
                  <ul>
                    <li className={styles.li_style}>FAQ</li>
                    <li className={styles.li_style}>Blog</li>
                    <li className={styles.li_style}>Support</li>
                  </ul>
                </div>
                <div className={`col-6 col-lg-4 ${styles.allign_footer}`}>
                  <div className={styles.footer_subscribe_container_title}>
                    Company
                  </div>
                  <ul>
                    <li className={styles.li_style}>About us</li>
                    <li className={styles.li_style}>Contact us</li>
                    <li className={styles.li_style}>Lift Media</li>
                  </ul>
                </div>

                <div className="col-6 col-lg-4">
                  <div className={styles.footer_subscribe_container}>
                    <div className={styles.footer_subscribe_container_title}>
                      Subscribe
                    </div>
                    <div className={styles.email_input_button_container}>
                      <input
                        type="text"
                        placeholder="Your email"
                        className={styles.email_input_field}
                      />
                      <div className={styles.email_submit_button}>{"->"}</div>
                    </div>
                    <p>
                      Hello, we are Lift Media. Our goal is to translate the
                      positive effects from revolutionizing how companies engage
                      with their clients & their team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="mt-5">
          <p className="main-hero-para text-center w-100">
            Copyright &copy; PetPal 2021
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
