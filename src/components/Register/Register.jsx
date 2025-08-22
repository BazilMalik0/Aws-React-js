import React, { useActionState } from "react";
import styles from "./Register.module.css";
import { isEmpty, isEmail, hasMinlength } from "../../utils/validation";

function Register() {
  const registerFormAction = (prevFormState, formdata) => {
    const companyName = formdata.get("company");
    const employeeName = formdata.get("employee");
    const designation = formdata.get("designation");
    const email = formdata.get("email");
    const phone = formdata.get("phone");
    const Address1 = formdata.get("address1");
    const Address2 = formdata.get("address2");
    const state = formdata.get("state");
    const district = formdata.get("district");
    const pincode = formdata.get("pincode");
    const description = formdata.get("description");
    const terms = formdata.get("terms");

    let errors = [];

    if (isEmpty(companyName)) {
      errors.push("Enter a company name");
    }
    if (isEmpty(employeeName)) {
      errors.push("Enter an employer name");
    }

    if (designation === "designation") {
      errors.push("select a valid designation");
    }
    if (isEmail(email)) {
      errors.push("Enter a valid email address");
    }
    if (isEmpty(phone)) {
      errors.push("Please enter a valid phone number");
    }
    if (!hasMinlength(phone, 10)) {
      errors.push("Phone number should be at least 10 digits long");
    }
    if (isEmpty(Address1)) {
      errors.push("Enter address line 1");
    }

    if (isEmpty(pincode)) {
      errors.push("Enter a valid pincode");
    }
    if (!hasMinlength(pincode, 6)) {
      errors.push("Pincode should be at least 6 digits long");
    }

    if (isEmpty(description)) {
      errors.push("Enter a brief description");
    }
    if (!hasMinlength(description, 100)) {
      errors.push("Description should be at least 100 characters long");
    }

    if (!terms) {
      errors.push("Accept the terms and conditions");
    }

    if (state === "state") {
      errors.push("select a valid state");
    }

    if (district === "district") {
      errors.push("select a valid district");
    }

    if (errors.length > 0)
      return {
        errors,
        enteredValues: {
          companyName,
          employeeName,
          designation,
          email,
          phone,
          Address1,
          Address2,
          state,
          district,
          pincode,
          description,
          terms,
        },
      };
    return { errors: null };
  };
  const [formState, formAction] = useActionState(registerFormAction, {
    errors: null,
  });
  return (
    <div className={styles.form}>
      <form className={styles.formContainer} action={formAction}>
        <h4>Application Form For Employer</h4>
        <div>
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            placeholder="Company Name"
            name="company"
            defaultValue={formState.enteredValues?.companyName}
          />
        </div>
        <div className={styles.row}>
          <div>
            <label htmlFor="employeeName">Employee Namee</label>
            <input
              type="text"
              placeholder="Employee Name"
              name="employee"
              defaultValue={formState.enteredValues?.employeeName}
            />
          </div>
          <div className={styles.designation}>
            <select
              name="designation"
              defaultValue={formState.enteredValues?.designation || ""}
            >
              <option value="designation">---Select Designation---</option>
              <option value="director">Director</option>
              <option value="saab">Employee</option>
              <option value="partner">Partner</option>
              <option value="trustee">Trustee</option>
            </select>
          </div>
        </div>

        <div className={styles.row}>
          <div>
            <label htmlFor="email"> Email</label>
            <input
              type="text"
              placeholder="Email"
              name="email"
              defaultValue={formState.enteredValues?.email}
            />
          </div>

          <div>
            <label htmlFor="phone">Phone No</label>
            <input
              type="number"
              placeholder="Phone Number"
              name="phone"
              defaultValue={formState.enteredValues?.phone}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div>
            <label htmlFor="Address">Address 1</label>
            <input
              type="text"
              placeholder="Address 1"
              name="address1"
              defaultValue={formState.enteredValues?.Address1}
            />
          </div>
          <div>
            <label htmlFor="Address">Address 2</label>
            <input
              type="text"
              placeholder="Address 2"
              name="address2"
              defaultValue={formState.enteredValues?.Address2}
            />
          </div>
        </div>
        <div className={styles.row}>
          <select
            name="state"
            defaultValue={formState.enteredValues?.state || ""}
          >
            <option value="state">---Select State---</option>
            <option value="J&k">Jammu and Kashmir</option>
            <option value="west bengal">West Bengal</option>
            <option value="delhi">Delhi</option>
            <option value="Up">Uttar Pradesh</option>
            <option value="mp">Madhya Pradesh</option>
            <option value="gujarat">Gujarat</option>
          </select>

          <select
            name="district"
            defaultValue={formState.enteredValues?.district || ""}
          >
            <option value="district">---Select District---</option>
            <option value="srinagar">Srinagar</option>
            <option value="pulwama">Pulwama</option>
            <option value="anantnag">Anantnag</option>
            <option value="budgam">Budgam</option>
            <option value="baramulla">Baramulla</option>
            <option value="kupwara">Kupwara</option>
          </select>
        </div>

        <div className={styles.row}>
          <div className={styles.readOnly}>
            <input type="text" value="India" readOnly />
          </div>
          <div>
            <label htmlFor="pincode">Pin Code</label>
            <input
              type="number"
              placeholder="Pin Code"
              name="pincode"
              defaultValue={formState.enteredValues?.pincode}
            />
          </div>
        </div>

        <label htmlFor="description">Description</label>
        <textarea
          placeholder="Please provide details about staff, InfraStructure, Current Business, Reason of joining AICPE"
          name="description"
          cols="500"
          rows="4"
          defaultValue={formState.enteredValues?.description}
        ></textarea>

        <div>
          <label htmlFor="terms and conditions">
            <input
              type="checkbox"
              id="terms and conditions"
              name="terms"
              defaultChecked={formState.enteredValues?.terms == "on"}
            />
            I agree to the Terms and Conditions and Privacy Policy.
          </label>
        </div>

        <ul>
          {formState.errors &&
            formState.errors.map((error, index) => (
              <li key={index} className={styles.errors}>
                {error}
              </li>
            ))}
        </ul>
        <footer>
          Enter The Contents of Image:
          <input type="text" />
        </footer>

        <button type="submit" className={styles.regButton}>
          Register
        </button>
        <button type="button" className={styles.cancelButton}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default Register;
