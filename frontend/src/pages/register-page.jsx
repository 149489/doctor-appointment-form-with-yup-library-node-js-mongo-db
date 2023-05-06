import { useState } from "react";
import axios from "axios";

import "../styles/resister-page.css";
import api from "../apis";

export default function RegisterPage() {
  const [fields, setFields] = useState({
    name: "",
    mobile: "",
    email: "",
  });

  function handleInput(e) {
    setFields({ ...fields, [e.target.name]: e.target.value });
  }

  async function handleRegister(e) {
    e.preventDefault();
    try {
      const res = await axios.post(api.register, {
        ...fields,
      });

      console.log(res);

      if (res.status === 201) {
      }
    } catch (error) {
      if (error.response.status === 404) {
      }
    }
  }

  return (
    <section className="section-register">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="form-box">
              <form method="post" onSubmit={handleRegister}>
                <div className="row">
                  <div className="col-12">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter name"
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Enter mobile"
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <button type="submit">Register</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
