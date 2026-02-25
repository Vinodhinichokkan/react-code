useEffect(() => {
  fetch("/api/users")
    .then(res => res.json())
    .then(setUsers);
}, []);

//.............Event listener...........//

useEffect(() => {
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);

//........form validation..........//


useEffect(() => {
  if (email.includes("@")) {
    setValid(true);
  }
}, [email]);

