import {
  useRouteError,
  isRouteErrorResponse,
  Link,
  useNavigate,
} from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div id="error-page">
      <p>Oops! There was an error 😟</p>

      {isRouteErrorResponse(error) ? (
        <>
          <pre>{error.statusText + " " + error.status}</pre>
          {error.data?.message && (
            <p>
              <i>{error.data.message}</i>
            </p>
          )}
        </>
      ) : error instanceof Error ? (
        <p>
          <i>{error.message}</i>
        </p>
      ) : (
        <></>
      )}

      <Link onClick={() => navigate(-1)} to={""}>
        Go back
      </Link>
    </div>
  );
}
