import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        background:
          "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "white",
        padding: "60px 20px 30px",
        marginTop: "60px",
      }}
    >
      <div className="footer-grid">
        {/* Brand */}
        <div>
          <h2 className="footer-title">TechStore</h2>
          <p className="footer-text">
            The future of smart shopping. Premium gadgets, unbeatable prices,
            and next-gen technology at your fingertips.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="footer-heading">Quick Links</h3>
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Terms of Service</a>
          <a href="#" className="footer-link">Contact</a>
          <a href="#" className="footer-link">Support</a>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="footer-heading">Newsletter</h3>
          <p className="footer-text">
            Get exclusive deals & updates.
          </p>

          <div className="footer-input">
            <input type="email" placeholder="Email" />
            <button>Join</button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} TechStore — All Rights Reserved
      </div>

      {/* CSS */}
      <style>{`
        .footer-grid {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .footer-title {
          font-size: 32px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .footer-heading {
          font-size: 20px;
          margin-bottom: 16px;
        }

        .footer-text {
          color: #ccc;
          line-height: 1.6;
          font-size: 15px;
        }

        .footer-link {
          display: block;
          color: #ccc;
          text-decoration: none;
          margin-bottom: 10px;
          font-size: 15px;
        }

        .footer-input {
          display: flex;
          gap: 10px;
        }

        .footer-input input {
          flex: 1;
          padding: 10px;
          border-radius: 6px;
          border: none;
          outline: none;
        }

        .footer-input button {
          padding: 10px 18px;
          background: linear-gradient(90deg,#00f2ff,#ff00e5);
          border: none;
          border-radius: 6px;
          font-weight: 700;
          cursor: pointer;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.2);
          margin-top: 40px;
          padding-top: 15px;
          text-align: center;
          color: #aaa;
          font-size: 13px;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 30px;
          }

          .footer-title {
            font-size: 26px;
          }

          .footer-heading {
            font-size: 18px;
          }

          .footer-input {
            flex-direction: column;
          }

          .footer-input button {
            width: 100%;
          }
        }
      `}</style>
    </footer>
  );
}
