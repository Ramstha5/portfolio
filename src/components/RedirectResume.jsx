import { useEffect } from "react";
const RedirectResume = () => {
  useEffect(() => {
    window.location.href =
      "https://drive.google.com/file/d/1eYamaREALr7YURtGDnSz3PUU6yyR4h3D/view";
  }, []);

  return <div>Redirecting to resume...</div>;
};

export default RedirectResume;
