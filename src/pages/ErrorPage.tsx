import {
  useRouteError,
  isRouteErrorResponse,
  Link,
  useNavigate,
} from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div id="error-page">
        <p>Oops! {error.status}</p>

        <p>{error.statusText}</p>
        {error.data?.message && (
          <p>
            <i>{error.data.message}</i>
          </p>
        )}
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div id="error-page">
        <p>Oops! There was an error 😟</p>

        <p>
          <i>{error.message}</i>
        </p>
        <Link onClick={() => navigate(-1)} to={""}>
          Go back
        </Link>
      </div>
    );
  } else {
    return <></>;
  }
}
