import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { fetchUser, CreateUser, UpdateUser } from "../../services/Users";
import { loadingSvg } from "../../public/assests/svg/loading";
import "tailwindcss/tailwind.css";

const Form = () => {
  const router = useRouter();
  const [username, setusername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [alreadyUser, setAlreadyUser] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitLoading, setSubmitLoading] = useState(false);
  useEffect(() => {
    const { id } = router.query;
    if (id !== "" && id !== undefined) {
      setusername(id);
    }
  }, [router.query]);

  useEffect(() => {
    if (username !== "" && username !== undefined) {
      async function initiateAPICall() {
        let result = await fetchUser(username);
        if (result.statusCode !== 404) {
          setAlreadyUser(true);
          setPhoneNumber(result.phoneNumber);
          setEmail(result.email);
          setName(result.name);
          result?.dateOfBirth &&
            setDateOfBirth(result.dateOfBirth.slice(0, 10));
        }
        setLoading(false);
      }
      initiateAPICall();
    }
  }, [username]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitLoading(true);
    if (alreadyUser) {
      let obj = {
        username: username,
        phoneNumber: phoneNumber,
        email: email,
        name: name,
        dateOfBirth: new Date(dateOfBirth),
      };
      async function initiateAPICall() {
        let result = await UpdateUser(obj, username);
        setSubmitLoading(false);
        if (result.statusCode !== 404) {
          router.push("/result");
        }
      }
      initiateAPICall();
    } else {
      let obj = {
        username: username,
        phoneNumber: phoneNumber,
        email: email,
        name: name,
        dateOfBirth: new Date(dateOfBirth),
      };
      async function initiateAPICall() {
        let result = await CreateUser(obj);
        setSubmitLoading(false);
        if (result.statusCode !== 404) {
          router.push("/result");
        }
      }
      initiateAPICall();
    }
  };

  const handleCancel = () => {
    router.push("/");
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white p-4 rounded-lg shadow-lg  w-1/2 max-w-sm min-w-fit m-2">
          <h1 className="text-2xl font-semibold mb-4">User Details</h1>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Phone Number"
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <input
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              placeholder="Date of Birth"
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-bold text-lg flex justify-center gap-1"
            >
              {alreadyUser ? "Update" : "Submit"}
              {submitLoading && loadingSvg("white")}
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-4 font-bold text-lg"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
      {loading && (
        <div className="absolute bg-blue-200 bg-opacity-25 w-full h-screen top-0 flex justify-center items-center">
          {loadingSvg()}
        </div>
      )}
    </div>
  );
};

export default Form;
