import { useRouteError } from "react-router-dom";

const SinglePageError = () => {
  const error = useRouteError();
  console.log(error.message);
  return <div>there was an error</div>;
};
export default SinglePageError;
